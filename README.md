# typescript 5.2.2
TypeScriptのバージョン5.2.2の学習用に作ります。

## 前提条件
- MacOS / Windows環境
- Gitコマンド
- Docker for Desktop

## ミドルウェア
- Node 18.16.x
- Typescript 5.2.2

## ファイル構成
```
┗ src
  ┣ js
  ┃  ┗ index.js      ← index.tsがトランスパイルされたファイル
  ┃
  ┣ node_modules      ← npm installでインストールされるライブラリ
  ┃
  ┣ src
  ┃  ┗ index.ts      ← Typescriptのコード
  ┃
  ┣ package.json
  ┣ package-lock.json
  ┗ tsconfig.json     ← Typescriptの設定ファイル
```
## 準備
必要となるコードをリポジトリからclonseして配置します。

```bash
$ mkdir -p ~/workspace/typescript5.2.2/ && cd ~/workspace/typescript5.2.2
$ git clone https://github.com/reflet/typescript5.2.2.git .
```

## docker構築
dockerイメージを作成し、バージョン確認してみる。

```bash
# dockerイメージ作成
$ docker compose build

$ docker compose run --rm node npx tsc --version
Version 5.2.2
```

## サーバ起動
dockerコンテナを起動します。
```bash
$ docker compose up -d
```

## トランスパイル
Typescriptのコードをjsファイルに変換します。
```bash
$ docker compose exec node npx tsc
```

## プログラム実行
jsファイルを実行してみる。
```bash
$ docker compose exec node node ./js/index.js
Hello, Typescript.
```

## プロジェクト作成
新規にプロジェクトを作成する場合は、下記コマンドで、各設定ファイルを作成ください。

＜各設定ファイル＞
```
┗ src
  ┣ package.json
  ┣ package-lock.json
  ┗ tsconfig.json
```

下記コマンドを実行することで、上記３つのファイルが作成されます。
### ① 初期化(npm)
`src/package.json` を作成します
```
$ docker compose run --rm node npm init -y
```
※ `"type": "module"`を追加する

### ② ライブラリをインストールする
`src/package-lock.json` と `src/node_modules` が作成されます。
```
$ docker compose run --rm node npm install -D typescript@5.2.2 @types/node
```

### ③ 初期化 (TypeScript)
TypeScriptの`src/tsconfig.json`ファイルを作成します。
```
$ docker compose run --rm node npx tsc --init
```
※ `"target": "es2020"`に変更する  
※ `"module": "ESNext"`に変更する  
※ `"moduleResolution": "node"`に変更する  
※ ` "outDir": "./js"`に変更する  
※ `"include": ["./src/**/*.ts"]`を追加する  

以上
