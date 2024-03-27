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
        add_filter( 'dt_post_update_fields', [ $this, 'dt_post_update_fields' ], 10, 3 );
        add_filter( 'dt_post_create_fields', [ $this, 'dt_post_create_fields' ], 10, 2 );
        add_action( 'dt_post_created', [ $this, 'dt_post_created' ], 10, 3 );
        add_action( 'dt_comment_created', [ $this, 'dt_comment_created' ], 10, 4 );

        //list
        add_filter( 'dt_user_list_filters', [ $this, 'dt_user_list_filters' ], 10, 2 );
        add_filter( 'dt_filter_access_permissions', [ $this, 'dt_filter_access_permissions' ], 20, 2 );

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

    public function dt_set_roles_and_permissions( $expected_roles ){

        if ( !isset( $expected_roles['my_starter_role'] ) ){
            $expected_roles['my_starter_role'] = [

                'label' => __( 'My Conversation Role', 'disciple-tools-conversations' ),
                'description' => 'Does something Cool',
                'permissions' => [
                    'access_contacts' => true,
                    // @todo more capabilities
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
                'icon' => get_template_directory_uri() . '/dt-assets/images/type.svg',
                'show_in_table' => 5,
                'select_cannot_be_empty' => true,
            ];


            $fields['status'] = [
                'name'        => __( 'Status', 'disciple-tools-conversations' ),
                'description' => __( 'Set the current status.', 'disciple-tools-conversations' ),
                'type'        => 'key_select',
                'default'     => [
                    'inactive' => [
                        'label' => __( 'Inactive', 'disciple-tools-conversations' ),
                        'description' => __( 'No longer active.', 'disciple-tools-conversations' ),
                        'color' => '#F43636'
                    ],
                    'active'   => [
                        'label' => __( 'Active', 'disciple-tools-conversations' ),
                        'description' => __( 'Is active.', 'disciple-tools-conversations' ),
                        'color' => '#4CAF50'
                    ],
                ],
                'tile'     => 'status',
                'icon' => get_template_directory_uri() . '/dt-assets/images/status.svg',
                'default_color' => '#366184',
                'show_in_table' => 10,
            ];
            $fields['assigned_to'] = [
                'name'        => __( 'Assigned To', 'disciple-tools-conversations' ),
                'description' => __( 'Select the main person who is responsible for reporting on this record.', 'disciple-tools-conversations' ),
                'type'        => 'user_select',
                'default'     => '',
                'tile' => 'status',
                'icon' => get_template_directory_uri() . '/dt-assets/images/assigned-to.svg',
                'show_in_table' => 16,
            ];

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
        }

        if ( $post_type === 'contacts' ){
            $fields[$this->post_type] = [
                'name' => $this->plural_name,
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

    public function dt_details_additional_tiles( $tiles, $post_type = '' ){
        if ( $post_type === $this->post_type ){
//            $tiles['connections'] = [ 'label' => __( 'Connections', 'disciple-tools-conversations' ) ];
//            $tiles['other'] = [ 'label' => __( 'Other', 'disciple-tools-conversations' ) ];
            $tiles['details']['hidden'] = true;
        }
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

    public function post_connection_added( $post_type, $post_id, $field_key, $value ){
//        if ( $post_type === $this->post_type ){
//            if ( $field_key === "members" ){
//                // @todo change 'members'
//                // execute your code here, if field key match
//            }
//            if ( $field_key === "coaches" ){
//                // @todo change 'coaches'
//                // execute your code here, if field key match
//            }
//        }
//        if ( $post_type === "contacts" && $field_key === $this->post_type ){
//            // execute your code here, if a change is made in contacts and a field key is matched
//        }
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
            $post_fields = DT_Posts::get_post_field_settings( $post_type );
            if ( isset( $post_fields['status'] ) && !isset( $fields['status'] ) ){
                $fields['status'] = 'active';
            }
        }
        return $fields;
    }

    //action when a post has been created
    public function dt_post_created( $post_type, $post_id, $initial_fields ){
    }

    //list page filters function

    private static function count_records_assigned_to_me_by_status(){
        global $wpdb;
        $post_type = self::post_type();
        $current_user = get_current_user_id();

        $results = $wpdb->get_results( $wpdb->prepare( "
            SELECT status.meta_value as status, count(pm.post_id) as count
            FROM $wpdb->postmeta pm
            INNER JOIN $wpdb->posts a ON( a.ID = pm.post_id AND a.post_type = %s and a.post_status = 'publish' )
            INNER JOIN $wpdb->postmeta status ON ( status.post_id = pm.post_id AND status.meta_key = 'status' )
            WHERE pm.meta_key = 'assigned_to'
            AND pm.meta_value = CONCAT( 'user-', %s )
            GROUP BY status.meta_value
        ", $post_type, $current_user ), ARRAY_A);

        return $results;
    }

    //list page filters function
    private static function count_records_by_status(){
        global $wpdb;
        $results = $wpdb->get_results($wpdb->prepare( "
            SELECT status.meta_value as status, count(status.post_id) as count
            FROM $wpdb->postmeta status
            INNER JOIN $wpdb->posts a ON( a.ID = status.post_id AND a.post_type = %s and a.post_status = 'publish' )
            WHERE status.meta_key = 'status'
            GROUP BY status.meta_value
        ", self::post_type() ), ARRAY_A );

        return $results;
    }

    //build list page filters
    public static function dt_user_list_filters( $filters, $post_type ){
        /**
         * @todo process and build filter lists
         */
        if ( $post_type === self::post_type() ){
            $records_assigned_to_me_by_status_counts = self::count_records_assigned_to_me_by_status();
            $fields = DT_Posts::get_post_field_settings( $post_type );
            /**
             * Setup my filters
             */
            $active_counts = [];
            $status_counts = [];
            $total_my = 0;
            foreach ( $records_assigned_to_me_by_status_counts as $count ){
                $total_my += $count['count'];
                dt_increment( $status_counts[$count['status']], $count['count'] );
            }

            // add assigned to me tab
            $filters['tabs'][] = [
                'key' => 'assigned_to_me',
                'label' => __( 'Assigned to me', 'disciple-tools-conversations' ),
                'count' => $total_my,
                'order' => 20
            ];
            // add assigned to me filters
            $filters['filters'][] = [
                'ID' => 'my_all',
                'tab' => 'assigned_to_me',
                'name' => __( 'All', 'disciple-tools-conversations' ),
                'query' => [
                    'assigned_to' => [ 'me' ],
                    'sort' => 'status'
                ],
                'count' => $total_my,
            ];
            //add a filter for each status
            foreach ( $fields['status']['default'] as $status_key => $status_value ) {
                if ( isset( $status_counts[$status_key] ) ){
                    $filters['filters'][] = [
                        'ID' => 'my_' . $status_key,
                        'tab' => 'assigned_to_me',
                        'name' => $status_value['label'],
                        'query' => [
                            'assigned_to' => [ 'me' ],
                            'status' => [ $status_key ],
                            'sort' => '-post_date'
                        ],
                        'count' => $status_counts[$status_key]
                    ];
                }
            }

            if ( DT_Posts::can_view_all( self::post_type() ) ){
                $records_by_status_counts = self::count_records_by_status();
                $status_counts = [];
                $total_all = 0;
                foreach ( $records_by_status_counts as $count ){
                    $total_all += $count['count'];
                    dt_increment( $status_counts[$count['status']], $count['count'] );
                }

                // add by Status Tab
                $filters['tabs'][] = [
                    'key' => 'by_status',
                    'label' => __( 'All By Status', 'disciple-tools-conversations' ),
                    'count' => $total_all,
                    'order' => 30
                ];
                // add assigned to me filters
                $filters['filters'][] = [
                    'ID' => 'all_status',
                    'tab' => 'by_status',
                    'name' => __( 'All', 'disciple-tools-conversations' ),
                    'query' => [
                        'sort' => '-post_date'
                    ],
                    'count' => $total_all
                ];

                foreach ( $fields['status']['default'] as $status_key => $status_value ) {
                    if ( isset( $status_counts[$status_key] ) ){
                        $filters['filters'][] = [
                            'ID' => 'all_' . $status_key,
                            'tab' => 'by_status',
                            'name' => $status_value['label'],
                            'query' => [
                                'status' => [ $status_key ],
                                'sort' => '-post_date'
                            ],
                            'count' => $status_counts[$status_key]
                        ];
                    }
                }
            }
        }
        return $filters;
    }

    // access permission
    public static function dt_filter_access_permissions( $permissions, $post_type ){
        if ( $post_type === self::post_type() ){
            if ( DT_Posts::can_view_all( $post_type ) ){
                $permissions = [];
            }
        }
        return $permissions;
    }

    // scripts
    public function scripts(){
        if ( is_singular( $this->post_type ) && get_the_ID() && DT_Posts::can_view( $this->post_type, get_the_ID() ) ){
            $test = '';
            // @todo add enqueue scripts
        }
    }
}


