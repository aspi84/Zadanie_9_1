function getTriangleArea(a, h) {
  var triangleArea = a * h / 2; //spacje pomiędzy znakami
    //enter po zdefiniowaniu i zadeklarowaniu zmiennych
    if ((a <= 0) || (h <= 0)) {
      console.log('Nieprawidłowe dane');
      return;
    } //klamra na równi z ifem
  return triangleArea;
} //klamra na równi z function

console.log(getTriangleArea(10, 6) );

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(6, 3);
var triangle3Area = getTriangleArea(8, 4);

