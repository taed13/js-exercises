// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
// Click me to see the solution

function areaTriangle(side1, side2, side3) {
  let halfPerimeter = (side1 + side2 + side3) / 2;
  let area = Math.sqrt(
    halfPerimeter *
      (halfPerimeter - side1) *
      (halfPerimeter - side2) *
      (halfPerimeter - side3)
  );
  console.log(area.toFixed(2));
}

areaTriangle(5, 6, 7);
