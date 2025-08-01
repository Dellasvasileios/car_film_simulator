<div class="sim">
    <div class="sim__left">
        <div class="sim__leftContainer">

            <div class="simcar">

                <h2 class="simcar__title">Ρυθμίσεις αυτοκινήτου</h2>

                <div class="simcar__container">

                    <h4 class="simcar__chooseCarTitle">Επιλέξτε τύπο αυτοκινήτου</h4>
                    <ul class="simcar__chooseCarType">
                        <li data-type='hatchback' class="simCar__Cartype">
                            <label>
                                <input name="carType" type="radio" checked>
                                <span class="radioBtn">
                                    <span class="radioBtn__inner"></span>
                                </span>
                                <span>HatchBack</span>
                            </label>
                        </li>
                        <li data-type='sedan' class="simCar__Cartype">
                            <label>
                                <input name="carType" type="radio">
                                <span class="radioBtn">
                                    <span class="radioBtn__inner"></span>
                                </span>
                                <span>Sedan</span>
                            </label>
                        </li>
                        <li data-type='suv' class="simCar__Cartype">
                            <label>
                                <input name="carType" type="radio">
                                <span class="radioBtn">
                                    <span class="radioBtn__inner"></span>
                                </span>
                                <span>SUV</span>
                            </label>
                        </li>
                    </ul>

                    <h4 class="simcar__chooseColorTitle">Επιλέξτε χρώμα αυτοκινήτου</h4>
                    <ul class="simCar__chooseColor">
                        <li  data-color="black" class="simCar__color">
                            <label>
                                <input name="color" type="radio" checked>
                                <span class="radioBtnColor radioButton__color--black">
                                    <span class="radioBtnColor__inner"></span>
                                </span>
                            </label>
                        </li>
                        <li data-color="blue" class="simCar__color">
                            <label>
                                <input name="color" type="radio">
                                <span class="radioBtnColor radioButton__color--blue">
                                    <span class="radioBtnColor__inner"></span>
                                </span>
                            </label>
                        </li>
                        <li data-color="red" class="simCar__color">
                            <label>
                                <input name="color" type="radio">
                                <span class="radioBtnColor radioButton__color--red">
                                    <span class="radioBtnColor__inner"></span>
                                </span>
                            </label>
                        </li>
                        <li data-color="white" class="simCar__color">
                            <label>
                                <input name="color" type="radio">
                                <span class="radioBtnColor radioButton__color--white">
                                    <span class="radioBtnColor__inner"></span>
                                </span>
                            </label>
                        </li>
                        <li data-color="gray" class="simCar__color">
                            <label>
                                <input name="color" type="radio">
                                <span class="radioBtnColor radioButton__color--grey">
                                    <span class="radioBtnColor__inner"></span>
                                </span>
                            </label>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    </div>
    <div class="sim__right">
        <h2 class="simFilmPower__title">Ρυθμίσεις μεμβρανών</h2>
        <div class="sim__rightContainer">

            <!--<div class="simFilm">

                <div class="simFilm__series">
                    <h4 class="simfilm__title">
                        Επιλέξτε σειρά μεμβρανών
                    </h4>
                    <ul class="simFilm__choices">
                        <li class="simFilm__choice">
                            <label data-tab='1'>
                                <input name="filmSeries" type="radio" checked>
                                <span class="radioBtn ">
                                    <span class="radioBtn__inner"></span>
                                </span>
                                <span>Σειρά Evolve Ceramic</span>
                            </label>

                        </li>
                        <li class="simFilm__choice">
                            <label data-tab='2'>
                                <input name="filmSeries" type="radio">
                                <span class="radioBtn ">
                                    <span class="radioBtn__inner"></span>
                                </span>
                                <span>Σειρά CXP™ & Carbon</span>
                            </label>
                        </li>
                        <li class="simFilm__choice">
                            <label data-tab='3'>
                                <input name="filmSeries" type="radio">
                                <span class="radioBtn ">
                                    <span class="radioBtn__inner"></span>
                                </span>
                                <span>Σειρά HP</span>
                            </label>
                        </li>
                        <li class="simFilm__choice">
                            <label data-tab='4'>
                                <input name="filmSeries" type="radio">
                                <span class="radioBtn">
                                    <span class="radioBtn__inner"></span>
                                </span>
                                <span>Σειρά Standart Pro</span>
                            </label>
                        </li>
                    </ul>
                </div>

            </div>
            -->
            <div class="simPower">
                <h4 class="simPower__title">
                    Επιλέξτε δύναμη μεμβράνης
                </h4>
                <div class="simPower__containerSerries">
                    <div data-tab-content="1" class="simPower__container--active simPower__container">
                        <div class="simPower__series">
                            <div class="simPower__seriesTitle">
                                Ανεμοθώρακας
                            </div>
                            <div class="simPower__serriesValues">
                                <span data-opacity="0.95" data-region="front">5</span>
                                <span data-opacity="0.85" data-region="front">15</span>
                                <span data-opacity="0.80" data-region="front">20</span>
                                <span data-opacity="0.65" data-region="front">35</span>
                                <span data-opacity="0.55" data-region="front">45</span>
                                <span data-opacity="0.50" data-region="front">50</span>
                                <span data-opacity="0.30" data-region="front">70</span>
                                <span data-opacity="0"    data-region="front" class="simPower__active simPower__without">Χωρίς</span>
                            </div>
                        </div>
                        <div class="simPower__series">
                            <div class="simPower__seriesTitle">
                                Πλευρική Πρόσοψη
                            </div>
                            <div class="simPower__serriesValues">
                                <span data-opacity="0.95" data-region="side">5</span>
                                <span data-opacity="0.85" data-region="side">15</span>
                                <span data-opacity="0.80" data-region="side">20</span>
                                <span data-opacity="0.65" data-region="side">35</span>
                                <span data-opacity="0.55" data-region="side">45</span>
                                <span data-opacity="0.50" data-region="side">50</span>
                                <span data-opacity="0.30" data-region="side">70</span>
                                <span data-opacity="0"    data-region="side" class="simPower__active simPower__without">Χωρίς</span>
                            </div>
                        </div>
                        <div class="simPower__series">
                            <div class="simPower__seriesTitle">
                                Οπίσθια Πρόσοψη
                            </div>
                            <div class="simPower__serriesValues">
                                <span data-opacity="0.95" data-region="backSide">5</span>
                                <span data-opacity="0.85" data-region="backSide">15</span>
                                <span data-opacity="0.80" data-region="backSide">20</span>
                                <span data-opacity="0.65" data-region="backSide">35</span>
                                <span data-opacity="0.55" data-region="backSide">45</span>
                                <span data-opacity="0.50" data-region="backSide">50</span>
                                <span data-opacity="0.30" data-region="backSide">70</span>
                                <span data-opacity="0"    data-region="backSide" class="simPower__active simPower__without">Χωρίς</span>
                            </div>
                        </div>
                        <div class="simPower__series">
                            <div class="simPower__seriesTitle">
                                Πίσω  Πρόσοψη
                            </div>
                            <div class="simPower__serriesValues">
                                <span data-opacity="0.95" data-region="back">5</span>
                                <span data-opacity="0.85" data-region="back">15</span>
                                <span data-opacity="0.80" data-region="back">20</span>
                                <span data-opacity="0.65" data-region="back">35</span>
                                <span data-opacity="0.55" data-region="back">45</span>
                                <span data-opacity="0.50" data-region="back">50</span>
                                <span data-opacity="0.30" data-region="back">70</span>
                                <span data-opacity="0"    data-region="back" class="simPower__active simPower__without">Χωρίς</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="simPower__legal">

                    <?php
                        $law_link = get_option('law_link');

                        if(!empty($law_link)){
                    ?>
                            <p>* Ελέγξτε την τοπική νομοθεσία περί μεμβρανών (<a target="_blank" href="<?= $law_link ?>">Nομοθεσία</a>)</p>
                    <?php
                        }
                    ?>
                </div>

            </div>

        </div>
    </div>
