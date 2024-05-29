<?php
if ( !defined( 'ABSPATH' ) ) { exit; } // Exit if accessed directly.


/**
 * Class Disciple_Tools_Conversations_Magic_User_App
 */
class Disciple_Tools_Conversations_Magic_Login_User_App extends DT_Magic_Url_Base {

    public $page_title = 'Conversation App';
    public $page_description = 'Lets users respond to conversations and comments from various sources.';
    public $root = 'conversations_app'; // @todo define the root of the url {yoursite}/root/type/key/action
    public $type = 'conversations'; // @todo define the type
    public $post_type = 'conversations';
    private $meta_key = '';
    public $show_bulk_send = false;
    public $show_app_tile = false;

    private static $_instance = null;
    public $meta = []; // Allows for instance specific data.

    public static function instance() {
        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
        }
        return self::$_instance;
    } // End instance()

    public function __construct() {

        /**
         * Specify metadata structure, specific to the processing of current
         * magic link type.
         *
         * - meta:              Magic link plugin related data.
         *      - app_type:     Flag indicating type to be processed by magic link plugin.
         *      - post_type     Magic link type post type.
         *      - contacts_only:    Boolean flag indicating how magic link type user assignments are to be handled within magic link plugin.
         *                          If True, lookup field to be provided within plugin for contacts only searching.
         *                          If false, Dropdown option to be provided for user, team or group selection.
         *      - fields:       List of fields to be displayed within magic link frontend form.
         */
        $this->meta = [
            'app_type'      => 'magic_link',
            'post_type'     => $this->post_type,
            'contacts_only' => false,
            'fields'        => [
                [
                    'id'    => 'name',
                    'label' => 'Name'
                ]
            ]
        ];

        $this->meta_key = $this->root . '_' . $this->type . '_magic_key';
        parent::__construct();

        /**
         * user_app and module section
         */
        add_filter( 'dt_settings_apps_list', [ $this, 'dt_settings_apps_list' ], 10, 1 );
        add_action( 'rest_api_init', [ $this, 'add_endpoints' ] );

        /**
         * tests if other URL
         */
        $url = dt_get_url_path();
        if ( strpos( $url, $this->root . '/' . $this->type ) === false ) {
            return;
        }
        /**
         * tests magic link parts are registered and have valid elements
         */
        if ( !$this->check_parts_match() ){
            return;
        }

        if ( !is_user_logged_in() ) {
            /* redirect user to login page with a redirect_to back to here */
            wp_redirect( dt_login_url( 'login', '?redirect_to=' . rawurlencode( site_url( dt_get_url_path() ) ) . '&hide-nav' ) );
            exit;
        }

        // load if valid url
        add_action( 'dt_blank_body', [ $this, 'body' ] );
        add_filter( 'dt_magic_url_base_allowed_css', [ $this, 'dt_magic_url_base_allowed_css' ], 10, 1 );
        add_filter( 'dt_magic_url_base_allowed_js', [ $this, 'dt_magic_url_base_allowed_js' ], 10, 1 );
        add_action( 'wp_enqueue_scripts', [ $this, 'wp_enqueue_scripts' ], 100 );

    }

    public function wp_enqueue_scripts(){
        wp_enqueue_script( 'web-components-services', trailingslashit( plugin_dir_url( __DIR__ ) ) . 'dist/web-components/dist/services.min.js', [], filemtime( plugin_dir_path( __DIR__ ) . 'dist/web-components/dist/services.min.js' ), false );

        wp_enqueue_script( 'conversation_scripts', trailingslashit( plugin_dir_url( __DIR__ ) ) . 'dist/conversation_scripts.js', [ 'web-components-services' ], filemtime( plugin_dir_path( __DIR__ ) . 'dist/conversation_scripts.js' ), false );

        wp_register_style( 'conversation_css', trailingslashit( plugin_dir_url( __DIR__ ) ) . 'assets/dist/styles.css', [], filemtime( trailingslashit( plugin_dir_path( __DIR__ ) ) . 'dist/styles.css' ) );

        wp_enqueue_style( 'conversation_css' );
    }

    public function dt_magic_url_base_allowed_js( $allowed_js ) {
        $allowed_js[] = 'web-components-services';
        $allowed_js[] = 'web-components';
        $allowed_js[] = 'conversation_scripts';
        return $allowed_js;
    }

    public function dt_magic_url_base_allowed_css( $allowed_css ) {
        $allowed_css[] = 'web-components-css';
        return $allowed_css;
    }

    /**
     * Builds magic link type settings payload:
     * - key:               Unique magic link type key; which is usually composed of root, type and _magic_key suffix.
     * - url_base:          URL path information to map with parent magic link type.
     * - label:             Magic link type name.
     * - description:       Magic link type description.
     * - settings_display:  Boolean flag which determines if magic link type is to be listed within frontend user profile settings.
     *
     * @param $apps_list
     *
     * @return mixed
     */
    public function dt_settings_apps_list( $apps_list ) {
        $apps_list[ $this->meta_key ] = [
            'key'              => $this->meta_key,
            'url_base'         => $this->root . '/' . $this->type,
            'label'            => $this->page_title,
            'description'      => $this->page_description,
            'settings_display' => true
        ];

        return $apps_list;
    }

    /**
     * Writes custom styles to header
     *
     * @see DT_Magic_Url_Base()->header_style() for default state
     * @todo remove if not needed
     */
    public function header_style(){
        ?>
        <style>
            body {
                background-color: white;
                padding: 1em;
            }
        </style>
        <?php
    }

    /**
     * Writes javascript to the header
     *
     * @see DT_Magic_Url_Base()->header_javascript() for default state
     * @todo remove if not needed
     */
    public function header_javascript(){ ?>
        <script>
            window.wpApiShare.apiService = new window.WebComponentServices.ApiService(window.wpApiShare.nonce, window.wpApiShare.root);
            console.log('apiService', window.wpApiShare.apiService);
        </script>
        <?php
    }

    /**
     * Writes javascript to the footer
     *
     * @see DT_Magic_Url_Base()->footer_javascript() for default state
     * @todo remove if not needed
     */
    public function footer_javascript(){

    }

    public function body(){

        // As we required the user to login before they could access this app,
        // we now have access to the logged in user record

        $user_id = get_current_user_id();
        $display_name = dt_get_user_display_name( $user_id );
        $user_contact = Disciple_Tools_Users::get_contact_for_user( $user_id );

        // We also know who owns this user app
        $app_owner_id = $this->parts['post_id'];
        $app_owner = get_user_by( 'ID', $app_owner_id );
        $app_owner_display_name = dt_get_user_display_name( $app_owner_id );

        $conversations = DT_Posts::list_posts('conversations', [
            'sort' => '-last_modified',
        ]);
        if ( is_wp_error( $conversations ) ) {
            $conversations = [];
        }
        // @todo Create an app here that interacts with both the logged in user and the user who owns the app

        ?>
        <div id="wrapper">
            <div class="grid-x">
                <div class="cell center">
                    <h2 id="title">Hello there <?php echo esc_html( $display_name ) ?></h2>
                </div>
            </div>
            <smm-conversation-list conversations="<?php echo esc_attr( wp_json_encode( $conversations ) ) ?>" userid=<?php echo esc_attr( get_current_user_id() ) ?> showOnlyMyConversations></smm-conversation-list>
            </div>
        </div>
        <?php
    }

    /**
     * Register REST Endpoints
     * @link https://github.com/DiscipleTools/disciple-tools-theme/wiki/Site-to-Site-Link for outside of wordpress authentication
     */
    public function add_endpoints() {
        $namespace = $this->root . '/v1';
        register_rest_route(
            $namespace, '/'.$this->type, [
                [
                    'methods'  => 'GET',
                    'callback' => [ $this, 'endpoint_get' ],
                    'permission_callback' => function( WP_REST_Request $request ){
                        $magic = new DT_Magic_URL( $this->root );

                        return $magic->verify_rest_endpoint_permissions_on_post( $request );
                    },
                ],
            ]
        );
        register_rest_route(
            $namespace, '/'.$this->type, [
                [
                    'methods'  => 'POST',
                    'callback' => [ $this, 'update_record' ],
                    'permission_callback' => function( WP_REST_Request $request ){
                        $magic = new DT_Magic_URL( $this->root );

                        return $magic->verify_rest_endpoint_permissions_on_post( $request );
                    },
                ],
            ]
        );
    }

    public function update_record( WP_REST_Request $request ) {
        $params = $request->get_params();
        $params = dt_recursive_sanitize_array( $params );

        $post_id = $params['parts']['post_id']; //has been verified in verify_rest_endpoint_permissions_on_post()

        $args = [];
        if ( !is_user_logged_in() ){
            $global_name = apply_filters( 'dt_magic_link_global_name', __( 'Magic Link', 'disciple_tools' ) );
            $args['comment_author'] = sprintf( __( '%s Submission', 'disciple_tools' ), $global_name );
            wp_set_current_user( 0 );
            $current_user = wp_get_current_user();
            $current_user->add_cap( 'magic_link' );
            $current_user->display_name = sprintf( __( '%s Submission', 'disciple_tools' ), $global_name );
        }

        if ( isset( $params['update']['comment'] ) && !empty( $params['update']['comment'] ) ){
            $update = DT_Posts::add_post_comment( $this->post_type, $post_id, $params['update']['comment'], 'comment', $args, false );
            if ( is_wp_error( $update ) ){
                return $update;
            }
        }

        if ( isset( $params['update']['start_date'] ) && !empty( $params['update']['start_date'] ) ){
            $update = DT_Posts::update_post( $this->post_type, $post_id, [ 'start_date' => $params['update']['start_date'] ], false, false );
            if ( is_wp_error( $update ) ){
                return $update;
            }
        }

        return true;
    }

    public function endpoint_get( WP_REST_Request $request ) {
        $params = $request->get_params();
        if ( ! isset( $params['parts'], $params['action'] ) ) {
            return new WP_Error( __METHOD__, 'Missing parameters', [ 'status' => 400 ] );
        }

        $data = [];

        $data[] = [ 'name' => 'List item' ]; // @todo remove example
        $data[] = [ 'name' => 'List item' ]; // @todo remove example

        return $data;
    }
}
Disciple_Tools_Conversations_Magic_Login_User_App::instance();
