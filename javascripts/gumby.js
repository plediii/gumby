

$(function () {
    $('button').click(function () {
        console.log({
            url: $('#target').val() + '?' + encodeURIComponent($('#key').val()) + '=' + encodeURIComponent($('#val').val())
            , type: 'PUT'
        });
        // $.ajax({
        // })
    });
});
