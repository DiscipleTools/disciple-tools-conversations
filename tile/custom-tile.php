<?php
if ( !defined( 'ABSPATH' ) ) { exit; } // Exit if accessed directly.

class Disciple_Tools_Conversations_Tile
{
    private static $_instance = null;
    public static function instance(){
        if ( is_null( self::$_instance ) ) {
            self::$_instance = new self();
        }
        return self::$_instance;
    } // End instance()

    public function __construct(){
        add_filter( 'dt_details_additional_tiles', [ $this, 'dt_details_additional_tiles' ], 10, 2 );
        add_filter( 'dt_custom_fields_settings', [ $this, 'dt_custom_fields' ], 1, 2 );
        add_action( 'dt_record_after_details_section', [ $this, 'dt_add_section' ], 30, 2 );
    }

    /**
     * This function registers a new tile to a specific post type
     *
     * @todo Set the post-type to the target post-type (i.e. contacts, groups, trainings, etc.)
     * @todo Change the tile key and tile label
     *
     * @param $tiles
     * @param string $post_type
     * @return mixed
     */
    public function dt_details_additional_tiles( $tiles, $post_type = '' ) {
        if ( $post_type === 'contacts' || $post_type === 'conversations' ){

        }
        return $tiles;
    }

    /**
     * @param array $fields
     * @param string $post_type
     * @return array
     */
    public function dt_custom_fields( array $fields, string $post_type = '' ) {
        /**
         * @todo set the post type
         */
        if ( $post_type === 'contacts' || $post_type === 'conversations' ){

        }
        return $fields;
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
                                if ( $conversation['type']['key'] === $key ) :
                                    ?>
                                    <style>
                                        i.dt-font-icon {
                                            font-size: 1.1rem;
                                            padding: 0;
                                        }
                                    </style>
                                    <div>
                                        <img class="dt-icon" src="<?php echo esc_html( get_template_directory_uri() . '/dt-assets/images/' . $cat['icon'] ) ?>"/>
                                        <?php echo esc_html( $conversation['name'] ); ?>
                                        <?php echo esc_html( $conversation['status']['key'] ); ?>
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
                                    <?php
                                endif;
                            endforeach; ?>
                        <?php endforeach; ?>
                    </div>

                </div>
            </div>

        <?php }
    }
}
Disciple_Tools_Conversations_Tile::instance();
