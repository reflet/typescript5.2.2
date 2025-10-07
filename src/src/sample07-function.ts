// ---------------------------------------

/**
 * 関数
 */

// 引数あり
function getTriArea(base: number, height: number): void {
    let area: number;             // 面積

    // 三角形の面積を求める
    area = base * height / 2;

    // 面積を表示する
    console.log(`面積は、${area}です。\n`);
}
const base: number = 4;     // 底辺
const height: number = 3;   // 高さ
getTriArea(base, height);

// 引数＋デフォルト値あり
function greet(name: string, greeting: string = 'Hello'): void {
    console.log(`${greeting}, ${name}.\n`);
}
greet('HIRO');
greet('Taro', 'こんにちは');

// 可変長引数
function sum(...nums: number[]): void {
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    console.log(`合計は、${total}です。\n`);
}
sum(1,2,3,4);       // 合計は、10です。
sum(5, 10);         // 合計は、15です。

// returnあり
function getTriArea2(base: number, height: number): number {
    let area: number = 0;

    // 三角形の面積を求める
    area = base * height / 2;

    return area;
}
const a71 = getTriArea2(4, 3);
console.log(`面積は、${a71}です。\n`);

// 関数式（匿名関数,無名関数)
const b71 = function (n: number): number {
    return n + 1;
}
console.log(`関数式(匿名関数,無名関数): ${b71(2)}.\n`);   // 3

// コールバック関数
function applyOperation (n: number, action: Function): void {
    console.log(`コールバック関数: ${action(n)}.\n`);
}
const increment = function (n: number) {
    return n + 1;
}
const decrement = function (n: number) {
    return n - 1;
}
applyOperation(5, increment);
applyOperation(5, decrement);

// アロー関数
const c71 = (n: number) => {
    return n + 1;
}
const d71 = (n: number) => n - 1;
console.log(`アロー関数: increment = ${c71(2)}\n`);
console.log(`アロー関数: decrement = ${d71(2)}\n`);

// ジェネリクス<T>
// ※ T: データ型
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}
const e71: number[] = [1,2,3,4,5];
console.log(`ジェネリクス(number[]): ${getFirstElement(e71)}\n`);  // number型
const f71: string[] = ['リンゴ', 'ミカン', 'バナナ'];
console.log(`ジェネリクス(string[]): ${getFirstElement(f71)}\n`);  // string型


/**
 * スコープ
 * ※ グローバルスコープ
 * ※ 関数スコープ
 * ※ ブロックスコープ
 */
// ブロックスコープ (if文)
if (true) {
    let g71: number = 0;
    g71 = 3 + 5;
    console.log(`if文の中ではアクセスできる。(g71: ${g71})`);
}
// ↓ エラーになる(Cannot find name 'g71')
//console.log(`if文の外ではアクセスできない。(g71: ${g71})\n`);
console.log('ブロックスコープ (if文) - 完了!!\n');

// ブロックスコープ (for文)
for (let h71 = 0; h71 < 10; ++h71) {
    let i71: number = 0;
    i71 = h71 + 10;
    console.log(`${h71}: ${i71}`);
}
// ↓ エラーになる(Cannot find name 'g71')
//console.log(`for文の外ではアクセスできない。(h71: ${h71}`);
//console.log(`for文の外ではアクセスできない。(i71: ${i71})`);
console.log('ブロックスコープ (for文) - 完了!!\n');

// 関数スコープ
function sampleFunction(): void {
    const x = 10;
    console.log(x);
}
sampleFunction();
// ↓ エラーになる(Cannot find name 'x')
//console.log(x);
console.log('関数スコープ - 完了!!\n');

// ブロックスコープと関数スコープ
function sampleFunction2(): void {
    const x = 1;
    if (x === 1) {
        const y = 2;
        console.log(x);     // 1
        console.log(y);     // 2
    }
    for (let i = 0; i < 1; ++i) {
        const x = 3;
        const z = 4;
        console.log(x);     // 3
        // ↓ エラーになる(ReferenceError: y is not defined)
        //console.log(y);
        console.log(z);     // 4
    }
}
sampleFunction2();
console.log('ブロックスコープと関数スコープ - 完了!!.\n');

// グローバルスコープ
function sampleFunction3(): void {
    const x = 1;
    if (x === 1) {
        const y = 2;
        console.log(y);
        console.log(`if文内: ${globalVariable}`);
    }
    for (let i = 0; i < 1; ++i) {
        const z = 3;
        console.log(z);
        console.log(`for文内: ${globalVariable}`);
    }
    console.log(`関数内: ${globalVariable}`);
}
const globalVariable: number = 10;
console.log(`グローバルスコープ: ${globalVariable}`);
sampleFunction3();
console.log('グローバルスコープ完了!!.\n');

// ---------------------------------------
