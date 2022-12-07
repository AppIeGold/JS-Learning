function message (var1, var2 = 'not detected second variable') {
    console.log(var1 + " " + var2); //we get 'hello undefined' if not added default value in second variable(var2) which we did not designate.
}

message('hello');

function checkWithIf (from, text) {
    if (text === undefined)
        text = 'not detected second variable';
        console.log (from + ' ' + text)
}

checkWithIf('hello', 'Jerry');

function checkWithOr (from, text) {
    text = text || 'not detected second variable';
    console.log(from + ' ' + text);
}

checkWithOr('hello');

function altDefault (text) {
    if (text === undefined) {
        text = 'empty message'
    }
    console.log(text);
}

altDefault('hello');

//if trust info from learningJS, cause this statement is best practice for false value, which need evaluate that normally.
function showCount(count) {
    console.log(count ?? 'empty message');
}

showCount();