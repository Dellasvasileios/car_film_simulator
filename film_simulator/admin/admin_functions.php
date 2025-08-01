<?php

function fm_sm_admin_enqueue_scripts(){
    wp_enqueue_style(
        'film-simulator-admin-style',
        FILM_SIMULATOR_PLUGIN_URL . 'admin/css/film_simulator-admin.css',
        array(),
        '1.0.1'
    );
    wp_enqueue_script('film-simulator-admin-script', FILM_SIMULATOR_PLUGIN_URL . 'admin/js/film_simulator-admin.js', array(), '1.0.1', true);
}

add_action('admin_enqueue_scripts', 'fm_sm_admin_enqueue_scripts');


function fm_sm_add_menu_page(){
    add_menu_page(
        'Εξομοιωτής μεμβρανών  αυτοκινήτου',
        'Εξομοιωτής μεμβρανών  αυτοκινήτου',
        'manage_options',
        'film_simulator',
        'fm_sm_render_admin_page',
        'dashicons-format-image',
        6
    );
}

add_action('admin_menu', 'fm_sm_add_menu_page');

function fm_sm_render_admin_page(){

        $law_link = '';

        if(isset($_POST['law_link'])){
            update_option('law_link', $_POST['law_link']);
        }
        $law_link = get_option('law_link');
    ?>
    <h1>Εξομοιωτής μεμβρανών  αυτοκινήτου</h1>
    <span>Αντιγραφή και επικόλληση το shortcode => [film_simulator]</span>

    <form action="" method="post">
        <div class="law-link">
            <input type="text" placeholder="Νομοθεσία link" name="law_link" value="<?= $law_link ?>"/>
            <input type="submit" value="Υποβολή" />
        </div>
    </form>
<?php
}