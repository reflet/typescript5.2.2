// ---------------------------------------

/**
 * 例外処理
 */

const numX: number = 5;
const numY: number = 1;

if (numY === 0) {
    //Error: ゼロで割り算はできません。
    //     at file:///usr/src/app/js/sample11-try-catch.js:9:11
    //     at ModuleJob.run (node:internal/modules/esm/module_job:194:25)
    throw new Error('ゼロで割り算はできません。');
}

const ans = numX / numY;
console.log(`${numX} ÷ ${numY} = ${ans}\n`);

// ---------------------------------------

/**
 * try-catch-finally
 */

try {
    const numX1 = 10;
    const numY1 = 0;
    if (numY1 === 0) {
        throw new Error('ゼロでは割り算はできません。');
    }

    const ans1 = numX1 / numY1;
    console.log(`${numX1} ÷ ${numY1} = ${ans1}`);
} catch (e) {
    if (e instanceof SyntaxError) {
        console.log('構文エラーが発生しました。');
    } else if (e instanceof RangeError) {
        console.log('範囲外の操作が行われました。');
    } else {
        console.log('エラーが発生しました。');
    }
    console.log(e);
} finally {
    console.log('プログラムを終了します。\n');
}


// ---------------------------------------

/**
 * カスタム例外クラス
 */

class MyException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'MyException';
    }
}

try {
    throw new MyException('カスタム例外を発生させました。');
} catch (e) {
    console.log(e);
}

// ---------------------------------------
