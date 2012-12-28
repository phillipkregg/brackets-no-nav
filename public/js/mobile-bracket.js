
$(document).ready(function() {

    checkWindowSize();
    var windowWidth;



    function checkWindowSize() {
        $(window).resize(function() {
            windowWidth = $(window).width();
            //$('body').prepend('<div>' + windowWidth + '</div>');

            var regionEast =  $("#regionEast");

            if(windowWidth < 767) {
//                $("#regionMidwest div.bracketColumn3").hide();
//                $("#regionMidwest div.bracketColumn4").hide();
//                $("#regionMidwest div.bracketColumn5").hide();

                // switch orientation of brackets to left facing
                regionEast.removeClass("bracketRight").addClass("bracketLeft");
                regionEast.css("margin-left", "30px");

                $("#bracket_overlay").addClass('bracket_overlay_style visible-phone visible-tablet center');


            } else {
//                $("#regionMidwest div.bracketColumn3").show();
//                $("#regionMidwest div.bracketColumn4").show();
//                $("#regionMidwest div.bracketColumn5").show();

                // switch orientation of brackets to left facing
                regionEast.removeClass("bracketLeft").addClass("bracketRight");
                regionEast.css("margin-left", "0");

                $("#bracket_overlay").removeClass('bracket_overlay_style visible-phone visible-tablet center');

            }

        });
    }



    $("#arrow_left").bind("click", function() {

    });






});

