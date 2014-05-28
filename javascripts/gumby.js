

$(function () {
    var session = {
        set: function (name, val) {
            if (typeof(Storage) !== "undefined")
            {
                localStorage.setItem(name, val);
            }
        }
        , get: function (name) {
            if (typeof(Storage) !== "undefined")
            {
                return localStorage.getItem(name);
            }
            else {
                console.log('no local storage');
                return void 0;
            }
        }
    };

    var remember = function (field) {
        var $field = $('#' + field);
        $field.val(session.get(field));
        $('button').click(function () {
            session.set(field, $field.val());
        });
    };

    remember('target');
    remember('key');

    if (session.get('target')) {
        $('#target').val(session.get('target'));
    }

    $('button').click(function () {
        $.ajax({
            url: $('#target').val() + '?' + encodeURIComponent($('#key').val()) + '=' + encodeURIComponent($('#value').val())
            , type: 'PUT'
            , xhrFields: {
                withCredentials: true
            }
        })
            .error(function (err) {
                console.log('Error: ', err);
                $('#notification').text('' + err.status + ' ' + err.responseText);
            })
            .success(function (body, type, err) {
                $('#notification').text('' + err.status + ' ' + err.responseText);
            });
    });
});
