// ---------------------------------------

/**
 * 抽象クラス
 */

abstract class Figure {
    abstract Draw(): void;
}

class Triangle extends Figure {
    Draw(): void {
        console.log('三角形を描画します。');
    }
}

console.log('＜抽象クラス＞');
const tri = new Triangle();
tri.Draw();
console.log('');

// ---------------------------------------

/**
 * インターフェース
 */

interface Sound {
    name: string;
    play(): void;
    stop(): void;
}

class MusicPlayer implements Sound {
    name: string = 'music';

    play(): void {
        console.log(`${this.name}を再生しました。`);
    }

    stop(): void {
        console.log(`${this.name}を停止しました。`);
    }
}

console.log('＜インターフェース＞');
const mp = new MusicPlayer();
mp.play();
mp.stop();
console.log('');

// ---------------------------------------

/**
 * インターフェースの継承
 */

interface Video extends Sound {
    videoName: string;
    playVideo(): void;
    stopVideo(): void;
}

class VideoPlayer extends MusicPlayer implements Video {
    videoName: string = 'video';

    playVideo(): void {
        console.log(`${this.videoName}を再生しました。`);
    }

    stopVideo(): void {
        console.log(`${this.videoName}を停止しました。`);
    }
}

console.log('＜インターフェースの継承＞');
const vp = new VideoPlayer();
vp.play();
vp.stop();
vp.playVideo();
vp.stopVideo();
console.log('');

// ---------------------------------------
