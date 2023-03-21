for (let a = 1; a <= 45; a++) {
    if (a % 3 == 0 && a % 5 != 0) {
        document.write(a + 'fizz' + '<br/>')
        // alert('fizz');
    }
    else if (a % 5 == 0 && a % 3 != 0) {
        document.write(a + 'buzz' + "<br/>")
    }
    else if (a % 3 == 0 && a % 5 == 0) {
        // alert('Fizz Buzz');
        document.write(a + 'Fizz Buzz' + "<br/>")
    }
    else {
        document.write(a+'Nothing' + "<br/>")
    }
}