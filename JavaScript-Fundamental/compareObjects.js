// 1. Write a JavaScript program to compare two objects to determine
//  if the first contains equivalent property values to the second one.

function compareObjects(obj1, obj2) {
  for (let key in obj1) {
    if (obj2.hasOwnProperty(key)) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    } else {
      return false;
    }
  }
  for (let key in obj2) {
    if (!obj1.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

// Ví dụ sử dụng
const obja = { a: 1, b: 2, c: 3 };
const objb = { a: 1, b: 2, c: 3 };
const objc = { a: 2, b: 1, c: 3 };

console.log(compareObjects(obja, objb)); // Kết quả: true
console.log(compareObjects(obja, objc)); // Kết quả: true
