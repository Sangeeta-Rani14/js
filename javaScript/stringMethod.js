let a = 'sangeeta '
let b = "rani";
//concat 2 string
let c = a.concat(b);
console.log(c);
document.write(c)
//length
document.write(c.length);
//uppercase
document.write(a.toUpperCase());
//lowercase
document.write(c.toLowerCase())
//remove white space
document.write(c.trim())
//replace
var sen = 'Ram loves eating apple, Ram is a good boy';
document.write(sen);
// globally
var newsen = sen.replace(/Ram/g, 'san')

document.write(newsen);
//incase sensetive
var newsen2 = sen.replace(/ram/i, 'san')
//slicing
document.write(newsen);
console.log(c.slice(0, 9))
//substring
console.log(c.substring(0, 8))
//specific word from index
console.log(c.charAt(8))