

$(function () {
    var session = {
        set: function (name, val) {
            if (typeof(Storage) !== "undefined")
            {
                sessionStorage[name] = val;
            }
        }
        , get: function (name) {
            if (typeof(Storage) !== "undefined")
            {
                return sessionStorage[name];
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
