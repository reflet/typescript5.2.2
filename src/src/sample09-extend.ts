// ---------------------------------------

/**
 * 継承 (extend)
 */

class BaseHouse {
    private rooms: number = 1;        // 部屋数

    // コンストラクタ
    constructor(rooms: number) {
        this.rooms = rooms;
    }

    // 部屋数
    protected getRooms(): number {
        return this.rooms;
    }

    // メソッド
    public activateSecurity(isOn: boolean) {
        if (isOn) {
            console.log('セキュティを作動しました。');
        } else {
            console.log('セキュティを停止しました。');
        }
    }
}

class GarageHouse extends BaseHouse {
    // 車庫の有無を表すプロパティ (true: 車庫あり / false: 車庫なし)
    public hasGarage: boolean = false;

    // コンストラクタ
    constructor(rooms: number, hasGarage: boolean = false) {
        super(rooms);
        this.hasGarage = hasGarage;
    }

    // 車庫の開閉をするメソッド
    // ※ true: 車庫を開ける / false: 車庫を閉める
    public openGarage(isOpen: boolean): void {
        if (this.hasGarage) {
            if (isOpen) {
                console.log('車庫を開けました。\n');
            } else {
                console.log('車庫を閉じました。\n');
            }
        } else {
            console.log('車庫はありません。\n');
        }
    }

    // ガレージを持っているかどうか？
    public getHasGarage(): boolean {
        return this.hasGarage;
    }

    /**
     * オーバーライド
     */
    public activateSecurity(isOn: boolean): void {
        if (isOn) {
            console.log('セキュティを作動しました。');
            console.log('※ ガレージのセキュリティも作動します\n');
        } else {
            console.log('セキュティを停止しました。');
            console.log('ガレージのセキュリティも停止します\n');
        }
    }

    /**
     * オーバーロード
     */
    public overLoad(isOn: boolean): void;
    public overLoad(isOn: boolean, hasGarage: boolean): void;
    public overLoad(isOn: boolean, hasGarage?: boolean): void {
        if (isOn) {
            console.log('セキュティを作動しました。');
            if (hasGarage) {
                console.log('※ ガレージのセキュリティも作動します');
            }
        } else {
            console.log('セキュティを停止しました。');
            if (hasGarage) {
                console.log('※ ガレージのセキュリティも停止します');
            }
        }
        console.log('');
    }

    /**
     * 親のprotectedメソッドを使う
     **/
    public getHouseDetails(): void {
        console.log(`部屋数は、${this.getRooms()}です。`);
        if (this.hasGarage) {
            console.log('※ 車庫があります');
        }
        console.log('');
    }
}

const gh = new GarageHouse(3, true);
gh.hasGarage = true;            // 車庫を「あり」に設定する
gh.openGarage(true);            // 車庫を開ける
gh.openGarage(false);           // 車庫を閉める
gh.activateSecurity(true);      // セキュリティを作動させる
gh.overLoad(true);              // オーバーロードのメソッドを実行する
gh.overLoad(true, true);        // オーバーロードのメソッドを実行する
gh.getHouseDetails();

// ---------------------------------------

/**
 * ジェネリックメソッド
 */
class MyUtility {
    // 通常メソッド（number型）
    printNumberArray(arr: number[]): void {
        for (const val of arr) {
            console.log(val);
        }
        console.log('');
    }

    // 通常メソッド（string型）
    printStringArray(arr: string[]): void {
        for (const val of arr) {
            console.log(val);
        }
        console.log('');
    }

    // ジェネリックメソッド
    printArray<T>(arr: T[]): void {
        for (const val of arr) {
            console.log(val);
        }
        console.log('');
    }
}

const util = new MyUtility();

// 通常メソッドを使ってみる
console.log('通常メソッド(number)');
util.printNumberArray([1,2,3,4,5]);

console.log('通常メソッド(string)');
util.printStringArray(['steve','bill','mark']);

// ジェネリックメソッドを使ってみる
console.log('ジェネリックメソッド(number)');
util.printArray<number>([1,2,3,4,5]);

console.log('ジェネリックメソッド(string)');
util.printArray<string>(['steve','bill','mark']);

// ---------------------------------------

/**
 * ジェネリッククラス
 */
class MyData<T> {
    private vals: T[] = [];

    addValue(item: T) {
        this.vals.push(item);
    }

    getValue(index: number): T {
        return this.vals[index];
    }
}

const dataNum = new MyData<number>();
dataNum.addValue(3);
dataNum.addValue(5);
console.log(dataNum.getValue(1));  // 5

const dataStr = new MyData<string>();
dataStr.addValue('apple');
dataStr.addValue('orange');
console.log(dataStr.getValue(1));  // 5

// ---------------------------------------
