$(document).ready(function() {
    var checkEmpty = 1;
    var round = true;
    $('form').on('submit', function(event) {
        var s = $('#sentence').val();
        if (s === '' && round){
            if (checkEmpty%3==0) {
                $('#output').attr('placeholder', 'This webpage is dumb, YOU are NOT.\nType something above before pressing the button.');
                round = false
            }
            else if (checkEmpty%3==2) {
                $('#output').attr('placeholder',
                'Don\'t know what to type? Here\'s an example sentence:\nIn this seemingly eternal world, life is just an awkward moment between birth and death.');
            }
            else {
                $('#output').attr('placeholder',
                'YOU pressed the button without typing anything in the box above. Type something above and click on TAG POS.')
            }
            checkEmpty += 1;
        }
        else if (!round) {
            $('#output').attr('placeholder',
            'Type something above and click on TAG POS button. Tagged sentences will appear here.')
        }
        $.ajax( {
            data : {
                phrase : $('#sentence').val()
            },
            type : 'POST',
            url : '/process'
        })
        .done(function(data) {
            $('#output').text(data.output).show();
        });
        event.preventDefault();
    });
});