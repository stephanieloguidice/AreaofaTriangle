var a = 5;
var b = 7;
var c = 6;

var perimeter = (a + b + c) / 2;
var area = Math.sqrt(perimeter * ((perimeter - a) * (perimeter - b) * (perimeter - c)));
console.log(area);