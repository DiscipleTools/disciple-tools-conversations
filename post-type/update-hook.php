<?php

add_action( 'dt_comment_created', function ( $post_type, $post_id, $comment_id, $type ){
    if ( $post_type !== 'conversations' ) {
        return;
    }
    $comment = get_comment( $comment_id );
    $message = $comment->comment_content;

    $pieces = explode( ',', $message );
    $group_id = (int) $pieces[0];
    $member_count = $pieces[1];
    $comment = $pieces[2];

    $group = DT_Posts::get_post( 'groups', $group_id, true, false );

    if ( is_wp_error( $group ) ) {
        return;
    }

    $tets = DT_Posts::update_post( 'groups', $group_id, [
        'member_count' => $member_count,
        'notes' => [ $comment ],
    ], false, false );

}, 10, 4 );
