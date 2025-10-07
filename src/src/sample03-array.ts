// ---------------------------------------

/**
 * 配列
 * ※ 同じデータ型の値をまとめて扱う
 */

// 配列: number型
const kokugo: number[] = [75, 90, 80, 100, 65, 30, 78, 98, 35, 54];
console.log(kokugo, kokugo[0], kokugo[4], kokugo[9]);

// 配列: string型
const userNames: string[] = ["名無し", "名無し", "名無し"];
userNames[0] = "ビル";
userNames[1] = "スティーブン";
userNames[2] = "イーロン";
console.log(userNames);

// 配列の更新 & 追加
const myArray: number[] = [1, 2, 3];
myArray[0] = 5;    // 更新
myArray[3] = 8;    // 追加
myArray[5] = 10;   // 追加 (4を入れずに、5を入れてみる...)
console.log(myArray, myArray[4]); // 4は、undefinedになる...

// 配列の上書き
//const myArray2 = [1, 2, 3]; // constだと上書きできず、エラーになる!!
let myArray2 = [1, 2, 3];
myArray2 = [4, 5, 6];
console.log(myArray2);

// ---------------------------------------

/**
 * 配列操作
 */

// 最後に追加する
const userNames1: string[] = ["ビル", "スティーブン", "イーロン"];
userNames1.push("ヒロ");              // 1つ追加する
userNames1.push("リサ", "ウィル");    // まとめて追加する
console.log('userNames1', userNames1);

// 先頭に追加する
const userNames2: string[] = ["ビル", "スティーブン", "イーロン"];
userNames2.unshift("ヒロ");           // 1つ追加する
userNames2.unshift("リサ", "ウィル"); // まとめて追加する
console.log('userNames2', userNames2);

// 配列の一部を取り出す
// ※ 第1引数: 0から始まるインデックス番号
// ※ 第2引数: 先頭から何番目までかを指定する
//
// 第1引数は、0から始まるインデックス番号で、第2引数は、先頭から何番目（1からはじまる）なので、
// 間違いそう....
const userNames3: string[] = ["ビル", "スティーブン", "イーロン", "ヒロ", "リサ", "ウィル"];
console.log(
    'userNames3',
    userNames3.slice(3),
    userNames3.slice(1, 3),
    userNames3.slice(1, 2),
    userNames3.slice(1, 1)  // 2番目から、1番目までとなり、何も取得できないので空の配列になる!!
);

// ---------------------------------------

/**
 * 多次元配列
 */

// 2次元配列
const shoesBox2D: string[][] = [
    ["A", "B", "C"], ["D", "E", "F"]
];
console.log('shoesBox2D(1)', shoesBox2D);
console.log('shoesBox2D(2)', shoesBox2D[1]);
console.log('shoesBox2D(3)', shoesBox2D[1][0]);

shoesBox2D.push(["G", "H", "I"]);    // 配列を追加する
shoesBox2D.push(["J", "K"], ["L"]);  // 配列を複数追加する（配列の中身は３つでなくても良いみたい...）
console.log('shoesBox2D(4)', shoesBox2D);

// 3次元配列
const shoesBox3D: string[][][] = [
    [ ["A", "B", "C"], ["D", "E", "F"] ],
    [ ["G", "H", "I"], ["J", "K", "L"] ]
];
console.log('shoesBox3D(1)', shoesBox3D);
console.log('shoesBox3D(2)', shoesBox3D[1]);
console.log('shoesBox3D(3)', shoesBox3D[1][0]);
console.log('shoesBox3D(4)', shoesBox3D[1][0][0]);

// ---------------------------------------

/**
 * ジャグ配列
 * ※ 各配列に異なる要素数の配列を保持できる
 */
const months: number[][] = [
    // 01月
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    // 02月
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    // 03月
    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    // 04月
    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    // 05月
    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    // 06月
    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    // 07月
    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    // 08月
    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    // 09月
    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    // 10月
    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    // 11月
    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    // 12月
    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
];
console.log(months, months[0], months[0][1]);

// ---------------------------------------

/**
 * 連想配列
 */
const fruits: {[key: string]: string} = {
    "Apple": "リンゴ",
    "Banana": "バナナ",
    "Orange": "オレンジ"
};
console.log(fruits, fruits["Apple"], fruits["Banana"]);

fruits['Orange'] = 'ミカン';
console.log(fruits);

// ---------------------------------------

/**
 * 配列操作の応用
 *
 * ・① pushメソッド (配列の最後に要素を追加する）
 * ・② popメソッド （配列の最後の要素を削除して取り出す）
 * ・③ shiftメソッド （配列の最初の要素を削除して取り出す）
 * ・④ unshiftメソッド （配列の最初に１つ以上の要素を追加する）
 * ・⑤ spliceメソッド （配列の指定の位置から指定の件数の要素を削除して取り出す）
 * ・⑥ sliceメソッド （配列の指定の位置から指定の先頭からの要素までを配列で返す）
 * ・⑦ concatメソッド （２つ以上の配列を結合して、１つの配列を返す）
 * ・⑧ joinメソッド （配列のすべての要素を文字列として結合して返す）
 * ・⑨ reverseメソッド （配列の要素を逆順にする）
 * ・⑩ sortメソッド （配列の要素を昇順でソートする）
 * ・⑪ indexOfメソッド （指定の要素が最初に現れた位置のインデックスを返す）
 * ・⑫ includesメソッド （指定の要素が配列に含まれるかどうかを返す）
 * ・⑬ filterメソッド （配列の要素を指定の条件でフィルタリングし、配列で返す）
 * ・⑭ mapメソッド （配列の要素を変換し、配列で返す）
 * ・⑮ reduceメソッド （配列の要素を１つの値にまとめる）
 */

