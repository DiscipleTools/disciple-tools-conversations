<?php
if ( !defined( 'ABSPATH' ) ) { exit; } // Exit if accessed directly.

/**
 * Class Disciple_Tools_Conversations_Base
 * Load the core post type hooks into the Disciple.Tools system
 */
class Disciple_Tools_Conversations_List extends DT_Module_Base {

    public $post_type = 'conversations';
    public $module = 'conversations_base';
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

        //list
        add_filter( 'dt_user_list_filters', [ $this, 'dt_user_list_filters' ], 10, 2 );
        add_filter( 'dt_filter_access_permissions', [ $this, 'dt_filter_access_permissions' ], 20, 2 );
    }

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


}


