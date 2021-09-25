var type = $('#type');

type.data('text', type.text());
type.html('');
type.removeClass('zeroOpacity');

// typer
function typer(text, n, speed) {

    if (n < (text.length)) {
        type.html(text.substring(0, n + 1));
        n++;
        setTimeout(function () {
            typer(text, n, speed)
        }, speed);
    }
}

var text = type.data('text');
typer(text, 0, 50);



////////////////?
window.setTimeout(() => {
    var type2 = $('#type2');

    type2.data('text', type2.text());
    type2.html('');
    type2.removeClass('opacity');

    // typer
    function typer2(text, n, speed) {

        if (n < (text.length)) {
            type2.html(text.substring(0, n + 1));
            n++;
            setTimeout(function () {
                typer2(text, n, speed)
            }, speed);
        }
    }

    var text2 = type2.data('text');
    typer2(text2, 0, 50);
}, 6000);


window.setTimeout(() => {
    var type3 = $('#type3');

    type3.data('text', type3.text());
    type3.html('');
    type3.removeClass('opacity');

    // typer
    function typer3(text, n, speed) {

        if (n < (text.length)) {
            type3.html(text.substring(0, n + 1));
            n++;
            setTimeout(function () {
                typer3(text, n, speed)
            }, speed);
        }
    }

    var text3 = type3.data('text');
    typer2(text3, 0, 50);
}, 6000);

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();