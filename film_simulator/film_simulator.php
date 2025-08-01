<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://elarisa.gr
 * @since             1.0.0
 * @package           Film_simulator
 *
 * @wordpress-plugin
 * Plugin Name:       Film Simulator
 * Plugin URI:        https://elarisa.gr
 * Description:       This plugin is responsible for simulating the application of different films on car windows.
 * Version:           1.0.0
 * Author:            Vasilis Dellas & ELARISA
 * Author URI:        https://elarisa.gr/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       film_simulator
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define( 'FILM_SIMULATOR_VERSION', '1.0.1' );
define('FILM_SIMULATOR_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('FILM_SIMULATOR_PLUGIN_URL', plugin_dir_url(__FILE__));
require_once plugin_dir_path(__FILE__). 'admin/admin_functions.php';

function fm_sm_enqueue_scripts() {
    wp_enqueue_style('fm-sm-style', plugins_url('public/css/film_simulator.css' , __FILE__) , [] , '1.0.1' );
    wp_enqueue_script('fm_sm_script' , plugins_url('/public/js/film_simulator.js' , __FILE__) , []  , '1.0.1' , true );

}

add_action( 'wp_enqueue_scripts', 'fm_sm_enqueue_scripts' );

function fm_sm_shortcode_simulator( $atts) {
    ob_start();
        require plugin_dir_path(__FILE__) . '/templates/film_simulator.php';
    return ob_get_clean();
}

add_shortcode( 'film_simulator', 'fm_sm_shortcode_simulator' );

