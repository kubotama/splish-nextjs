# 作業手順の記録

## 開発環境の整備

## node.js を最新の LTS に更新する

$ sudo n lts

### node.js のバージョンを確認する

$ node -v

## Electron プロジェクトの作成

{【2022年最新版】Electron + Next.js + TypeScript + tailwindCSSでMac/Windows用アプリを作成する【React】}[https://yurupro.cloud/2514/]を参考にした。

### yarnコマンドを実行する

$ yarn create next-app --example with-electron-typescript splish

### package.jsonにnameとversionを追記 productNameを変更

```json

  "name": "splish",
  "version": "0.0.1",
  ...
  "productName": "splish",

```

### Electronを起動

$ yarn run dev

next-env.d.tsとtsconfig.jsonが生成された

### TypeScriptの型チェックを厳格に設定した

```tsconfig.json

"strict": true,

```

## GitHubにアップロード

### GitHubにリポジトリを作成した

### GitHubをリモートリポジトリとして登録した

> $ git remote add origin git@github.com:kubotama/splish.git

### リモートリポジトリからpullした

> $ git pull origin main

### リモートリポジトリにpushした

> $ git push origin main -f

-fをつけない（force updatesにしない）とpushがエラーになった。
GitHubでリポジトリを作成したときに生成したLICENSEファイルが削除された。
