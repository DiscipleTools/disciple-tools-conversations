<?php
if ( !defined( 'ABSPATH' ) ) { exit; } // Exit if accessed directly.

/**
 * Class Disciple_Tools_Conversations_Base
 * Load the core post type hooks into the Disciple.Tools system
 */
class Disciple_Tools_Conversations_Base extends DT_Module_Base {

    public $post_type = 'conversations';
    public $module = 'conversations_base';
    public $single_name = 'Conversation';
    public $plural_name = 'Conversations';
    public static function post_type(){
        return 'conversations';
    }

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

        //setup post type
        add_action( 'after_setup_theme', [ $this, 'after_setup_theme' ], 100 );
        add_filter( 'dt_set_roles_and_permissions', [ $this, 'dt_set_roles_and_permissions' ], 20, 1 ); //after contacts

        //setup tiles and fields
        add_filter( 'dt_custom_fields_settings', [ $this, 'dt_custom_fields_settings' ], 200, 2 );
        add_filter( 'dt_details_additional_tiles', [ $this, 'dt_details_additional_tiles' ], 10, 2 );
        add_action( 'dt_details_additional_section', [ $this, 'dt_details_additional_section' ], 20, 2 );
        add_action( 'wp_enqueue_scripts', [ $this, 'scripts' ], 99 );
        add_filter( 'dt_get_post_type_settings', [ $this, 'dt_get_post_type_settings' ], 20, 2 );
        add_filter( 'dt_comments_additional_sections', [ $this, 'add_comment_section' ], 10, 2 );


        // hooks
        add_action( 'post_connection_removed', [ $this, 'post_connection_removed' ], 10, 4 );
        add_action( 'post_connection_added', [ $this, 'post_connection_added' ], 10, 4 );
        add_filter( 'dt_create_post_args', [ $this, 'dt_create_post_args' ], 10, 3 );
        add_filter( 'dt_create_post_check_proceed', [ $this, 'dt_create_post_check_proceed' ], 10, 3 );
        add_filter( 'dt_update_post_check_proceed', [ $this, 'dt_update_post_check_proceed' ], 10, 3 );
        add_filter( 'dt_post_update_fields', [ $this, 'dt_post_update_fields' ], 10, 3 );
        add_filter( 'dt_post_create_fields', [ $this, 'dt_post_create_fields' ], 10, 2 );
        add_action( 'dt_post_created', [ $this, 'dt_post_created' ], 10, 3 );
//        add_action( 'dt_post_updated', [ $this, 'dt_post_updated' ], 10, 5 );

        add_action( 'dt_comment_created', [ $this, 'dt_comment_created' ], 10, 4 );

//        add_action( 'dt_record_after_details_section', [ $this, 'dt_record_after_details_section' ], 10, 2 );

