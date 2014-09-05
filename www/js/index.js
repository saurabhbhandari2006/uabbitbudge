function onDeviceReady() {
    document.addEventListener("deviceready", onDeviceReady, false);
    $('#main').css('opacity', 1);
    $('header').fadeIn();
    $('.leaderboard_table').dataTable({
        "bPaginate": true,
        "aaSorting": [
            [ 1, "asc" ]
        ],
        "bInfo": true,
        "bFilter": true
    });

    


};