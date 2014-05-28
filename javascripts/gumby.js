

$(function () {
    $('button').click(function () {
        console.log({
            url: $('#target').val() + '?' + encodeURIComponent($('#key').val()) + '=' + encodeURIComponent($('#value').val())
            , type: 'PUT'
        });
        // $.ajax({
        // })
    });
});
