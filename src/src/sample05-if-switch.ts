// ---------------------------------------

/**
 * if文
 */

// if文
const a52: number = 5;
const b52: number = 100;
if (a52 < b52) {
    console.log('a52は、b52より小さいです。')
}
console.log('条件判断が終了しました。');

// if-else文
const c52: number = 16;
if (c52 >= 18) {
    console.log('成人です。');
} else {
    console.log('未成年です。');
}

// else-if文
const e52: number = -10;
if (e52 > 0) {
    console.log('e52は、正の値です。');
} else if (e52 < 0) {
    console.log('e52は、負の値です。');
} else {
    console.log('e52は、0です。');
}

// ---------------------------------------

/**
 * if文と論理演算子
 */

const a53: number = 5;
const b53: number = 10;

// if文と&&演算子
if (a53 > 0 && b53 > 0) {
    console.log('a53とb53はどちらも正の値です。');
}

// if文と||演算子
if (a53 <= 5 || b53 <= 5) {
    console.log('a53またはb53は、5以下です。')
}

// if文と===演算子
if ( ! (a53 === b53)) {
    console.log('a53とb53は、等しくありません。')
}

// ---------------------------------------

/**
 * 三項演算子
 */

const a54: number = 5;
let b54: string = '';

// if文で書く例です
if (a54 > 10) {
    b54 = 'a54は、10より大きいです。';
} else {
    b54 = 'a54は、10以下です。';
}
console.log(b54);

// 三項演算子の例です
b54 = (a54 > 10) ? 'a54は、10より大きいです。' : 'a54は、10以下です。';
console.log(b54);

// ---------------------------------------

/**
 * switch文
 */

// 月
const a55: number = 2;

// 日数
let b55: number;

// 判定
switch (a55) {
    // 1月・3月・5月・7月・8月・10月・12月
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        b55 = 31;
        break;
    // 2月
    case 2:
        b55 = 28;
        break;
    // 4月・6月・9月・11月
    case 4:
    case 6:
    case 9:
    case 11:
        b55 = 30;
        break;
    // その他
    default:
        b55 = 0;
        break;
}
console.log(`${a55}月は、${b55}日あります。`);

// ---------------------------------------



