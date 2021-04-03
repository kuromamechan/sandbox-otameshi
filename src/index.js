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

// constで定義したオブジェクトはプロパティ変更が可能
// const val4 = {
//   name: "じゃけえ",
//   age: 28
// };
// console.log(val4);
// val4.gen = "men";
// val4.name = "jakee";
// val4.address = "大阪";

// console.log(val4);

// constで定義した配列はプロパティ変更が可能
// ＊＊＊＊
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5[1] = "ぞう";
// val5.push("あしか");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけえ";
// const age = 28;
// // 「渡井sの名前は、じゃけえです。年齢は、28歳です」

// // 従来の方法
// const message1 = "私の名前は"　+ name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str){
//   return str;
// }
// console.log(func1("funcです"));
const func1 = function (str) {
  return str;
};
console.log(func1("fund1です"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func2です"));
