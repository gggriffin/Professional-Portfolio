function hideAll () {
    $('#homeDiv').hide();
    $('#aboutDiv').hide();
    $('#portfolioDiv').hide();
}

$(function () {
    hideAll();
    $('#homeDiv').show();
});

$('#aboutBtn').on('click', function () {
    hideAll();
    $('#aboutDiv').show();
});

$('#gifBtn').on('click', function () {
    hideAll();
    $('#portfolioDiv').show();
})

$('#portfolioBtn').on('click', function () {
    hideAll();
    $('#portfolioDiv').show();
});

$('#titleBtn').on('click', function () {
    hideAll();
    $('#homeDiv').show();
});