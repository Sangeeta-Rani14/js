let year = Number(prompt('Enter a year'));

if (year % 400 == 0 && year % 100 != 0 || year % 4 == 0) {
    // console.log('leap Year');
    // document.write('leap year');
    alert("it's a leap year");

}
else {
    // console.log('Not leap Year');
    document.write('Not leap year');
}


