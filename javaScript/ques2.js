let a = Number(prompt('Enter a number'));

if (a % 3 == 0&& a%5!=0) {
    document.write('fizz' + "<br/>")
    // alert('fizz');
}
else if (a % 5 == 0 && a % 3 != 0) {
    document.write('buzz' + "<br/>")
}
else if (a % 3 == 0 && a % 5 == 0) {
    // alert('Fizz Buzz');
    document.write('Fizz Buzz'+'<br/>')
}
else {
    document.write('Nothing')
}