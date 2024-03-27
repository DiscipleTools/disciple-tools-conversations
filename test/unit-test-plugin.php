<?php

class PluginTest extends TestCase
{
    public function test_plugin_installed() {
        activate_plugin( 'disciple-tools-conversations/disciple-tools-conversations.php' );

        $this->assertContains(
            'disciple-tools-conversations/disciple-tools-conversations.php',
            get_option( 'active_plugins' )
        );
    }
}