        //comments
        add_filter( 'dt_filter_post_comments', [ $this, 'dt_filter_post_comments' ], 10, 3 );
    }

    public function after_setup_theme(){
        $this->single_name = __( 'Conversation', 'disciple-tools-conversations' );
        $this->plural_name = __( 'Conversations', 'disciple-tools-conversations' );

        if ( class_exists( 'Disciple_Tools_Post_Type_Template' ) ) {
            new Disciple_Tools_Post_Type_Template( $this->post_type, $this->single_name, $this->plural_name );
        }
    }

      /**
     * Set the singular and plural translations for this post types settings
     * The add_filter is set onto a higher priority than the one in Disciple_tools_Post_Type_Template
     * so as to enable localisation changes. Otherwise the system translation passed in to the custom post type
     * will prevail.
     */
    public function dt_get_post_type_settings( $settings, $post_type ){
        if ( $post_type === $this->post_type ){
            $settings['label_singular'] = __( 'Conversation', 'disciple-tools-conversations' );
            $settings['label_plural'] = __( 'Conversations', 'disciple-tools-conversations' );
        }
        return $settings;
    }

    // @todo
    public function dt_set_roles_and_permissions( $expected_roles ){

        if ( !isset( $expected_roles['my_starter_role'] ) ){
            $expected_roles['my_starter_role'] = [

                'label' => __( 'My Conversation Role', 'disciple-tools-conversations' ),
                'description' => 'Does something Cool',
                'permissions' => [
                    'access_contacts' => true,
                ]
            ];
        }

        // if the user can access contact they also can access this post type
        foreach ( $expected_roles as $role => $role_value ){
            if ( isset( $expected_roles[$role]['permissions']['access_contacts'] ) && $expected_roles[$role]['permissions']['access_contacts'] ){
                $expected_roles[$role]['permissions']['access_' . $this->post_type ] = true;
                $expected_roles[$role]['permissions']['create_' . $this->post_type] = true;
                $expected_roles[$role]['permissions']['update_' . $this->post_type] = true;
            }
        }

        if ( isset( $expected_roles['dt_admin'] ) ){
            $expected_roles['dt_admin']['permissions']['view_any_'.$this->post_type ] = true;
            $expected_roles['dt_admin']['permissions']['update_any_'.$this->post_type ] = true;
        }
        if ( isset( $expected_roles['administrator'] ) ){
            $expected_roles['administrator']['permissions']['view_any_'.$this->post_type ] = true;
            $expected_roles['administrator']['permissions']['update_any_'.$this->post_type ] = true;
            $expected_roles['administrator']['permissions']['delete_any_'.$this->post_type ] = true;
        }

        return $expected_roles;
    }

    public function dt_custom_fields_settings( $fields, $post_type ){
        if ( $post_type === $this->post_type ){

            $fields['name']['tile'] = 'status';
            $fields['name']['name'] = 'Unique Identifier';

            $fields['type'] = [
                'name'        => __( 'Type', 'disciple-tools-conversations' ),
                'description' => __( 'Select the type of conversation.', 'disciple-tools-conversations' ),
                'type'        => 'key_select',
                'default'     => [
                    'email'   => [
                        'label' => __( 'Email', 'disciple-tools-conversations' ),
                        'description' => __( 'Email conversation', 'disciple-tools-conversations' ),
                    ],
                    'phone'   => [
                        'label' => __( 'Phone', 'disciple-tools-conversations' ),
                        'description' => __( 'SMS, Whatsapp, etc', 'disciple-tools-conversations' ),
                    ],
                    'facebook' => [
                        'label' => __( 'Facebook', 'disciple-tools-conversations' ),
                        'description' => __( 'Facebook conversation', 'disciple-tools-conversations' ),
                    ],
                ],
                'tile'     => 'status',
                'font-icon' => 'mdi mdi-arrow-decision',
                'show_in_table' => 5,
                'select_cannot_be_empty' => true,
            ];


            $fields['status'] = [
                'name'        => __( 'Status', 'crm-emails' ),
                'description' => __( 'Set the current status.', 'crm-emails' ),
                'type'        => 'key_select',
                'default'     => [
                    'unverified' => [
                        'label' => __( 'Not Verified', 'crm-emails' ),
                        'color' => '#FF9800'
                    ],
                    'verified' => [
                        'label' => __( 'Verified', 'crm-emails' ),
                        'color' => '#4CAF50'
                    ],
                    'unsubscribed'   => [
                        'label' => __( 'Unsubscribed', 'crm-emails' ),
                        'color' => '#F43636'
                    ],
                    'blocked'   => [
                        'label' => __( 'Do not Email', 'crm-emails' ),
                        'color' => '#F43636'
                    ],
                ],
                'tile'     => 'status',
                'font-icon' => 'mdi mdi-list-status',
                'default_color' => '#FFFFFF',
                'show_in_table' => 10,
            ];

//            $fields['assigned_to'] = [
//                'name'        => __( 'Assigned To', 'disciple-tools-conversations' ),
//                'description' => __( 'Select the main person who is responsible for reporting on this record.', 'disciple-tools-conversations' ),
//                'type'        => 'user_select',
//                'default'     => '',
//                'tile' => 'status',
//                'icon' => get_template_directory_uri() . '/dt-assets/images/assigned-to.svg',
//                'show_in_table' => 16,
//            ];

            $fields['contacts'] = [
                'name' => __( 'Contacts', 'disciple-tools-conversations' ),
                'description' => '',
                'type' => 'connection',
                'post_type' => 'contacts',
                'p2p_direction' => 'to',
                'p2p_key' => $this->post_type.'_to_contacts',
                'tile' => 'status',
                'icon' => get_template_directory_uri() . '/dt-assets/images/group-type.svg',
                'create-icon' => get_template_directory_uri() . '/dt-assets/images/add-contact.svg',
                'show_in_table' => 35
            ];

            //first name
            $fields['first_name'] = [
                'name'        => __( 'First Name', 'disciple-tools-conversations' ),
                'description' => __( 'First Name', 'disciple-tools-conversations' ),
                'type'        => 'text',
                'tile'        => 'details',
                'show_in_table' => 20,
            ];
            //last name
            $fields['last_name'] = [
                'name'        => __( 'Last Name', 'disciple-tools-conversations' ),
                'description' => __( 'Last Name', 'disciple-tools-conversations' ),
                'type'        => 'text',
                'tile'        => 'details',
                'show_in_table' => 25,
            ];
            //sources
            $fields['sources'] = [
                'name'        => __( 'Source', 'disciple-tools-conversations' ),
                'description' => __( 'Source of the conversation', 'disciple-tools-conversations' ),
                'type'        => 'tags',
                'tile'        => 'details',
                'show_in_table' => 30,
            ];
        }

        return $fields;
    }

    public function dt_details_additional_tiles( $tiles, $post_type = '' ){
        return $tiles;
    }
    public function add_comment_section( $sections, $post_type ){
        if ( $post_type === 'conversations' || $post_type === 'contacts' ){
            $sections[] = [
                'key' => 'facebook',
                'label' => __( 'Facebook Conversation', 'disciple-tools-facebook' )
            ];
            $sections[] = [
                'key' => 'email',
                'label' => __( 'Email Conversation', 'disciple-tools-facebook' )
            ];
            $sections[] = [
                'key' => 'whatsapp',
                'label' => __( 'WhatsApp Conversation', 'disciple-tools-facebook' )
            ];
            $sections[] = [
                'key' => 'sms',
                'label' => __( 'SMS Conversation', 'disciple-tools-facebook' )
            ];
        }
        return $sections;
    }

    public function dt_details_additional_section( $section, $post_type ){

        if ( $post_type === $this->post_type && $section === 'other' ) {
            $fields = DT_Posts::get_post_field_settings( $post_type );
            $post = DT_Posts::get_post( $this->post_type, get_the_ID() );
            ?>
            <div class="section-subheader">
                <?php esc_html_e( 'Custom Section Contact', 'disciple-tools-conversations' ) ?>
            </div>
            <div>
                <p>Add information or custom fields here</p>
            </div>

        <?php }
    }


    /**
     * HOOKS
     */

    /**
     * Make sure only one post can be created with the same phone, email, tec
     * @param array $args
     * @param string $post_type
     * @return array
     */
    public function dt_create_post_args( array $args, string $post_type ){
        if ( $post_type === $this->post_type ){
            $args['check_for_duplicates'] = [ 'name', 'title' ];
        }
        return $args;
    }

    /**
     * Make sure conversation post has a type
     * @param boolean $proceed
     * @param array $fields
     * @param string $post_type
     * @return bool|WP_Error
     */
    public function dt_create_post_check_proceed( bool $proceed, array $fields, string $post_type ){
        if ( $post_type === $this->post_type ){
            if ( !isset( $fields['type'] ) ){
                return new WP_Error( 400, 'Handle Type is required', [ 'function' => __METHOD__ ] );
            }
        }
        return $proceed;
    }

    /**
     * Make sure communication handles can not be changed.
     * Instead a new conversation should be created.
     * @param boolean $proceed
     * @param array $fields
     * @param string $post_type
     * @return bool|WP_Error
     */
    public function dt_update_post_check_proceed( bool $proceed, array $fields, string $post_type ){
        if ( $post_type === $this->post_type ){
            $name = $fields['title'] ?? $fields['name'] ?? '';
            if ( !empty( $name ) ){
                return new WP_Error( 400, 'Cannot update communication handles', [ 'function' => __METHOD__ ] );
            }
        }
        return $proceed;
    }

    public function post_connection_added( $post_type, $post_id, $field_key, $value ){
    }

    //action when a post connection is removed during create or update
    public function post_connection_removed( $post_type, $post_id, $field_key, $value ){
//        if ( $post_type === $this->post_type ){
//            // execute your code here, if connection removed
//        }
    }

    //filter at the start of post update
    public function dt_post_update_fields( $fields, $post_type, $post_id ){
//        if ( $post_type === $this->post_type ){
//            // execute your code here
//        }
        return $fields;
    }


    //filter when a comment is created
    public function dt_comment_created( $post_type, $post_id, $comment_id, $type ){
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

    // filter at the start of post creation
    public function dt_post_create_fields( $fields, $post_type ){
        if ( $post_type === $this->post_type ){
            $handle_types = Communication_Handles::get_handles();
            $handle_type = $handle_types[$fields['type']] ?? null;
            $name = $fields['title'] ?? $fields['name'] ?? '';
            if ( $handle_type && isset( $handle_type['convert_to_lowercase'] ) && $handle_type['convert_to_lowercase'] ){
                $fields['name'] = strtolower( $name );
            }
            //remove name whitespace
            $fields['name'] = preg_replace( '/\s+/', '', $fields['name'] );
        }
        return $fields;
    }

    //action when a post has been created
    public function dt_post_created( $post_type, $post_id, $initial_fields ){
        if ( $post_type === $this->post_type ){
            $test  = '';
        }
    }

    // scripts
    public function scripts(){
        if ( is_singular( $this->post_type ) && get_the_ID() && DT_Posts::can_view( $this->post_type, get_the_ID() ) ){
            $test = '';
            // @todo add enqueue scripts
        }
    }

    public function dt_add_section( $post_type, $post ) {
        if ( $post_type === 'conversations' ){
            ?>
            <div class="cell small-12">
                <div class="bordered-box" id="conversations-tile">
                    <h3 class="section-header">
                        Conversations
                    </h3>
                    <div class="section-body">
                        <button class="button">Send Email</button>
                        <button class="button">Send SMS</button>
                        <button class="button">Send WhatsApp</button>
                    </div>

                </div>
            </div>

        <?php }
    }
}


