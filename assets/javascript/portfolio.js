function hideAll () {
    $('#homeDiv').hide();
    $('#aboutDiv').hide();
    $('#portfolioDiv').hide();
    $('#contactDiv').hide();
}

$(function () {
    hideAll();
    $('#homeDiv').show();

   //Enables hover viewing of animated gifs
    $('.portfolio-picture').hover(function() {
        $(this).attr('src', $(this).attr('data-animated'));

    }, function() {
        $(this).attr('src', $(this).attr('data-still')
        )
    });

    
    
});

$('#titleBtn').on('click', function () {
    hideAll();
    $('#homeDiv').show();
});

$('#gifBtn').on('click', function () {
    hideAll();
    $('#portfolioDiv').show();
});

$('#portfolioBtn').on('click', function () {
    hideAll();
    $('#portfolioDiv').show();
});

$('#contactBtn').on('click', function () {
    hideAll();
    $('#contactDiv').show();
})

$('#aboutBtn').on('click', function () {
    hideAll();
    $('#aboutDiv').show();
});








