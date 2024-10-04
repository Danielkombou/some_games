// (n+1)C(r) = (n)C(r - 1) + (n)C(r)
function Pascal(numRows) {
  // Checking greatest digit
  let Numbers = [5, 3, 9, 1, 7, 2];
  let A = Numbers[0];
  for (let i = 1; i < Numbers.length; i++) {
    if (Numbers[i] > A) {
      A = Numbers[i];
    }
  }
  // console.log(A, "Is the greatest figure");

  // Generating random figures
  let size = 10;
  let num = [];
  for (let i = 0; i < size; i++) {
    num.push(Math.floor(Math.random() * 100));
  }
  // console.log(num);

  num.sort((a, b) => a - b);
  // console.log(num);
  let Greatest = num[num.length - 1];
  // console.log("The Greates:", Greatest);

  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];
  let MyArray = [];

  for (let row = 1; row <= numRows; row++) {
    let arr = [];
    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1) {
        arr.push(1);
      } else {
        arr.push(MyArray[row - 2][col - 1] + MyArray[row - 2][col]);
      }
    }
    MyArray.push(arr);
  }

  return MyArray;
}

function PrintPascal(MyArray) {
  let arr1 = MyArray.length;
  for (let i = 0; i < arr1; i++) {
    let arrSpace = [];
    for (let space = arr1; space >= i; space--) {
      arrSpace.push(" ");
    }
    console.log(arrSpace.join(""), MyArray[i].join(" "));
  }
}

const numRows = 5;
const pascalTriangle = Pascal(numRows);
PrintPascal(pascalTriangle);

export default Pascal;
