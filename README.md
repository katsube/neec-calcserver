# 計算機サーバ
足し算を行うexpressのサンプルコードです。

## セットアップ
GitHubからclone後、必要なモジュールを`npm install`で取得します。

```shellsession
$ git clone https://github.com/katsube/neec-calcserver.git
$ cd neec-calcserver
$ npm install
```

## 動かす
### サーバを起動する
`serve.js`をNode.jsで実行します。
```shellsession
$ node serve.js
listening at http://localhost:3000
```

### 実行する
Webブラウザなどで`http://localhost:3000/add?a=10&b=20`といった形でアクセスします。

以下のようなJSON形式のデータが返却されれば成功です。
```json
{
  status: true,
  formula: "10+20",
  result: 30
}
```

### 終了方法
Ctrl+cで強制終了します。

## ライセンス
MIT License  
© Copyright 2020 M.Katsube. All rights reserved.