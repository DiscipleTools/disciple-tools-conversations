<?php
if ( !defined( 'ABSPATH' ) ) { exit; } // Exit if accessed directly.

/**
 * Test that DT_Module_Base has loaded
 */
if ( ! class_exists( 'DT_Module_Base' ) ) {
    dt_write_log( 'Disciple.Tools System not loaded. Cannot load custom post type.' );
    return;
}

/**
 * Add any modules required or added for the post type
 */
add_filter( 'dt_post_type_modules', function( $modules ){


    $modules['conversations_base'] = [
        'name' => __( 'Conversations', 'disciple-tools-conversations' ),
        'enabled' => true,
        'locked' => false,
        'prerequisites' => [ 'contacts_base' ],
        'post_type' => 'conversations',
        'description' => __( 'Upgrade Contact Info to track conversations', 'disciple-tools-conversations' )
    ];

    return $modules;
}, 20, 1 );

require_once 'conversations.php';
Disciple_Tools_Conversations_Base::instance();

require_once 'conversations-list-filters.php';
Disciple_Tools_Conversations_List::instance();

require_once 'handles.php';

require_once 'contacts-conversations.php';
Disciple_Tools_Contacts_Conversations::instance();