</div>
<div class="carSvg">

    <img src="<?=FILM_SIMULATOR_PLUGIN_URL . 'public/images/hatchback_black.jpg' ?>" style="position:absolute; left:-9999px;" alt="Preload" />
    <img src="<?=FILM_SIMULATOR_PLUGIN_URL . 'public/images/hatchback_blue.jpg' ?>" style="position:absolute; left:-9999px;" alt="Preload" />
    <img src="<?=FILM_SIMULATOR_PLUGIN_URL . 'public/images/hatchback_gray.jpg' ?>" style="position:absolute; left:-9999px;" alt="Preload" />
    <img src="<?=FILM_SIMULATOR_PLUGIN_URL . 'public/images/hatchback_red.jpg' ?>" style="position:absolute; left:-9999px;" alt="Preload" />
    <img src="<?=FILM_SIMULATOR_PLUGIN_URL . 'public/images/hatchback_white.jpg' ?>" style="position:absolute; left:-9999px;" alt="Preload" />

    <img src="<?=FILM_SIMULATOR_PLUGIN_URL . 'public/images/sedan_black.jpg' ?>" style="position:absolute; left:-9999px;" alt="Preload" />
    <img src="<?=FILM_SIMULATOR_PLUGIN_URL . 'public/images/sedan_blue.jpg' ?>" style="position:absolute; left:-9999px;" alt="Preload" />
    <img src="<?=FILM_SIMULATOR_PLUGIN_URL . 'public/images/sedan_gray.jpg' ?>" style="position:absolute; left:-9999px;" alt="Preload" />
    <img src="<?=FILM_SIMULATOR_PLUGIN_URL . 'public/images/sedan_red.jpg' ?>" style="position:absolute; left:-9999px;" alt="Preload" />
    <img src="<?=FILM_SIMULATOR_PLUGIN_URL . 'public/images/sedan_white.jpg' ?>" style="position:absolute; left:-9999px;" alt="Preload" />

    <img src="<?=FILM_SIMULATOR_PLUGIN_URL . 'public/images/suv_black.jpg' ?>" style="position:absolute; left:-9999px;" alt="Preload" />
    <img src="<?=FILM_SIMULATOR_PLUGIN_URL . 'public/images/suv_blue.jpg' ?>" style="position:absolute; left:-9999px;" alt="Preload" />
    <img src="<?=FILM_SIMULATOR_PLUGIN_URL . 'public/images/suv_gray.jpg' ?>" style="position:absolute; left:-9999px;" alt="Preload" />
    <img src="<?=FILM_SIMULATOR_PLUGIN_URL . 'public/images/suv_red.jpg' ?>" style="position:absolute; left:-9999px;" alt="Preload" />
    <img src="<?=FILM_SIMULATOR_PLUGIN_URL . 'public/images/suv_white.jpg' ?>" style="position:absolute; left:-9999px;" alt="Preload" />

    <div class="carSvg__inner">
    <svg id="filmSimSvg" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2100 1000">
        <!-- Generator: Adobe Illustrator 29.6.0, SVG Export Plug-In . SVG Version: 2.1.1 Build 207)  -->
        <image xlink:href="<?=FILM_SIMULATOR_PLUGIN_URL . 'public/images/hatchback_black.jpg' ?>"/>
        <path id="window_x5F_front" d="M1212.3,388.3c20-19.1,45.2-40.5,76.1-61.2,32.7-22,63.6-37.9,90.1-49.5,47.2-4.1,98.1-6.8,152.4-7.2,56.5-.4,109.5,1.7,158.4,5.4-11.5,18.9-23.1,38-35.1,57.2-11.2,17.9-22.4,35.6-33.5,53.1-64.1,1.1-128.2,1.9-192.4,2.2-72,.4-144,.4-216,0Z" fill="#231f20" opacity=".0"/>
        <path id="window_x5F_aristera_x5F_front" d="M1798.8,274.1c7.1,16.2,14.2,35.5,20.1,57.5,6.6,24.7,10.1,47.3,11.9,66.4-7.1,1.2-14.1,2.4-21.2,3.6.4-3.2.5-7.8-.6-13-1.8-8.4-5.8-14.3-8.2-17.4-5.4-3-12.7-6.5-21.8-9.2-10.8-3.3-19.3-4.1-25.8-4.7-14.3-1.3-21.5-1.9-26.7,2-5.3,4-7.5,10.4-9.2,15.6-1.2,3.8-2.1,10.2-3.2,16.8-.9,5.3-1,6.7-2.4,7.9-3.5,3-10.4.9-16.2-.9-6.1-1.9-6.2-3-9.5-3.4-7.5-.8-16.4,4.2-16.6,8.6-.3,6.5,18.9,12.4,27.7,14.8-.1,0-.3,0-.3,0,0-.3,19.6-1.9,43.5-5.6,8.4-1.3,22-3.5,31.9-2.2.5,0,9,1.2,9,1.2,0,0-.1,0-.3,0-4.8,1.5-83.8,16.2-86.2,11.2-4.8,1.1-29.6,0-34.4,1.1,5.8-19.2,20.3-58.5,25.2-69.9,17.4-40,30.5-53.3,34.8-57.4,7.5-7.2,14.6-12.1,19.5-15.2,7.9-2.8,18.2-5.7,30.4-7.2,10.9-1.3,20.6-1.2,28.3-.5Z" fill="#231f20" opacity=".0"/>
        <path id="window_x5F_deksia_x5F_front" d="M1821.8,276.9c7.5,13.3,15.2,28.8,22.2,46.4,10.1,25.5,16.3,49,20.1,69,14.1-1.8,25.9-3.6,34.6-5.1,19.6-3.4,32.8-5.7,49.4-10.7,13-3.9,23.5-8.1,30.6-11.2-.4-6.3-1.6-15.9-6.3-26.3-10.2-22.9-29.2-33.8-37-38.2-13.2-7.3-25.9-10.2-35.6-11.3-11.4-3.5-24.8-6.8-39.9-9.1-14-2.2-26.8-3.1-38.1-3.3Z" fill="#231f20" opacity=".0"/>
        <path id="window_x5F_pisw_x5F_deksia" d="M828.2,245.2c23.8,43.4,47.6,86.8,71.4,130.2,32.2,5.4,64.4,10.8,96.6,16.2,4-4.8,8-9.6,12-14.4-6.5-16.5-19.7-43.4-45.6-68.4-17.5-16.9-35.3-27.6-48.6-34.2-11.5-7.6-28-16.6-49.2-22.8-13.8-4-26.2-5.8-36.6-6.6Z" opacity=".0"/>
        <path id="window_x5F_pisw_x5F_aristera" d="M861.3,369.9c-5.1-19.8-13-43.8-25.6-69.8-11.4-23.4-23.8-42.7-35.1-58.1-24.8-3-56.3-4.3-92.2,0-23.1,2.8-43.6,7.4-61,12.4-2.7,4.9-10.1,20-7.3,39.8,3.2,22.8,17.7,36.2,21.6,39.6,36.2,8.1,74,15.6,113.4,22.5,29.5,5.1,58.3,9.6,86.4,13.5Z" fill="#231f20" opacity=".0"/>
        <path id="window_x5F_pisw" d="M506.6,239.4h.2c-.4-.2-.7-.2-1.1-.3,0,0,0,0,0,0,0,0,0,0,0,0-19.6-2.9-41.3-5.1-64.8-6.1-16.9-.7-33-.6-47.9,0-2.7,2.9-5.4,5.7-8.1,8.5l-120.1,2.7c-5.8-2.4-11.7-4.7-17.5-7.1-8.8-1.3-20.7-2.1-34.7-.1-10.6,1.5-19.6,4.1-26.5,6.8-13.7,13.2-27.7,27-41.7,41.5-19.3,19.9-37.3,39.6-54.2,58.8,24.4,3,50.4,5.5,77.9,7.2,26.4,1.6,51.5,2.3,75.3,2.2,0,0,0,0,0,0h101.5l1.9-12.1c-15.9-.9-33-1.3-51.2-.9-17.5.4-33.9,1.4-49.2,2.8,0,0,0,0,0,0-.2-3.9-.6-7.4-1.1-10.7,13.6-1.1,28.1-1.8,43.5-1.8,9.8,0,19.3.2,28.4.7,7,1.1,14,2.2,21,3.2,2.3,1.2,4.6,2.3,6.9,3.5l60.3,1.6v1.6h-58.5l-1.8,12.1,162-5.2,20.2-10.2c16-25.8,32.1-51.6,48.1-77.4-22.9-7.1-45.7-14.2-68.6-21.3Z" fill="#231f20" opacity=".0"/>
    </svg>
    </div>
</div>