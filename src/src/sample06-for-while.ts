// ---------------------------------------

/**
 * 繰り返し処理
 */

// for文
const a62: number[] = [80, 65, 90, 75, 85];
let b62: number = 0;
for (let i = 0; i < 5; ++i) {
    b62 += a62[i];
}
const avg = b62 / 5;
console.log(`5人の国語の合計点数は、${b62}点で、平均点数は、${avg}点です。\n`);

// while文
let c62 = 1;
const d62 = 10;
while (c62 <= d62) {
    console.log(`現在${c62}ページを読んでいます。`);
    ++c62;
}
console.log('全ページを読み終わりました。\n');

// do-while文
let e62 = 1;
const f62 = 10;
do {
    console.log(`${e62}/${f62} ページ読みました。`);
    ++e62;
} while (e62 <= f62);
console.log('完了!!\n');

// for-of
const g62: number[] = [80, 65, 90, 75, 85];
let h62: number = 0;
for (const i62 of g62) {
    h62 += i62;
}
const j62 = h62 / 5;
console.log(`5人の国語の合計点数は、${h62}点で、平均点数は、${j62}点です。\n`);

// 繰り返し処理の継続と中断(break)
for (let k62 = 0; k62 < 5; ++k62) {
    if (k62 === 2) {
        break;
    }
    console.log(k62);
}
console.log('break確認完了!\n');

// 繰り返し処理の継続と中断(continue)
for (let k62 = 0; k62 < 5; ++k62) {
    if (k62 === 2) {
        continue;
    }
    console.log(k62);
}
console.log('continue確認完了!\n');

// 多重ループ
const l62: number[][] = [[1,2,3,4], [5,6,7,8], [9,10,11,12]];
for (let m62 = 0; m62 <= 2; ++m62) {
    for (let n62 = 0; n62 <= 3; ++n62) {
        console.log(l62[m62][n62]);
    }
}
console.log('多重ループ完了!\n');

// ---------------------------------------
