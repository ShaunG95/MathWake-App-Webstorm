/*
 Created by Shaun
*/

//PANEL
$(document).ready(function() {
    $("#flipDisplay").click(function () {
        $("#panelDisplay").slideToggle("fast");
    });
//PANEL
    $(document).ready(function () {
        $("#flipSettings").click(function () {
            $("#panelSettings").slideToggle("fast");
        });

        var clock = $('.clock').FlipClock({
            clockFace: 'TwelveHourClock',
            showSeconds: false
        });
    });
});

