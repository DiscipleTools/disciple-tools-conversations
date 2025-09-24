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
        // add_action( 'dt_record_after_details_section', [ $this, 'dt_record_after_details_section' ], 30, 2 );
        add_action( 'dt_record_after_details_section', [ $this, 'dt_record_after_details_section_conversations' ], 30, 2 );

        //include conversation comments in the contact comments
        // add_filter( 'dt_filter_post_comments', [ $this, 'dt_filter_post_comments' ], 10, 3 );

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
                } else if ( $key === 'PageID' ) {
                    $conv_pageid = $com_value['value'];
                } else if ( $key === 'profile_pic' ){
                    $conv_profile_pic = $com_value['value'];
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
                    'type' => $conv_type,
                    'PageID' => $conv_pageid,
                    'profile_pic' => $conv_profile_pic,
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

    public function dt_record_after_details_section( $post_type, $post ) {
        if ( $post_type === 'contacts' ){
            $conversations = DT_Posts::list_posts( 'conversations', [ 'contacts' => [ $post['ID'] ] ] );
            $cats = [
                'email' => [ 'label' => 'Email', 'icon' => 'email.svg' ],
                'phone' => [ 'label' => 'Phone', 'icon' => 'phone.svg' ],
                'facebook' => [ 'label' => 'Facebook', 'icon' => 'facebook.svg' ],
            ];
            ?>
            <style>
                i.dt-font-icon {
                    font-size: 1.1rem;
                    padding: 0;
                }
                .conv-row {
                    display: flex;
                    align-items: center;
                    padding: 0.5rem 0.5rem;
                    border-bottom: 1px solid #e0e0e0;
                    grid-gap: 5px;
                    justify-content: space-between;
                }
                .conv-row:hover {
                    background-color: #d1d0d0;
                }
                .row-end {
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    grid-gap: 5px;
                }
            </style>

            <!-- Original Conversations Tile with Add/Delete functionality -->
            <div class="cell small-12">
                <div class="bordered-box" id="conversations-tile">
                    <div style="display: flex">
                      <h3 class="section-header">
                        Conversations
                      </h3>
                      <ul data-dropdown-menu class="dropdown menu" dropdownmenu-arrow-color="white" style="margin-left: 10px">
                        <li>
                          <a class="button menu-white-dropdown-arrow"
                             style="background-color: #00897B; color: white;">
                            Add Email, Phone etc
                          </a>
                          <ul class="menu is-dropdown-submenu">
                            <li>
                              <a data-open="add-conversation-modal" data-action="email">
                                <img class="dt-icon" src="<?php echo esc_html( get_template_directory_uri() . '/dt-assets/images/email.svg' ) ?>"/>
                                Email
                              </a>
                            </li>
                            <li>
                              <a data-open="add-conversation-modal" data-action="phone">
                                <img class="dt-icon" src="<?php echo esc_html( get_template_directory_uri() . '/dt-assets/images/phone.svg' ) ?>"/>
                                Phone
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>

                    <!-- Add modal -->
                    <div class="reveal" id="add-conversation-modal" data-reveal>
                        <h3>Add an Address or Number</h3>
                        <label>
                            <input type="text" placeholder="handle" id="handle_value"/>
                        </label>
                        <label>
                            <select id="handle_type">
                                <option value="email">Email</option>
                                <option value="phone">Phone</option>
                                <option value="facebook">Facebook</option>
                            </select>
                        </label>
                        <button class="button loader" id="add_handle">Add</button>
                        <button class="close-button" data-close aria-label="Close modal" type="button">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="section-body">
                        <?php foreach ( $cats as $key => $cat ) : ?>
                            <?php foreach ( $conversations['posts'] as $conversation ) :
                                if ( ( $conversation['type']['key'] ?? '' ) === $key ) : ?>
                                    <div class="conv-row">
                                        <div class="row-start">
                                          <img class="dt-icon" src="<?php echo esc_html( get_template_directory_uri() . '/dt-assets/images/' . $cat['icon'] ) ?>"/>
                                          <?php echo esc_html( $conversation['name'] ); ?>
                                          <?php echo esc_html( $conversation['status']['key'] ?? '' ); ?>
                                        </div>
                                        <div class="row-end">
                                          <a href="<?php echo esc_html( $conversation['permalink'] ); ?>"
                                             data-action="view" type="button" class="dt-tooltip dt-action-button small button view">
                                              <span class="tooltiptext"><?php esc_html_e( 'View', 'disciple_tools' ); ?></span>
                                              <i class="dt-font-icon mdi mdi-eye-outline"></i>
                                          </a>
                                          <button data-value="<?php echo esc_html( $conversation['name'] ); ?>"  type="button"
                                                  class="dt-tooltip copy_to_clipboard dt-action-button small button view">
                                              <span class="tooltiptext"><?php esc_html_e( 'Copy', 'disciple_tools' ); ?></span>
                                              <i class="dt-font-icon mdi mdi-content-copy"></i>
                                          </button>
                                          <button data-action="delete"
                                                  type="button"
                                                  class="dt-tooltip dt-action-button small button view">
                                              <span class="tooltiptext"><?php esc_html_e( 'Delete', 'disciple_tools' ); ?></span>
                                              <i class="dt-font-icon mdi mdi-delete-outline"></i>
                                          </button>
                                        </div>
                                    </div>
                                <?php endif;
                            endforeach; ?>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
            <script>
              jQuery(document).ready(function($) {
                jQuery('#add_handle').click(function() {
                  const button = this;
                  $(button).addClass('loading');
                  const value = $('#handle_value').val();
                  if ( value === '' ){
                    return;
                  }
                  const type = $('#handle_type').val();
                  const data = {
                    name: value,
                    type: type,
                    contacts: { 'values': [{ 'value': window.detailsSettings.post_id }] }
                  };
                  window.API.create_post('conversations', data).then(function(response) {
                    $(button).removeClass('loading');
                    //@todo rebuild
                    window.location.reload();
                  });
                });
              });
            </script>
        <?php }
    }

    public function dt_record_after_details_section_conversations( $post_type, $post ) {
        if ( $post_type === 'contacts' ){
            $conversations = DT_Posts::list_posts( 'conversations', [ 'contacts' => [ $post['ID'] ] ] );
            $field_settings = DT_Posts::get_post_field_settings( 'conversations' );
            ?>
            <style>
                .conversation-row {
                    display: flex;
                    align-items: flex-start;
                    padding: 12px;
                    border-bottom: 1px solid #e6e6e6;
                    transition: background-color 0.2s;
                }
                .conversation-row:hover {
                    background-color: #f8f9fa;
                }
                .conversation-content {
                    flex: 1;
                    min-width: 0;
                }
                .conversation-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 4px;
                    gap: 12px;
                }
                .conversation-title {
                    font-weight: 600;
                    color: #333;
                    margin: 0;
                    word-break: break-all;
                    flex: 1;
                }
                .conversation-ai-summary {
                    color: #444;
                    font-size: 0.9rem;
                    margin: 4px 0;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                .conversation-ai-summary .mdi {
                    color: #7c4dff;
                    font-size: 1rem;
                    flex-shrink: 0;
                }
                .conversation-last-comment {
                    color: #666;
                    font-size: 0.9rem;
                    margin: 4px 0;
                    display: flex;
                    align-items: flex-start;
                    gap: 6px;
                }
                .conversation-last-comment .mdi {
                    color: #607d8b;
                    flex-shrink: 0;
                }
                .conversation-line-text {
                    flex: 1;
                    min-width: 0;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                .conversation-meta {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    flex-shrink: 0;
                }
                .conversation-date {
                    color: #888;
                    font-size: 0.8rem;
                }
                .conversation-count {
                    color: #666;
                    font-size: 0.8rem;
                    font-weight: 500;
                }
                .conversation-type {
                    background: #e3f2fd;
                    color: #1976d2;
                    padding: 2px 6px;
                    border-radius: 12px;
                    font-size: 0.75rem;
                    font-weight: 500;
                }
                .conversation-actions {
                    display: flex;
                    gap: 4px;
                    margin-left: 12px;
                }
                .no-conversations {
                    text-align: center;
                    color: #888;
                    padding: 24px;
                    font-style: italic;
                }
            </style>

            <div class="cell small-12">
                <div class="bordered-box" id="recent-conversations-tile">
                    <h3 class="section-header">
                        Conversations
                    </h3>
                    <div class="section-body">
                        <?php if ( empty( $conversations['posts'] ) ): ?>
                            <div class="no-conversations">
                                No conversations found for this contact.
                            </div>
                        <?php else : ?>
                            <?php foreach ( $conversations['posts'] as $conversation ):
                                $conversation_type = $conversation['type']['key'] ?? 'chatwoot';
                                $type_label = $field_settings['type']['default'][$conversation_type]['label'] ?? ucfirst( $conversation_type );
                                $ai_summary = '';
                                if ( !empty( $conversation['ai_summary_array'] ) ) {
                                    $summaries = $conversation['ai_summary_array'];
                                    $user_locale = get_user_locale() ?? 'en_US';
                                    $user_locale_normalized = explode( '_', $user_locale )[0] ?? 'en';

                                    foreach ( $summaries as $locale_key => $summary_text ) {
                                        $normalized_key = explode( '_', $locale_key )[0] ?? 'en';
                                        if ( $user_locale_normalized === $normalized_key ) {
                                            $ai_summary = $summary_text;
                                            break;
                                        }
                                    }

                                    if ( '' === $ai_summary ) {
                                        $first_key = array_key_first( $summaries );
                                        $ai_summary = (string) $summaries[ $first_key ];
                                    }

                                    $ai_summary = trim( wp_strip_all_tags( $ai_summary ) );
                                }

                                // Get comments for this conversation
                                $all_comments = DT_Posts::get_post_comments( 'conversations', $conversation['ID'], false, 'all' );
                                $message_count = !empty( $all_comments['comments'] ) ? count( $all_comments['comments'] ) : 0;
                                $last_comment = null;
                                $last_comment_date = null;

                                if ( !empty( $all_comments['comments'] ) ) {
                                    $last_comment = $all_comments['comments'][0];
                                    $last_comment_date = $last_comment['comment_date'];
                                }
                                ?>
                                <div class="conversation-row">
                                    <div class="conversation-content">
                                        <div class="conversation-header">
                                            <div class="conversation-meta">
                                                <span class="conversation-type">
                                                    <?php echo esc_html( $type_label ); ?>
                                                </span>
                                                <span class="conversation-count">
                                                    <?php echo esc_html( $message_count . ' ' . _n( 'message', 'messages', $message_count, 'disciple_tools' ) ); ?>
                                                </span>
                                                <?php if ( $last_comment_date ): ?>
                                                    <span class="conversation-date">
                                                        <?php
                                                        echo esc_html( dt_format_date( $last_comment_date, 'long' ) );
                                                        ?>
                                                    </span>
                                                <?php else : ?>
                                                    <span class="conversation-date">No messages</span>
                                                <?php endif; ?>
                                            </div>
                                        </div>

                                        <?php if ( ! empty( $ai_summary ) ): ?>
                                            <div class="conversation-ai-summary">
                                                <i class="mdi mdi-auto-fix"></i>
                                                <span class="conversation-line-text" title="<?php echo esc_attr( $ai_summary ); ?>"><?php echo esc_html( $ai_summary ); ?></span>
                                            </div>
                                        <?php endif; ?>

                                        <?php if ( $last_comment ): ?>
                                            <div class="conversation-last-comment">
                                                <i class="mdi mdi-message-text-outline"></i>
                                                <span class="conversation-line-text"><?php echo esc_html( wp_trim_words( strip_tags( $last_comment['comment_content'] ), 15 ) ); ?></span>
                                            </div>
                                        <?php endif; ?>
                                    </div>

                                    <div class="conversation-actions">
                                        <button class="button small view view-conversation-btn"
                                                data-conversation-id="<?php echo esc_attr( $conversation['ID'] ); ?>"
                                                data-conversation-name="<?php echo esc_attr( $conversation['name'] ); ?>"
                                                data-conversation-summary="<?php echo esc_attr( $ai_summary ); ?>"
                                                title="View conversation history">
                                            <i class="mdi mdi-eye-outline"></i>
                                        </button>
                                    </div>
                                </div>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </div>
                </div>
            </div>

            <!-- Conversation History Modal -->
            <div class="reveal" id="conversation-history-modal" data-reveal data-reset-on-close>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; margin-right: 40px;">
                    <h3 id="conversation-modal-title" style="margin: 0;">Conversation History</h3>
                    <a id="open-conversation-record-btn" href="#" class="button small" target="_blank" style="margin: 0;">
                        <i class="mdi mdi-open-in-new"></i> Open Record
                    </a>
                </div>
                <div id="conversation-modal-summary" class="conversation-modal-summary" style="display: none;">
                    <i class="mdi mdi-auto-fix"></i>
                    <span id="conversation-modal-summary-text"></span>
                </div>
                <div id="conversation-modal-content" style="max-height: 500px; overflow-y: auto;">
                    <div class="loading-spinner" style="text-align: center; padding: 40px;">
                        <div style="border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 40px; height: 40px; animation: spin 2s linear infinite; margin: 0 auto;"></div>
                        <p style="margin-top: 10px;">Loading conversation history...</p>
                    </div>
                </div>
                <button class="close-button" data-close aria-label="Close modal" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .conversation-comment {
                    padding: 12px;
                    margin-bottom: 8px;
                    border-radius: 12px;
                    max-width: 80%;
                    position: relative;
                }
                .conversation-comment.user-message {
                    background-color: #e3f2fd;
                    border: 1px solid #1976d2;
                    margin-left: auto;
                    margin-right: 0;
                }
                .conversation-comment.system-message {
                    background-color: #f5f5f5;
                    border: 1px solid #9e9e9e;
                    margin-left: 0;
                    margin-right: auto;
                }
                .conversation-comment.other-message {
                    background-color: #e8f5e8;
                    border: 1px solid #4caf50;
                    margin-left: 0;
                    margin-right: auto;
                }
                .conversation-comment-meta {
                    font-size: 0.8rem;
                    color: #666;
                    margin-bottom: 6px;
                    font-weight: 500;
                }
                .conversation-comment-content {
                    line-height: 1.5;
                    word-wrap: break-word;
                }
                .no-comments {
                    text-align: center;
                    color: #888;
                    padding: 40px;
                    font-style: italic;
                }
                .conversation-modal-summary {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: #f8fafc;
                    border: 1px solid #d0e2f2;
                    border-radius: 8px;
                    padding: 10px 12px;
                    margin-bottom: 16px;
                    color: #1e3a8a;
                }
                .conversation-modal-summary .mdi {
                    font-size: 18px;
                    color: #2563eb;
                }
                #conversation-modal-summary-text {
                    line-height: 1.4;
                }
            </style>

            <script>
                jQuery(document).ready(function($) {
                    $('.view-conversation-btn').on('click', function() {
                        const conversationId = $(this).data('conversation-id');
                        const conversationName = $(this).data('conversation-name');
                        const conversationSummary = $(this).data('conversation-summary');

                        $('#conversation-modal-title').text('Conversation History: ' + conversationName);

                        // Set the URL for the "Open Record" button
                        const conversationUrl = window.wpApiShare.site_url + '/conversations/' + conversationId;
                        $('#open-conversation-record-btn').attr('href', conversationUrl);

                        const summaryContainer = $('#conversation-modal-summary');
                        const summaryTextEl = $('#conversation-modal-summary-text');
                        if (conversationSummary) {
                            summaryTextEl.text(conversationSummary);
                            summaryTextEl.attr('title', conversationSummary);
                            summaryContainer.show();
                        } else {
                            summaryTextEl.text('');
                            summaryTextEl.removeAttr('title');
                            summaryContainer.hide();
                        }
                        $('#conversation-modal-content').html(`
                            <div class="loading-spinner" style="text-align: center; padding: 40px;">
                                <div style="border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 40px; height: 40px; animation: spin 2s linear infinite; margin: 0 auto;"></div>
                                <p style="margin-top: 10px;">Loading conversation history...</p>
                            </div>
                        `);

                        $('#conversation-history-modal').foundation('open');

                        // Load conversation comments via AJAX
                        window.API.get_comments('conversations', conversationId).then(function(response) {
                            if (response.comments && response.comments.length > 0) {
                                let commentsHtml = '';
                                response.comments.reverse(); // Show oldest first

                                // Get the first message author to represent the "other user"
                                const firstMessageAuthor = response.comments.find(comment =>
                                    comment.comment_author &&
                                    comment.comment_author !== 'System' &&
                                    comment.comment_author !== ''
                                )?.comment_author;

                                response.comments.forEach(function(comment) {
                                    const date = new Date(comment.comment_date).toLocaleString();
                                    const author = comment.comment_author || 'System';

                                    // Determine message type based on author
                                    let messageClass = 'system-message';
                                    if (author === 'System' || author === '' || !author) {
                                        messageClass = 'system-message';
                                    } else if (author === firstMessageAuthor) {
                                        messageClass = 'other-message'; // First author = other user (green, left)
                                    } else {
                                        messageClass = 'user-message'; // Any other author = us (blue, right)
                                    }

                                    const commentContent = comment.comment_content
                                        ? window.SHAREDFUNCTIONS.escapeHTML(comment.comment_content).replace(/(?:\r\n|\r|\n)/g, '<br>')
                                        : '';

                                    commentsHtml += `
                                        <div class="conversation-comment ${messageClass}">
                                            <div class="conversation-comment-meta">
                                                <strong>${author}</strong> - ${date}
                                            </div>
                                            <div class="conversation-comment-content" dir="auto">
                                                ${commentContent}
                                            </div>
                                        </div>
                                    `;
                                });

                                $('#conversation-modal-content').html(commentsHtml);
                            } else {
                                $('#conversation-modal-content').html(
                                    '<div class="no-comments">No messages found in this conversation.</div>'
                                );
                            }
                        }).catch(function(error) {
                            console.error('Error loading conversation comments:', error);
                            $('#conversation-modal-content').html(
                                '<div class="no-comments">Failed to load conversation history. Please try again.</div>'
                            );
                        });
                    });
                });
            </script>
        <?php }
    }

}
