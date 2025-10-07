// ---------------------------------------

// 変数 age の宣言
let age:number = 0;
age = 35;
console.log(age);

// 定数 pi の宣言
const pai:number = 3.14
console.log(pai);

// 変数名に使える文字列（$, _）
const $tax:number = 10;
const _msg:string = 'Hello World';
console.log($tax, _msg);

// ---------------------------------------

/**
 * データ型 (number)
 * ※ 扱える範囲： -(2^53 - 1) から 2^53 - 1
 * ※ 扱える範囲： -9007199254740991 〜 9007199254740991 (9007兆1992億5474万991)
 */

// 整数や少数を扱うデータ型
const x1: number = 3;
const x2: number = 0.14;
console.log(x1 + x2);

// n進数
// ※ 2進数や3進数など、10進数以外も扱える
const binX: number = 0b1010;  // 2進数の10
const octX: number = 0o012;   // 8進数の10
const decX: number = 10;      // 10進数の10
const hexX: number = 0x0a;    // 16進数の10
console.log(binX, octX, decX, hexX);

// 桁区切り文字の利用
// ※ 可読性を上げるために、区切り文字として「_(アンダースコア)」が使える...
const x3: number = 10000000;    // 1千万
const x4: number = 10_000_000;  // 1千万
console.log(x3, x4);

// ---------------------------------------

/**
 * データ型 (bigint)
 * ※ 扱える範囲： number型より大きい整数を扱える
 * ※ 少数は扱えない
 */
const bignum1: bigint = 10n;
const bignum2: bigint = 9007199254740992n;
console.log(bignum1, bignum2);

// ---------------------------------------

/**
 * データ型 (string)
 */
const msg1: string = "Hello \"HIRO\".";
const msg2: string = 'Hello \'HIRO\'.';
const msg3: string = `Hello '${'HIRO'}'.`;
console.log(msg1, msg2, msg3);

// `(バッククォーテーション)
const calc: string = `1 + 2 = ${1 + 2};`;
console.log(calc);

const user: string = "HIRO";
const msg: string = `Hello ${user}さん.`;
console.log(msg);

// ---------------------------------------

/**
 * データ型 (boolean)
 */
const isYes: boolean = true;
const isNo: boolean = false;
console.log(isYes, isNo);

// ---------------------------------------

/**
 * データ型 (null)
 * ※ 何もないことを表すデータ型
 */
const x5: null = null;
console.log(x5);

// ---------------------------------------

/**
 * データ型 (undefined)
 * ※ 未定義のことを表すデータ型 (宣言はOK, 代入がない場合にこの型になる)
 */
//let x;
let y: undefined = undefined;
//let z: number;
console.log(y);

// ---------------------------------------

/**
 * データ型 (symbol)
 * ※ プログラムの中で「その値が唯一ひとつしか存在しない」ということを表すデータ型
 * ※ JavaScriptの過去資産の互換性を維持するために生まれたデータ型
 * ※ 使用頻度は「低い」
 */
const x6: symbol = Symbol("data");
const x7: symbol = Symbol("data");
console.log(x6 === x6, x6 === x7);

// ---------------------------------------

/**
 * 型推論
 * ※ データからデータ型を推測して決定する方法
 */
//const num = 7;
//console.log(num, typeof(num));

//const msg = "Hello";
//console.log(msg, typeof(msg));

console.log('型を定義しないとエラーになるのでコメントアウトする');

// ---------------------------------------

/**
 * 列挙型
 * ※ 同じデータ型のリストをグループにして、ひとまとまりで扱うデータ型
 */
// 数値型 enum
enum Weekday {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}
const w: Weekday = Weekday.Thursday;
console.log(w, Weekday.Thursday, Weekday[4], Weekday[7]);

// 数値型 enum
enum Weekday01 {
    Sunday    = 1,
    Monday    = 2,
    Tuesday   = 3,
    Wednesday = 4,
    Thursday  = 5,
    Friday    = 6,
    Saturday  = 7
}
const w1: Weekday01 = Weekday01.Thursday;
console.log(w1, Weekday01.Thursday, Weekday01[5], Weekday01[0]);

// 文字列型 enum
// ※ 文字列型enumでは逆引きはできな¥い...
enum Weekday02 {
    Sunday    = '0',
    Monday    = '1',
    Tuesday   = '2',
    Wednesday = '3',
    Thursday  = '4',
    Friday    = '5',
    Saturday  = '6'
}
const w2: Weekday02 = Weekday02.Thursday;

// 逆引きできるように独自定義が必要っぽい...
function getkeyName(value: string) {
    if (value === Weekday02.Sunday) {
        return 'Sunday';
    } else if (value === Weekday02.Monday) {
        return 'Monday';
    } else if (value === Weekday02.Tuesday) {
        return 'Tuesday';
    } else if (value === Weekday02.Wednesday) {
        return 'Wednesday';
    } else if (value === Weekday02.Thursday) {
        return 'Thursday';
    } else if (value === Weekday02.Friday) {
        return 'Friday';
    } else if (value === Weekday02.Saturday) {
        return 'Saturday';
    }
    return undefined;
}

// console.log(w2, Weekday02.Thursday, Weekday02['0']);  // ← 逆引きできない...
console.log(w2, Weekday02.Thursday, getkeyName('4'), getkeyName('7'));

// ---------------------------------------

/**
 * タプル型
 * ※ 違うデータ型の値をまとめて扱う
 */
const userData: [
    string,     // 名前
    number,     // 年齢
    number,     // 身長
    number      // 体重
] = ['Hero', 35, 175.2, 65.3];
console.log(userData, userData[0], userData[1], userData[2], userData[3]);

// ---------------------------------------
