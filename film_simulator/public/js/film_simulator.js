



document.addEventListener('DOMContentLoaded', function () {

    let carType = {
        carType: 'hatchback',
        color : 'black'
    };

    let filmPower = {
        front: '0.0',
        back: '0.0',
        side: '0.0',
        backSide: '0.0'
    }

    const svg = document.getElementById('filmSimSvg');

    document.addEventListener('click', function (e) {
        //checks if some power film is clicked
        if(e.target.closest('.simPower__serriesValues span')){

            let FilmPower = e.target.closest('.simPower__serriesValues span');
            //click the right membrane power unclick the old one
            chooseFilmPower_OnlyGraphics(FilmPower);
        }

        if(e.target.closest('.simCar__Cartype')){
            carType.carType = e.target.closest('.simCar__Cartype').getAttribute('data-type');

            switch(carType.carType){
                case 'hatchback':
                    sim_setPathsHatchback();
                    break;
                case 'sedan':
                    sim_setPathsSedan();
                    break;
                case 'suv':
                    sim_setPathsSUV();
                    break;
                default:
                    break;
            }
            setSvgImage();
            setFilmPowerToCar();

        }

        if(e.target.closest('.simCar__color')){
            carType.color = e.target.closest('.simCar__color').getAttribute('data-color');
            setSvgImage();
        }

        if(e.target.closest('.simPower__serriesValues span')){
            let opacity = e.target.closest('.simPower__serriesValues span').getAttribute('data-opacity');
            let region = e.target.closest('.simPower__serriesValues span').getAttribute('data-region');

            switch(region){
                case 'front' :
                    let frontFilmPath = document.querySelector('#window_x5F_front');
                    frontFilmPath.style.opacity = opacity;
                    filmPower.front = opacity;
                    break;
                case 'back':
                    let backFilmPath = document.querySelector('#window_x5F_pisw');
                    backFilmPath.style.opacity = opacity;
                    filmPower.back = opacity;
                    break;
                case 'side':
                    let sideFirstCarFilmPath = document.querySelector('#window_x5F_pisw_x5F_deksia');
                    sideFirstCarFilmPath.style.opacity = opacity;
                    let sideSecondCarFilmPath = document.querySelector('#window_x5F_aristera_x5F_front');
                    sideSecondCarFilmPath.style.opacity = opacity;
                    filmPower.side = opacity;
                    break;
                case 'backSide':
                    let backSideFirstCarFilmPath = document.querySelector('#window_x5F_pisw_x5F_aristera');
                    backSideFirstCarFilmPath.style.opacity = opacity;
                    let backSideSecondCarFilmPath = document.querySelector('#window_x5F_deksia_x5F_front');
                    backSideSecondCarFilmPath.style.opacity = opacity;
                    filmPower.backSide = opacity;
                    break;
                default:
                    break;
            }
        }


    });

    /*only graphics means  that these function are only responsible for making the
graphics interactions and nothing else*/
    function chooseFilmPower_OnlyGraphics(FilmPower) {
        FilmPower.parentNode.querySelector('.simPower__active')
            .classList.remove('simPower__active');
        FilmPower.classList.add('simPower__active');
    }

    function setFilmPowerToCar(){
        let frontFilmPath = document.querySelector('#window_x5F_front').style.opacity = filmPower.front;
        let backFilmPath = document.querySelector('#window_x5F_pisw').style.opacity = filmPower.back;
        let sideFirstCarFilmPath = document.querySelector('#window_x5F_pisw_x5F_deksia').style.opacity = filmPower.side;
        let sideSecondCarFilmPath = document.querySelector('#window_x5F_aristera_x5F_front').style.opacity = filmPower.side;
        let backSideFirstCarFilmPath = document.querySelector('#window_x5F_pisw_x5F_aristera').style.opacity = filmPower.backSide;
        let backSideSecondCarFilmPath = document.querySelector('#window_x5F_deksia_x5F_front').style.opacity = filmPower.backSide;
    }

    function setSvgImage() {
        let svgImage = document.querySelector('#filmSimSvg image');
        let currentHref = svgImage.getAttribute('xlink:href');
        let newFilename = carType.carType + '_' + carType.color + '.jpg';

        let newHref = currentHref.substring(0, currentHref.lastIndexOf('/') + 1) + newFilename;
        svgImage.setAttribute('xlink:href', newHref);
    }

    function removeAllPathsFromSVG(){
        const existingPaths = svg.querySelectorAll('path');
        existingPaths.forEach(path => path.remove());
    }

    function addNewPathsToSVG(newPathsString) {

        const parser = new DOMParser();
        const tempSvg = parser.parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${newPathsString}</svg>`, 'image/svg+xml');

        const newPaths = tempSvg.querySelectorAll('path');
        newPaths.forEach(path => svg.appendChild(path));
    }

    function sim_setPathsHatchback(){

        removeAllPathsFromSVG();

        let newPathsString = `<path id="window_x5F_front" d="M1212.3,388.3c20-19.1,45.2-40.5,76.1-61.2,32.7-22,63.6-37.9,90.1-49.5,47.2-4.1,98.1-6.8,152.4-7.2,56.5-.4,109.5,1.7,158.4,5.4-11.5,18.9-23.1,38-35.1,57.2-11.2,17.9-22.4,35.6-33.5,53.1-64.1,1.1-128.2,1.9-192.4,2.2-72,.4-144,.4-216,0Z" fill="#231f20" opacity=".0"/>
                                <path id="window_x5F_aristera_x5F_front" d="M1798.8,274.1c7.1,16.2,14.2,35.5,20.1,57.5,6.6,24.7,10.1,47.3,11.9,66.4-7.1,1.2-14.1,2.4-21.2,3.6.4-3.2.5-7.8-.6-13-1.8-8.4-5.8-14.3-8.2-17.4-5.4-3-12.7-6.5-21.8-9.2-10.8-3.3-19.3-4.1-25.8-4.7-14.3-1.3-21.5-1.9-26.7,2-5.3,4-7.5,10.4-9.2,15.6-1.2,3.8-2.1,10.2-3.2,16.8-.9,5.3-1,6.7-2.4,7.9-3.5,3-10.4.9-16.2-.9-6.1-1.9-6.2-3-9.5-3.4-7.5-.8-16.4,4.2-16.6,8.6-.3,6.5,18.9,12.4,27.7,14.8-.1,0-.3,0-.3,0,0-.3,19.6-1.9,43.5-5.6,8.4-1.3,22-3.5,31.9-2.2.5,0,9,1.2,9,1.2,0,0-.1,0-.3,0-4.8,1.5-83.8,16.2-86.2,11.2-4.8,1.1-29.6,0-34.4,1.1,5.8-19.2,20.3-58.5,25.2-69.9,17.4-40,30.5-53.3,34.8-57.4,7.5-7.2,14.6-12.1,19.5-15.2,7.9-2.8,18.2-5.7,30.4-7.2,10.9-1.3,20.6-1.2,28.3-.5Z" fill="#231f20" opacity=".9"/>
                                <path id="window_x5F_deksia_x5F_front" d="M1821.8,276.9c7.5,13.3,15.2,28.8,22.2,46.4,10.1,25.5,16.3,49,20.1,69,14.1-1.8,25.9-3.6,34.6-5.1,19.6-3.4,32.8-5.7,49.4-10.7,13-3.9,23.5-8.1,30.6-11.2-.4-6.3-1.6-15.9-6.3-26.3-10.2-22.9-29.2-33.8-37-38.2-13.2-7.3-25.9-10.2-35.6-11.3-11.4-3.5-24.8-6.8-39.9-9.1-14-2.2-26.8-3.1-38.1-3.3Z" fill="#231f20" opacity=".0"/>
                                <path id="window_x5F_pisw_x5F_deksia" d="M828.2,245.2c23.8,43.4,47.6,86.8,71.4,130.2,32.2,5.4,64.4,10.8,96.6,16.2,4-4.8,8-9.6,12-14.4-6.5-16.5-19.7-43.4-45.6-68.4-17.5-16.9-35.3-27.6-48.6-34.2-11.5-7.6-28-16.6-49.2-22.8-13.8-4-26.2-5.8-36.6-6.6Z" opacity=".9"/>
                                <path id="window_x5F_pisw_x5F_aristera" d="M861.3,369.9c-5.1-19.8-13-43.8-25.6-69.8-11.4-23.4-23.8-42.7-35.1-58.1-24.8-3-56.3-4.3-92.2,0-23.1,2.8-43.6,7.4-61,12.4-2.7,4.9-10.1,20-7.3,39.8,3.2,22.8,17.7,36.2,21.6,39.6,36.2,8.1,74,15.6,113.4,22.5,29.5,5.1,58.3,9.6,86.4,13.5Z" fill="#231f20" opacity=".0"/>
                                <path id="window_x5F_pisw" d="M506.6,239.4h.2c-.4-.2-.7-.2-1.1-.3,0,0,0,0,0,0,0,0,0,0,0,0-19.6-2.9-41.3-5.1-64.8-6.1-16.9-.7-33-.6-47.9,0-2.7,2.9-5.4,5.7-8.1,8.5l-120.1,2.7c-5.8-2.4-11.7-4.7-17.5-7.1-8.8-1.3-20.7-2.1-34.7-.1-10.6,1.5-19.6,4.1-26.5,6.8-13.7,13.2-27.7,27-41.7,41.5-19.3,19.9-37.3,39.6-54.2,58.8,24.4,3,50.4,5.5,77.9,7.2,26.4,1.6,51.5,2.3,75.3,2.2,0,0,0,0,0,0h101.5l1.9-12.1c-15.9-.9-33-1.3-51.2-.9-17.5.4-33.9,1.4-49.2,2.8,0,0,0,0,0,0-.2-3.9-.6-7.4-1.1-10.7,13.6-1.1,28.1-1.8,43.5-1.8,9.8,0,19.3.2,28.4.7,7,1.1,14,2.2,21,3.2,2.3,1.2,4.6,2.3,6.9,3.5l60.3,1.6v1.6h-58.5l-1.8,12.1,162-5.2,20.2-10.2c16-25.8,32.1-51.6,48.1-77.4-22.9-7.1-45.7-14.2-68.6-21.3Z" fill="#231f20" opacity=".0"/>`;

        addNewPathsToSVG(newPathsString);
    }

    function sim_setPathsSedan(){

        removeAllPathsFromSVG();

        let newPathsString = `  <path id="window_x5F_pisw" d="M165.6,349.6c41.2-.9,83.4-1.2,126.5-.9,71.7.6,140.9,2.9,207.4,6.8,3.8-1.9,9.6-5,16.7-9,30.5-17.4,44.1-30.4,68-46.4,10.2-6.8,25.5-16.3,45.4-26.1-53.5-6.9-114.4-11.3-181.3-10.4-42.1.6-81.5,3.3-117.9,7.2-26.2,9.7-54.5,21.4-84.2,35.5-29.7,14.2-56.5,28.8-80.6,43.2Z" fill="#231f20" opacity=".0"/>
                                   <path id="window_x5F_pisw_x5F_aristera" d="M640,318.5c-.5,4.2-.8,9.4,0,15.5,1.6,12.1,6.5,21,9.9,25.9,26.2,9.5,57.9,19,94.5,25.6,39.5,7.2,74.9,9.5,104.4,9.4-8-19.2-17.2-39.5-27.9-60.5-11.1-22-22.5-42.1-33.8-60.5-23.3-2.1-42.5-.7-56.2,1.1-20.4,2.7-39.8,5.3-60.8,17.8-14.3,8.5-24.2,18.6-30.1,25.6Z" fill="#231f20" opacity=".0"/>
                                   <path id="window_x5F_pisw_x5F_deksia" d="M810.8,277c25.3,1.3,67.8,6.6,114.3,29.4,39.6,19.4,67,43.9,83.4,61.2.7,13.6,1.4,27.2,2.1,40.8l-131.4-11.4c-7.6-15.6-15.9-31.6-24.9-48-14.3-26-29-50-43.5-72Z" fill="#231f20" opacity=".0"/>
                                   <path id="window_x5F_front" d="M1192.4,472c21.8-18.4,47-37.8,75.6-57,29.2-19.6,57.1-35.8,82.8-49.2,34.3-5.5,71.4-9.9,111-12.6,73.1-5,139.5-2.9,197.4,2.4-12.2,15.3-24.7,31.9-37.2,49.8-15.2,21.8-28.5,42.9-40.2,63-72-2.3-146.8-3-224.4-1.8-56.5.9-111.6,2.7-165,5.4Z" fill="#231f20" opacity=".0"/>
                                   <path id="window_x5F_aristera_x5F_front" d="M1764.5,352.8c7.5,15.9,15.7,37.6,20.2,64.2,3.2,18.4,3.9,35,3.6,48.7-16.8,1.5-33.6,3-50.4,4.5,11.9-11.7,11.1-19.1,10.6-21.6-2.8-13.4-29-22.8-66.4-20.3-9.4.9-17.5,6.8-21.2,15.3-4.1,9.5-1.8,20.8,5.8,28.4h-21.6v5.9c-9.8,1.4-19.7,2.7-29.6,4,11.5-29.1,24.2-51.7,34.1-67.5,25.3-40.4,40.5-48.8,48.2-52.2,11.6-5.1,25-7.5,28.8-8.1,15.4-2.6,28.6-2.2,37.8-1.4Z" fill="#231f20" opacity=".0"/>
                                   <path id="window_x5F_deksia_x5F_front" data-name="window_x5F_front_x5F_aristera" d="M1782.9,353c9.1,21.4,18.1,44.6,26.3,69.5,4.6,13.9,8.7,27.4,12.4,40.5,15.8.7,35.5,0,57.8-4.4,12.4-2.5,23.5-5.8,33.1-9.3,10.2-4,20.4-7.9,30.6-11.9-1.1-4.5-2.7-9.9-5.4-15.8-3.5-7.7-7.7-13.7-11.2-18-12.4-10-30.3-22.3-53.8-32.2-18.3-7.7-35.1-11.9-48.6-14.2-13.7-1.4-27.5-2.9-41.2-4.3Z" fill="#231f20" opacity=".0"/>`;

        addNewPathsToSVG(newPathsString);
    }

    function sim_setPathsSUV(){

        removeAllPathsFromSVG();

        let newPathsString = `  <path d="M169.1,255.7" fill="#fff" stroke="#231f20" stroke-miterlimit="10"/>
                                   <path id="window_x5F_pisw" d="M89,333l80.1-77.3,210,18.1-57.3,64c-28.5-2.3-51.7-2.8-68.1-2.7-4.5,0-38.3,1.4-38.6-1.5,0-.3.3-1.1.9-1.5,1.1-.7,3.1,0,4,0,.1,0,.2,0,.5,0,.1,0,.3,0,.4,0,0,0,0,0,.1,0,0,0,0-.1,0-.3,0-.2,0,0,0-.3,0-.3,0-.3,0-.3.1-.2.4,0,1.1,0,.3,0,.9,0,1.2,0,.1,0,.3,0,.4,0,0,0,.1,0,.1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.2,0-.2,0-.2,0-.1,0-.2,0-.1,0-.2,0-.3,0,0,0,0,0,0,0,0,0,0,0,0,.3,0,.4,0,.4,0,0,0,.3,0,.9,0,.2,0,.4,0,.5,0,0,0,0,0,.1,0,0,0,0,0,.1,0,0,0,0,0,0-.1,0,0,0-.2,0-.3,0-.2,0-.3,0-.8,0-.7,0-.7,0-.8.1-.1.3,0,.7,0,.3,0,.6,0,.9,0,.4,0,.9,0,1.8,0,.3,0,.5,0,.7,0,.6,0,1.1,0,1.4,0,.8,0,1.2,0,1.8,0,1.4,0,2.3,0,3.2-.1,2,0,3.8-.2,5.9.2,1.8.3,3.1.8,3.6.2.3-.4-.1-.8.2-1.5.5-1,2.3-1,2.2-1.4,0-.2-.4-.2-.5-.6-.1-.3,0-.6,0-.8-.2-.2-.6,0-1.2,0-.5,0-.5,0-1.7,0-1.2,0-1.3,0-2.5,0-.8,0-1.4,0-2-.1-2.4-.2-3-.4-4.5-.5-3.7-.3-5.2.7-6-.3-.5-.6-.1-1.3-.8-2-.6-.7-1.6-.7-1.9-.8-1.5-.2-.4-.4-6.4-2.1,0,0-6.7-1.8-13.2-2.8-3.8-.6-3.7-.3-7.1-.9-1-.2-4.4-.8-9-2.1-1.8-.5-2.7-.8-8.5-2.5-3.7-1.1-4.6-1.3-5.9-1.1-1.5.3-2.9,1.2-5.5,3-1.6,1.1-2,1.6-2.4,2-.9,1.3-.7,2-1.5,3.8-.9,2.1-2.2,3.5-2.8,4.2-1.8,1.9-2.5,1.6-3.6,2.9-1.8,2.2-.9,4.5-1.6,6.1-1.6,3.9-11.9,3-20.1,2.6-12.4-.7-24.8,0-37.2-.3-5.8-.2-10.5-.2-13.5-.3Z" fill="#231f20" opacity=".0"/>
                                   <path id="window_x5F_pisw_x5F_deksia" d="M752.6,222.9c4.7,7,11,16.9,17.9,29.2,3.4,6.1,7.9,14.5,16.8,33.8,5.8,12.5,13.5,29.5,22,49.9,49.9,3,99.9,6,149.8,9-.4-12.8-.9-25.6-1.3-38.4-7.4-5.2-19.3-13.7-34.1-24.3-36-25.7-40.7-29.4-51.1-34.7-19.7-9.9-36-13.5-54.1-17.4-16.1-3.5-38.6-7.1-65.9-7.2Z" fill="#231f20" opacity=".0"/>
                                   <path id="window_x5F_front" d="M1612.4,277c-17.2,18.8-34.9,39.3-52.7,61.6-13.2,16.6-25.4,32.9-36.8,48.8-99,3.4-198,6.8-297,10.2v-3h-45.6c18.7-17.4,45.5-39.9,80.4-62.1,27.3-17.3,53.2-33.8,88.8-45.6,15.4-5.1,44.9-13.3,162.3-12.6,41.9.3,76.5,1.6,100.5,2.7Z" fill="#231f20" opacity=".0"/>
                                   <path id="window_x5F_aristera_x5F_front" d="M1724,282.7c5.2,15.7,10.2,33.4,14.3,53.1,4.7,22.8,7.3,43.8,8.7,62.4-20.3.8-40.7,1.6-61,2.4,1.7-1.6,2.8-3.3,3.5-4.7,5.5-11.2-4.6-24.8-5.4-25.8-1.9-1.9-4.9-4.3-8.9-6.6-2.9-1.6-6.2-3-13.2-4.7-9.6-2.4-15.7-3.9-24.1-3.7-4.5,0-10.9.7-18.6,3.1-2.1.4-5.6,1.2-9.1,3.7-5.7,3.9-7.9,9.3-8.7,11.4-1.1,4.9-2.3,12.6-.4,21.8.8,4.3,2.1,7.9,3.4,10.8-16.3.7-32.6,1.4-48.9,2.1,11.7-27.4,24.3-48.6,34.2-63.3,17.6-26.2,26.8-39.5,44.4-48.6,15.7-8.1,31.8-9.9,50.4-12,16.3-1.8,29.9-1.7,39.3-1.2Z" fill="#231f20" opacity=".0"/>
                                   <path id="window_x5F_deksia_x5F_front" d="M1745.6,282.4c8.5,18.7,17.1,40.5,24.3,65.4,5,17.4,8.7,33.8,11.4,48.9,24.7-.9,49.4-1.7,74.1-2.6,3.4,0,8.8-.6,14.6-3.1,7.7-3.4,12.2-8.6,15.1-12,14.6-17.2,30.1-39.6,33-43.8-3.5-4.9-7-9.8-10.5-14.7-5.5-5.7-14.4-13.8-27.4-19.7-5.9-2.7-11.4-4.5-19.4-6.4-23-5.5-42.1-6.5-47.7-7.1-23.9-2.8-46.5-4.3-67.5-4.9Z" fill="#231f20" opacity=".0"/>
                                   <path id="window_x5F_pisw_x5F_aristera" d="M545.5,231c-10.4,6.9-13,21.3-13.5,32.2,17.7,10.9,36.5,21.8,56.5,32.6,21.9,11.9,43.2,22.6,63.7,32.2,38.9,2,77.7,3.9,116.6,5.9-4.7-17.8-10.6-36.9-18-57.1-7.5-20.4-15.4-39.1-23.4-55.8h-121.7c-14,2.6-26,4.2-35.6,5.2-13.9,1.4-19,1.3-24.5,4.9Z" fill="#231f20" opacity=".0"/>`;

        addNewPathsToSVG(newPathsString);
    }

});