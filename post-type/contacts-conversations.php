<?php
if ( !defined( 'ABSPATH' ) ) { exit; } // Exit if accessed directly.

/**
 * Class Disciple_Tools_Conversations_Base
 * Load the core post type hooks into the Disciple.Tools system
 */
class Disciple_Tools_Contacts_Conversations extends DT_Module_Base {

    public $post_type = 'conversations';
    public $module = 'conversations_base';

    private static $_instance = null;
    public static function instance() {
        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function __construct() {
        parent::__construct();
        if ( !self::check_enabled_and_prerequisites() ){
            return;
        }

        //setup tiles and fields
        add_filter( 'dt_custom_fields_settings', [ $this, 'dt_custom_fields_settings' ], 200, 2 );
        add_action( 'dt_record_after_details_section', [ $this, 'dt_add_section' ], 30, 2 );

        //comments
        add_filter( 'dt_filter_post_comments', [ $this, 'dt_filter_post_comments' ], 10, 3 );

        //hooks
        add_filter( 'dt_post_create_fields', [ $this, 'convert_emails_to_lowercase' ], 10, 2 );
        add_filter( 'dt_post_update_fields', [ $this, 'convert_emails_to_lowercase' ], 10, 2 );

        add_filter( 'dt_post_create_fields', [ $this, 'dt_post_create_fields' ], 10, 2 );
        add_filter( 'dt_post_update_fields', [ $this, 'dt_post_create_fields' ], 10, 2 );

        add_action( 'dt_post_created', [ $this, 'dt_post_created' ], 10, 3 );
        add_action( 'dt_post_updated', [ $this, 'dt_post_updated' ], 10, 5 );
    }

    /**
     * makes sure emails are always lowercase
     * @return array
     */
    public function convert_emails_to_lowercase( array $fields, string $post_type ){
        if ( $post_type === 'contacts' ){
            if ( isset( $fields['contact_email'] ) ){
                foreach ( $fields['contact_email'] as $index => $contact_email ){
                    if ( isset( $contact_email['value'] ) && is_email( $contact_email['value'] ) ){
                        $fields['contact_email'][$index]['value'] = trim( strtolower( $contact_email['value'] ) );
                    }
                }
            }
        }
        return $fields;
    }

    public function dt_post_create_fields( array $fields, string $post_type ){
        return $fields;
    }

    private function check_for_com_handles( $contact_id, $fields ){
        $contact = DT_Posts::get_post( 'contacts', $contact_id, true, false );
        $contact_fields = DT_Posts::get_post_field_settings( 'contacts' );
        $names = DT_Conversations_API::get_first_and_last_name( $contact['name'] );
        foreach ( $fields as $key => $values ){
            if ( !isset( $contact_fields[$key]['type'] ) || $contact_fields[$key]['type'] !== 'communication_channel' ){
                continue;
            }
            foreach ( $values as $com_value ){
                $conv_title = '';
                $conv_type = '';
                $conv_channels = [];
                if ( $key === 'contact_email' ){
                    $conv_title = DT_Conversations_API::validate_and_format_email( $com_value['value'] );
                    $conv_type = 'email';
                } else if ( $key === 'contact_phone' ){
                    $conv_title = DT_Conversations_API::validate_and_format_phone( $com_value['value'] );
                    $conv_type = 'phone';
                } else if ( $key === 'contact_facebook' ){
                    $conv_title = $com_value['value'];
                    $conv_type = 'facebook';
                }
                //this conversation is already created
                if ( in_array( $com_value['value'], DT_Conversations_API::array_key_values( $contact['conversations'] ?? [], 'post_title' ), true ) ){
                    continue;
                }
                if ( empty( $conv_title ) || empty( $conv_type ) ){
                    continue;
                }
                $conversation_fields = [
                    'first_name' => $names['first_name'],
                    'last_name' => $names['last_name'],
                    'type' => $conv_type
                ];
                $create_or_update = DT_Conversations_API::create_or_update_conversation_record( $conv_title, $conversation_fields, $contact_id );
            }
        }
    }

    public function dt_post_created( string $post_type, int $post_id, array $initial_fields ){
        if ( $post_type === 'contacts' ){
            $this->check_for_com_handles( $post_id, $initial_fields );
        }
    }

    public function dt_post_updated( $post_type, $post_id, $request_fields, $post_fields_before_update, $post ){
        if ( $post_type === 'contacts' ){
            $contact = DT_Posts::get_post( 'contacts', $post_id, true, false );
            /** Auto create an email conversation on contact creation with an email address*/
            $this->check_for_com_handles( $post_id, $request_fields );
        }
    }

    public function dt_custom_fields_settings( $fields, $post_type ){
        if ( $post_type === 'contacts' ){
            $fields[$this->post_type] = [
                'name' => 'Conversations',
                'description' => '',
                'type' => 'connection',
                'post_type' => $this->post_type,
                'p2p_direction' => 'from',
                'p2p_key' => $this->post_type.'_to_contacts',
                'tile' => 'other',
                'icon' => get_template_directory_uri() . '/dt-assets/images/group-type.svg',
                'create-icon' => get_template_directory_uri() . '/dt-assets/images/add-group.svg',
                'show_in_table' => 35
            ];
        }

        return $fields;
    }

    public function dt_filter_post_comments( $response_body, $post_type, $post_id ){
        if ( $post_type === 'contacts' ){
            $contact_conversations = DT_Posts::list_posts( 'conversations', [ 'contacts' => [ $post_id ] ] );
            foreach ( $contact_conversations['posts'] as $conv ){
                $conv_comments = DT_Posts::get_post_comments( 'conversations', $conv['ID'] );
                $response_body = array_merge( $response_body, $conv_comments['comments'] );
            }
        }
        return $response_body;
    }

    public function dt_add_section( $post_type, $post ) {
        if ( $post_type === 'contacts' ){
            $conversations = DT_Posts::list_posts( 'conversations', [ 'contacts' => [ $post['ID'] ] ] );
            $cats = [
                'email' => [ 'label' => 'Email', 'icon' => 'email.svg' ],
                'phone' => [ 'label' => 'Phone', 'icon' => 'phone.svg' ],
                'facebook' => [ 'label' => 'Facebook', 'icon' => 'facebook.svg' ],
            ]
            ?>
            <div class="cell small-12">
                <div class="bordered-box" id="conversations-tile">
                    <h3 class="section-header">
                        Conversations
                    </h3>
                    <div class="section-body">
                        <?php foreach ( $cats as $key => $cat ) : ?>
                            <div class="section-subheader">
                                <?php echo esc_html( $cat['label'] ); ?> <button class="button tiny hollow">+</button>
                            </div>
                            <?php foreach ( $conversations['posts'] as $conversation ) :
                                if ( ( $conversation['type']['key'] ?? '' ) === $key ) : ?>
                                    <style>
                                        i.dt-font-icon {
                                            font-size: 1.1rem;
                                            padding: 0;
                                        }
                                    </style>
                                    <div>
                                        <img class="dt-icon" src="<?php echo esc_html( get_template_directory_uri() . '/dt-assets/images/' . $cat['icon'] ) ?>"/>
                                        <?php echo esc_html( $conversation['name'] ); ?>
                                        <?php echo esc_html( $conversation['status']['key'] ?? '' ); ?>
                                        - 6 conversations -
                                        subscribed to 2 lists
                                        <a href="<?php echo esc_html( $conversation['permalink'] ); ?>"
                                           data-action="view" data-tooltip title="<?php esc_html_e( 'View', 'disciple_tools' ) ?>" type="button" class="empty-select-button select-button small button view">
                                            <i class="dt-font-icon mdi mdi-eye-outline"></i>
                                        </a>
                                        <button data-action="copy" data-tooltip title="<?php esc_html_e( 'Copy', 'disciple_tools' ) ?>" type="button" class="empty-select-button select-button small button view">
                                            <i class="dt-font-icon mdi mdi-content-copy"></i>
                                        </button>
                                        <button data-action="delete" data-tooltip title="<?php esc_html_e( 'Delete', 'disciple_tools' ) ?>" type="button" class="empty-select-button select-button small button view">
                                            <i class="dt-font-icon mdi mdi-delete-outline"></i>
                                        </button>
                                    </div>
                                <?php endif;
                            endforeach; ?>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        <?php }
    }

}


