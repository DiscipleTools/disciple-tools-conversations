<?php
if ( !defined( 'ABSPATH' ) ) { exit; } // Exit if accessed directly.


class DT_Conversations_API {
    public static function get_handles(){
        $handles = [
            'email' => [
                'label' => 'Email',
                'convert_to_lowercase' => true,
            ],
            'phone' => [
                'label' => 'Phone',
                'convert_to_lowercase' => true,
            ],
            'facebook' => [
                'label' => 'Facebook',
                'convert_to_lowercase' => false,
            ],
            'instagram' => [
                'label' => 'Instagram',
                'convert_to_lowercase' => false,
            ],
        ];
        return apply_filters( 'dt_communication_handles', $handles );
    }

    public static function array_key_values( $array, $key = 'ID' ){
        $ids = [];
        foreach ( $array as $value ){
            if ( isset( $value[$key] ) ){
                $ids[] = $value[$key];
            }
        }
        return $ids;
    }

    public static function get_first_and_last_name( string $name ){
        $name = trim( $name );
        $last_name = '';
        $names = explode( ' ', $name );
        if ( count( $names ) > 1 ){
            $last_name = array_pop( $names );
        }
        $first_name = implode( ' ', $names );
        if ( is_email( $first_name ) ){
            $first_name = '';
        }

        return compact( 'first_name', 'last_name' );
    }

    public static function find_record_by_handle( string $handle, $return_record = false ){
        global $wpdb;
        $id = $wpdb->get_var( $wpdb->prepare( "SELECT ID FROM $wpdb->posts WHERE post_title = %s AND post_type = 'conversations'", $handle ) );
        if ( $return_record && !empty( $id ) ){
            return DT_Posts::get_post( 'conversations', $id, true, false );
        }
        return $id;
    }


    public static function dt_array_to_dt_field_update_format( array $array ){
        if ( isset( $array['values'] ) ){
            return $array;
        }
        $field_options = [ 'values' => [] ];
        foreach ( $array as $value ){
            $field_options['values'][] = [ 'value' => $value ];
        }
        return $field_options;
    }

    public static function create_or_update_conversation_record( string $handle, array $fields, int $contact_id = null ){
        $conversation_record = self::find_record_by_handle( $handle, true );
        if ( !empty( $conversation_record ) ){
            //if ( is_user_logged_in() && !DT_Posts::can_view( 'conversation', $conversation_record['ID'] ) ){
            //    return new WP_Error( 'no_access', 'No access to conversation' );
            //}
            if ( isset( $fields['name'] ) ){
                unset( $fields['name'] );
            }
            if ( isset( $fields['first_name'] ) ){
                unset( $fields['first_name'] );
            }
            if ( isset( $fields['last_name'] ) ){
                unset( $fields['last_name'] );
            }
            if ( $contact_id ){
                $fields['contacts'] = self::dt_array_to_dt_field_update_format( [ $contact_id ] );
            }
            $conversation_record = DT_Posts::update_post( 'conversations', $conversation_record['ID'], $fields, true, false );
        } else {
            if ( !isset( $fields['type'] ) ){
                return new WP_Error( 'missing_type', 'Missing type field' );
            }
            if ( $fields['type'] === 'email' ){
                $fields['name'] = self::validate_and_format_email( $handle );
            } else if ( $fields['type'] === 'phone' ){
                $fields['name'] = self::validate_and_format_phone( $handle );
            } else {
                $fields['name'] = $handle;
            }
            if ( $contact_id ){
                $fields['contacts'] = self::dt_array_to_dt_field_update_format( [ $contact_id ] );
            }
            $conversation_record = DT_Posts::create_post( 'conversations', $fields, true, false );
        }
        if ( is_wp_error( $conversation_record ) ){
            return $conversation_record;
        }
        return $conversation_record;
    }

    public static function validate_and_format_email( $email ){
        $email = trim( $email );
        $email = str_replace( ' ', '', $email ); //remove spaces
        $email = strtolower( $email );
        if ( !is_email( $email ) ){
            return false;
        }
        return $email;
    }

    public static function validate_and_format_phone( $phone ){
        $phone = trim( $phone );
        //match phones numbers with +
        $phone = preg_replace( '/[^0-9+]/', '', $phone );
        if ( str_starts_with( $phone, '00' ) ){
            $phone = '+' . substr( $phone, 2 );
        }
        if ( strlen( $phone ) === 10 && !str_starts_with( $phone, '+' ) ){
            $phone = '+1' . $phone;
        }
        if ( !str_starts_with( $phone, '+' ) ){
            return false;
        }

        return $phone;
    }

    public static function send_message($recipientID, $platform, $message) {
        // send a POST request to the API
        $social_mediator_url = get_option('disciple_tools_conversations_social_mediator_url');

        $send_message_url = $social_mediator_url . 'api/response';
        $response = wp_remote_post($send_message_url, array(
            'body' => json_encode(array(
                'recipientID' => $recipientID,
                'platform' => $platform,
                'message' => $message
            )),
            'headers' => array('Content-Type' => 'application/json'),
        ));

        // if the request was successful, return the response
        if (!is_wp_error($response)) {
            return $response;
        } else {
            return json_decode(wp_remote_retrieve_body($response));
        }

    }
}