// ・① pushメソッド
//   ※ 配列の最後の要素を削除して、値を返します
const myArray3: number[] = [0, 1, 2, 3, 4];
myArray3.push(5);
console.log('pushメソッド', myArray3);

// ・② popメソッド
//   ※ 配列の最後の要素を削除して、値を返します
const myArray4: number[] = [0, 1, 2, 3, 4, 5];
const lastElement = myArray4.pop();
console.log('popメソッド', myArray4, `popで取り出した値は、「 ${lastElement} 」です`);

// ・③ shiftメソッド
//   ※ 配列の最初の要素を削除して、値を返します
const myArray5: number[] = [0, 1, 2, 3, 4, 5];
const firstElement = myArray5.shift();
console.log('shiftメソッド', myArray5, `shiftで取り出した値は、「 ${firstElement} 」です`);

// ・④ unshiftメソッド
//   ※ 列の最初に１つ以上の要素を追加する
const myArray6: number[] = [1, 2, 3, 4, 5];
myArray6.unshift(0);
console.log('unshiftメソッド', myArray6);

// ・⑤ spliceメソッド (削除)
//   ※ 指定の場所（インデックス番号）から指定の要素数を削除して、配列で返す
const myArray7: number[] = [0, 1, 2, 3, 4, 5];
const deletedElements = myArray7.splice(2, 3);
console.log('spliceメソッド(削除)', myArray6, deletedElements); // [2, 3, 4]

// ・⑤ spliceメソッド (追加)
//   ※ 指定の場所（インデックス番号）に要素を追加する
const myArray8: number[] = [0, 1, 2, 3, 4];
myArray8.splice(2, 0, 5);           // 「5」を3番目に挿入する
console.log('spliceメソッド(追加)', myArray8);              // [0, 1, 5, 2, 3, 4]

// ・⑥ sliceメソッド
//   ※ 配列の指定の位置から指定の先頭からの要素までを配列で返す
const myArray9: number[] = [0, 1, 2, 3, 4, 5];
const newArray = myArray9.slice(2, 5);
console.log('sliceメソッド', myArray9, newArray);   // [2, 3, 4]

// ・⑦ concatメソッド
//   ※ ２つ以上の配列を結合して、１つの配列を返す
const myArray10: number[] = [0, 1];
const myArray11: number[] = [2, 3];
const myArray12: number[] = [4, 5];
const newArray2 = myArray10.concat(myArray11, myArray12);
console.log('concatメソッド', newArray2);     // [0, 1, 2, 3, 4, 5]

// ・⑧ joinメソッド
//   ※ 配列のすべての要素を文字列として結合して返す
const myArray13: string[] = ['H', 'E', 'L', 'L', 'O'];
const myArray13Str = myArray13.join(',');
console.log('joinメソッド', myArray13Str);

// ・⑨ reverseメソッド
//   ※ 配列の要素を逆順にする
const myArray14: string[] = ['H', 'E', 'L', 'L', 'O'];
myArray14.reverse();
console.log('reverseメソッド', myArray14);

// ・⑩ sortメソッド
//   ※ 配列の要素を昇順でソートする
const myArray15: number[] = [5, 1, 0, 3, 2, 4];
myArray15.sort();
console.log('sortメソッド', myArray15);

// ・⑪ indexOfメソッド
//   ※ 指定の要素が最初に現れた位置のインデックスを返す
const myArray16: string[] = ['H', 'E', 'L', 'L', 'O'];
const index = myArray16.indexOf('L');
console.log('indexOfメソッド', myArray16, index);

// ・⑫ includesメソッド
//   ※ 指定の要素が配列に含まれるかどうかを返す
const myArray17: string[] = ['H', 'E', 'L', 'L', 'O'];
const judge = myArray17.includes('L');
console.log('includesメソッド', myArray17, judge);

// ・⑬ filterメソッド
//   ※ 配列の要素を指定の条件でフィルタリングし、配列で返す
const myArray18: number[] = [0, 1, 2, 3, 4, 5];
const newArray3 = myArray18.filter(number => number % 2 === 0);
console.log('filterメソッド', myArray18, newArray3);

// ・⑭ mapメソッド
//   ※ 配列の要素を変換し、配列で返す
const myArray19: number[] = [0, 1, 2, 3, 4, 5];
const newArray4 = myArray19.map(number => number * 2);
console.log('mapメソッド', myArray9, newArray4);

// ・⑮ reduceメソッド
//   ※ 配列の要素を１つの値にまとめる
const myArray20: number[] = [0, 1, 2, 3, 4, 5];
const newArray5 = myArray20.reduce<number>((total, square) => total + square, 0);
console.log('reduceメソッド', myArray20, newArray5);

// ・⑮ reduceメソッド(filter,map)
//   ※ 配列の要素をフィルタリング(filter) & 加工(map)する
const myArray21: number[] = [0, 1, 2, 3, 4, 5];
const newArray6 = myArray21.reduce<number[]>((prev, current) => {
    if (current % 2 === 0) {
        prev.push(current * 2);
    }
    return prev
}, []);
console.log('reduceメソッド(filter,map)', myArray21, newArray6);

// ---------------------------------------





