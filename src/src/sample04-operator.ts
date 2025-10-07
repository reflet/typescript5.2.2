// ---------------------------------------

/**
 * 算術演算子
 * ※ 加算 (+)
 * ※ 減算 (-)
 * ※ 乗算 (*)
 * ※ 除算 (/)
 * ※ 除算/余り (%)
 * ※ べき乗 (**)
 */

// 加算 (+)
const x42 = 5 + 3;
console.log(`加算: 5 + 3 = ${x42}`);

// 減算 (-)
const y42 = 5 - 3;
console.log(`減算: 5 - 3 = ${y42}`);

// 乗算 (*)
const z42 = 5 * 3;
console.log(`乗算: 5 × 3 = ${z42}`);

// 除算 (/)
const a42 = 6 / 2;
console.log(`除算: 6 ÷ 2 = ${a42}`);

// 除算/余り (%)
const b42 = Math.floor(7 / 2);
const c42 = 7 % 2;
console.log(`除算/余り: 7 ÷ 2 = ${b42} (余り: ${c42})`);

// べき乗 (**)
const d42 = 2 ** 3;
console.log(`べき乗: 2 ** 3 = ${d42}`);

/**
 * 単項演算子
 * ※ 正の値に変換する (+)
 * ※ 負の値に変換する (-)
 * ※ １増加させる (++)
 * ※ １減算させる (--)
 */

// 正の値に変換する (+)
const e42 = +3;
console.log(e42);

// 負の値に変換する (-)
const f42 = -3;
console.log(f42);

// １増加させる (++)
let g42 = 3;
console.log(++g42);

// １減算させる (--)
let h42 = 3;
console.log(--h42);

/**
 * インクリメント
 * ※ 前置インクリメント (++X)
 * ※ 後置インクリメント (X++)
 */

// 前置インクリメント (++X)
let i42 = 5;
console.log(++i42, i42);

// 後置インクリメント (X++)
let j42 = 5;
console.log(j42++, j42);

/**
 * デクリメント
 * ※ 前置デクリメント (--X)
 * ※ 後置デクリメント (X--)
 */

// 前置デクリメント (--X)
let k42 = 5;
console.log(--k42, k42);

// 後置デクリメント (X--)
let l42 = 5;
console.log(l42--, l42);

/**
 * 算術演算子の優先順位
 * ※ 高  べき乗(**)
 * ※ ↓  乗算(*), 除算(/, %)
 * ※ 低  加算(+), 減算(-)
 */
let m42: number = 0;
m42 = 1 + 2 * 3 ** 2 - 8 / 4;
console.log(m42);  // 17

// ()をつけると優先順位が変わります
let n42: number = 1 + (2 * 3) ** 2 - 8 / 4;
console.log(n42);  // 35

// ---------------------------------------

/**
 * 単純代入演算子
 */
let a43 = 10;
a43 = a43 + 5;
console.log(a43);  // 15

/**
 * 複合代入演算子
 * ※ 加算 (+=)
 * ※ 減算 (-=)
 * ※ 乗算 (*=)
 * ※ 除算 (/=)
 * ※ 余り (%=)
 * ※ べき乗 (**=)
 */

// 加算 (+=)
let b43 = 5;
b43 += 3;
console.log(b43); // 8

// 減算 (-=)
let c43 = 5;
c43 -= 3;
console.log(c43); // 2

// 乗算 (*=)
let d43 = 5;
d43 *= 3;
console.log(d43); // 15

// 除算 (/=)
let e43 = 10;
e43 /= 5;
console.log(e43); // 2

// 余り (%=)
let f43 = 11;
f43 %= 5;
console.log(f43);  // 1

// べき乗 (**=)
let g43 = 2;
g43 **= 3;
console.log(g43);  // 8

// ---------------------------------------

/**
 * ビットシフト演算子
 *
 * 10進数の13は、2進数で「1101」となる
 * ※ 13÷2 = 6 余り = 1
 * ※ 6÷2  = 3 余り = 0
 * ※ 3÷2  = 1 余り = 1
 * ※ 1÷2  = 0 余り = 1  (下から上へ...)
 *
 * 2進数の「1101」は、10進数で、13となる
 * ※ 2**3 × 1 = 8
 * ※ 2**2 × 1 = 4
 * ※ 2**1 × 0 = 0
 * ※ 2**0 × 1 = 1  (8 + 4 + 0 + 1 = 13)
 */

// 「1101」を1ビット左にシフトすると「11010」となり、10進数だと26になる
const a44 = 13 << 1;
console.log(a44);  // 26

// 「1101」を1ビット右にシフトすると「0110」となり、10進数だと6になる
const b44 = 13 >> 1;
console.log(b44);  // 6

// ---------------------------------------

/**
 * 比較演算子
 *
 * === (厳密等価演算子)
 * !== (厳密不等価演算子)
 * < (小なり演算子)
 * > (大なり演算子)
 * <= (小なりイコール演算子)
 * >= (大なりイコール演算子)
 */

// === (厳密等価演算子)
// !== (厳密不等価演算子)
const a45 = 3;
console.log(`xが${a45}のとき`);
console.log(`x === 3は、${a45 === 3}`);
console.log(`x !== 3は、${a45 !== 3}`);

// < (小なり演算子)
// > (大なり演算子)
// <= (小なりイコール演算子)
// >= (大なりイコール演算子)
console.log(`x < 3は、${a45 < 3}`);
console.log(`x > 3は、${a45 > 3}`);
console.log(`x <= 3は、${a45 <= 3}`);
console.log(`x >= 3は、${a45 >= 3}`);

// 型チェック
// ※ error: This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.
//const b45: number = 1;
//const c45: string = '1';
//console.log(b45 == c45);      // true
// console.log(b45 === c45);  // false

// ---------------------------------------

/**
 * 論理演算子
 *
 * && (論理積演算子)
 * || (論理和演算子)
 * ! (論理否定演算子)
 *
 * <優先順位>
 * 高  !
 * ↓  &&
 * 低  ||
 */

// && (論理積演算子)
console.log(false && false); // false
console.log(false && true);  // false
console.log(true && false);  // false
console.log(true && true);   // true

// || (論理和演算子)
console.log(false || false); // false
console.log(false || true);  // true
console.log(true || false);  // true
console.log(true || true);   // true

// ! (論理否定演算子)
console.log(!false);         // true
console.log(!true);          // false

// 使用例
let a46 = 25;      // age
let b46 = 'male';  // gender
let c46 = true;    // flag

// ===== && 演算子 =====
console.log(a46 >= 25 && b46 === 'male'); // true

// ===== || 演算子 =====
b46 = 'female'
console.log(a46 >= 25 || b46 === 'male'); // true

// ===== ! 演算子 =====
console.log(!c46); // false
c46 = !c46;
console.log(!c46); // true

// 優先順位
const e46 = false;
const f46 = false;
const g46 = false;
console.log(!e46 && f46 || g46); // false
console.log(!(e46 && f46) || g46); // true

// ---------------------------------------

/**
 * 文字列結合演算子
 */

// 文字同士を結合する
const a47: string = 'Hello';
const b47: string = 'World';
const c47: string = a47 + ' ' + b47;
console.log(c47);   // Hello World

// 文字と数字を結合する
const d47: number = 5;
const e47: string = 'リンゴ5個の値段は、' + (d47 * 100) + ' 円です。';
console.log(e47);   // Hello World

// ---------------------------------------
