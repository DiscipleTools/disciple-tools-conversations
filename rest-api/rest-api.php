<?php
if ( !defined( 'ABSPATH' ) ) { exit; } // Exit if accessed directly.

class Disciple_Tools_Conversation_Endpoints
{
    /**
     * @todo Set the permissions your endpoint needs
     * @link https://github.com/DiscipleTools/Documentation/blob/master/theme-core/capabilities.md
     * @var string[]
     */
    public $permissions = [ 'access_contacts', 'dt_all_access_contacts', 'view_project_metrics' ];


    /**
     * @todo define the name of the $namespace
     * @todo define the name of the rest route
     * @todo defne method (CREATABLE, READABLE)
     * @todo apply permission strategy. '__return_true' essentially skips the permission check.
     */
    //See https://github.com/DiscipleTools/disciple-tools-theme/wiki/Site-to-Site-Link for outside of wordpress authentication
    public function add_api_routes() {
        $namespace = '/disciple_tools_conversations/v1';

        register_rest_route(
            $namespace, '/incoming_conversation', [
                'methods'  => 'POST',
                'callback' => [ $this, 'incoming_conversation' ],
                'permission_callback' => function( WP_REST_Request $request ) {
                    return true;
                },
            ]
        );
    }


    public function incoming_conversation( WP_REST_Request $request ) {
        $response = [];
        // Check if the request method is POST
        if ( $request->get_method() === 'POST' ) {
            $params = $request->get_params();
            $params = dt_recursive_sanitize_array( $params );
            $headers = $request->get_headers();

            //TODO: Add Timzeone and Locale to the conversation record and any other data Meta will give us about the user.
            $conversations_record = DT_Conversations_API::create_or_update_conversation_record(
                $params['senderId'],
                [
                    'first_name' => $params['first_name'],
                    'last_name' => $params['last_name'],
                    'sources' => [ 'values' => [ [ 'value' => $params['platform'] ] ] ],
                    'type' => $params['platform'],
                    'profile_pic' => $params['profile_pic'],
                ],
            );
            if ( !is_wp_error( $conversations_record ) ){
                #DT_Posts::add_post_comment( 'conversations', $conversations_record['ID'], $phone_number_location, 'twilio', [], false, true );
                DT_Posts::add_post_comment( 'conversations', $conversations_record['ID'], $params['messageText'], $params['platform'], [
                    'user_id'        => 0,
                    'comment_author' => $params['senderId'],
                    'comment_meta'        => [ 'disciple_tools_conversations_inbound_message' => true ],
                ], false, false );

                $response['success'] = 'Conversation created';
            }
        } else {
            // Handle other request methods if necessary
            $response['error'] = 'Invalid request';
        }

        return $response;
    }

    private static $_instance = null;
    public static function instance() {
        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
        }
        return self::$_instance;
    } // End instance()
    public function __construct() {
        add_action( 'rest_api_init', [ $this, 'add_api_routes' ] );
    }
    public function has_permission(){
        $pass = false;
        foreach ( $this->permissions as $permission ){
            if ( current_user_can( $permission ) ){
                $pass = true;
            }
        }
        return $pass;
    }
}
Disciple_Tools_Conversation_Endpoints::instance();
