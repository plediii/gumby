

$(function () {
    $('button').click(function () {
        $.ajax({
            url: $('#target').val() + '?' + encodeURIComponent($('#key').val()) + '=' + encodeURIComponent($('#value').val())
            , type: 'PUT'
        })
            .error(function (err) {
                console.log('Error: ', err);
                // $('#notification').text()
            })
            .success(function () {
                console.log('Success');
            });
    });
});
