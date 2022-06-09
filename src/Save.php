<?php

function framer_motion_render_block($block): string {

	$props = array_key_exists('message', $block) ? $block['message'] : "[]";

	ob_start();

	?>
	<div
		class="fmb-animated-heading"
		id="fmb-animated-heading"
		data-animated-heading="<?php echo esc_attr($props) ?>"
	></div>

	<?php

	return ob_get_clean();
}
