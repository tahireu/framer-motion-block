<?php
/**
 * Plugin Name:       Framer Motion Block
 * Description:       Simple Gutenberg block animated with Framer Motion.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Tahireu
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       framer-motion-block
 *
 * @package           create-block
 */

include(__DIR__ . '/src/Save.php');

function create_block_framer_motion_block_init() {
	register_block_type(
		__DIR__ . '/build',
		array(
			'render_callback' => 'framer_motion_render_block',
		)
	);
}
add_action( 'init', 'create_block_framer_motion_block_init' );
