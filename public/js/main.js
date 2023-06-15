(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    // Chart Global Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";


    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "11", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"],
            datasets: [{
                    label: "Sensor de Humidade",
                    data: [15, 30, 55, 65, 60, 80, 70, 30, 55, 65, 60, 80, 95, 30, 55, 65, 60, 80, 50, 30, 55, 65, 60, 80, 45, 30, 35, 45, 20, 10, 5],
                    backgroundColor: "#00FFFF"
                },
                {
                    label: "Sensor de Liquido",
                    data: [12, 25, 45, 55, 65, 70, 60, 25, 45, 55, 65, 70, 60, 25, 45, 55, 65, 70, 60, 25, 45, 55, 65, 70, 60, 45, 35, 15, 25, 20, 10],
                    backgroundColor: "blue"
                }
            ]
            },
        options: {
            responsive: true
        }
    });


    // Single Bar Chart
    var ctx2 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx2, {
        type: "bar",
        data: {
            labels: ["1", "2", "3", "4"],
            datasets: [{
                label: "Reservatorio",
                backgroundColor: [
                    "rgba(235, 22, 22, .7)",
                    "rgba(235, 22, 22, .6)",
                    "rgba(235, 22, 22, .5)",
                    "rgba(235, 22, 22, .3)"
                ],
                data: [55, 49, 44, 24]
            }]
        },
        options: {
            responsive: true
        }
    });


    
})(jQuery);

