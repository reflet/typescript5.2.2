// ---------------------------------------

/**
 * クラス
 */

class House {
    // publicメンバ変数
    public color: string;

    // privateメンバ変数
    private _rooms: number;

    // protectedメンバ変数
    protected address: string;

    // コンストラクタ
    constructor(color: string, rooms: number, address: string) {
        this.color = color;
        this._rooms = rooms;
        this.address = address;
    }

    // セッター
    set rooms(count: number) {
        this._rooms = (count < 0) ? 0: count;
    }

    // ゲッター
    get rooms(): number {
        return this._rooms;
    }

    // メソッド
    public displayColor(): void {
        console.log(`この家の色は、${this.color}です。`);
    }

    // メソッド (private)
    private countRooms(): number {
        return this._rooms;
    }

    // メソッド (protected)
    protected getAddress(): string {
        return this.address;
    }
}

// コンストラクタ
const whiteHouse = new House('白', 1, '住所');
console.log(whiteHouse, '\n');

// セッター・ゲッター
const redHouse = new House('白', 1, '住所');
redHouse.color = '赤';
redHouse.rooms = 2;
console.log(redHouse, redHouse.color, redHouse.rooms, '\n');

// メソッド
const greenHouse = new House('緑', 3, '住所');
greenHouse.displayColor();
//greenHouse._rooms = 3;          // ERROR: Property '_rooms' is private and only accessible within class 'House'
//greenHouse.countRooms();        // ERROR: Property 'countRooms' is private and only accessible within class 'House'
//greenHouse.address = '千葉県';  // ERROR: Property 'address' is protected and only accessible within class 'House' and its subclasses.
//greenHouse.getAddress();        // ERROR: Property 'getAddress' is protected and only accessible within class 'House' and its subclasses.
console.log(greenHouse, '\n');

// ---------------------------------------
