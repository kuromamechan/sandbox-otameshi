/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //  var変数は再宣言可能
// var val1 = "変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き可能";
// console.log(val2);

// let val2 = "letは再宣言できない";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// // val3 = "const変数は上書きも再宣言もできない";
// // console.log(val3);

// const val3 = "constは再宣言できない";
// console.log(val3);

const val4 = {
  name: "じゃけえ",
  age: 28
};
console.log(val4);
val4.gen = "men";
val4.name = "jakee";
val4.address = "大阪";

console.log(val4);
