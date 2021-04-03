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
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("fund1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "じゃけえ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は、${age}です。`;
// console.log(message2);

// const myProfile = ["じゃけえ", 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳ですね。`;

// console.log(message3);

// const [nana, aag] = myProfile;
// const message4 = `名前は${nana}です。年齢は${aag}歳ですね。`;

// console.log(message4);

/**
 *デフォルト値　引数など
 */

// const sayHello = (name = "ゲスト") => {
//   return console.log(`こんにちは！${name}さん！`);
// };
// sayHello("じゃけえ");

/**
 * スプレット構文
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (arr2,arr3) => {
//   return console.log(arr2 + arr3);
// };
// // console.log(sumFunc(3,4));
// // sumFunc(arr1[0],arr1[1]);

// sumFunc(...arr1);

// まとめる
// const arr4 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr5] = arr4;
// console.log(num1, num2, ...arr5);
// console.log(num2);
// console.log(arr5);

// 配列のコピー結合

const arr6 = [10, 20];
const arr7 = [30, 40];

// const arr8 = [...arr6];
// console.log(arr6);
// console.log(arr8);

// スプレットを使わずコピーした場合
// 連結した箱の値を変えると元の箱も置き換わってしまう。
// const arr8 = arr6;
// console.log(arr8);
// arr8[0] = 200;
// console.log(arr6);

// コピーではなく　「...」構文を使う
const arr9 = [...arr6, ...arr7];
console.log(arr9);
arr9[1] = 400;
console.log(arr9);
console.log(arr6);
/**
 *
 */
