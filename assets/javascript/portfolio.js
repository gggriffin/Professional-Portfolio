function hideAll () {
    $('#homeDiv').hide();
    $('#aboutDiv').hide();
    $('#portfolioDiv').hide();
    $('#contactDiv').hide();
}

$(function () {
    hideAll();
    $('#homeDiv').show();
});

$('#titleBtn').on('click', function () {
    hideAll();
    $('#homeDiv').show();
});

$('#gifBtn').on('click', function () {
    hideAll();
    $('#portfolioDiv').show();
})

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





