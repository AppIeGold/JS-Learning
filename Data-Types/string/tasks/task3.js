(function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1 ) + '...';
    } else return str;
})('Вот, что мне хотелось бы сказать на эту тему:', 20);