// 'use strict';

(function ($) {

    function colors() {

        //get red value
        let rangeRed = $('.rangeRed');
        let redColorValue = $('#redColorValue');
        rangeRed.on('input', function () {
            redColorValue.text(rangeRed.val());
            getColorsValues();
        });

        //get green value
        let rangeGreen = $('.rangeGreen');
        let greenColorValue = $('#greenColorValue');
        rangeGreen.on('input', function () {
            greenColorValue.text(rangeGreen.val());
            getColorsValues();
        });

        // //get blue value
        let rangeBlue = $('.rangeBlue');
        let blueColorValue = $('#blueColorValue');
        rangeBlue.on('input', function () {
            blueColorValue.text(rangeBlue.val());
            getColorsValues();
        });

        //get opacity value
        let rangeOpacity = $('.rangeOpacity');
        let opacityValue = $('#opacityValue');
        rangeOpacity.on('input', function () {
            opacityValue.text(rangeOpacity.val());
            getColorsValues();
        });


        let resultColor = $('.resultColor');
        let resultRgbaColor = $('.resultRgbaColor');
        let resultHexColor = $('.resultHexColor');
        let resultOpacity = $('.resultOpacity');

        function getColorsValues() {

            let red = rangeRed.val();
            let green = rangeGreen.val();
            let blue = rangeBlue.val();


            let redHex = (red * 1).toString(16).length === 1 ? '0' + (red * 1).toString(16) : (red * 1).toString(16);
            let greenHex = (green * 1).toString(16).length === 1 ? '0' + (green * 1).toString(16) : (green * 1).toString(16);
            let blueHex = (blue * 1).toString(16).length === 1 ? '0' + (blue * 1).toString(16) : (blue * 1).toString(16);

            let opacity = rangeOpacity.val();

            let rgbaColor = 'rgba(' + red + ',' + green + ',' + blue + ',' + opacity + ')';

            resultColor.css({backgroundColor: rgbaColor});
            resultRgbaColor.find('span').text(rgbaColor);

            resultHexColor.find('.redHex').text(redHex);
            resultHexColor.find('.greenHex').text(greenHex);
            resultHexColor.find('.blueHex').text(blueHex);
            resultOpacity.find('.rangeOpacity').text(opacity);
        }
    }
    colors();
})(jQuery);