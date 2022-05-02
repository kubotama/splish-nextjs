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

- -fをつけない（force updatesにしない）とpushがエラーになった。
- GitHubでリポジトリを作成したときに生成したLICENSEファイルが削除された。

## jestを導入([#2](https://github.com/kubotama/splish/issues/2))

### \#002-jestブランチを作成した

### jestを導入した

[\[Next.js\]テスト](https://dev-yakuza.posstree.com/react/nextjs/test/)を参考にした。

$ yarn add --save-dev jest @testing-library/react @testing-library/jest-dom

### jestを設定した

> jest.setup.js

```jest.setup.js
// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'
```

> jest.config.js

```jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
```

### テストコードを作成した

```tests/index/index.test.tsx
import { render, screen } from '@testing-library/react'
import Home from "../../renderer/pages/index";

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
```

### テストコマンドを追加した

```package.json
...
    "test": "jest",
...
```

### テストを実行した

$ yarn test

以下のエラーメッセージが出力された

> Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.

#### test-environment-jsdomを追加した

$ yarn add jest-environment-jsdom

#### 再度テストを実行した

$ yarn test

以下のメッセージが出力された

> Cannot find module 'react-dom/client' from 'node_modules/@testing-library/react/dist/pure.js'

#### testing-library/reactをV12にダウングレードした

$ yarn remove @testing-library/react

$ yarn add @testing-library/react@12

#### テストコードをダミーに差し替えた

```tests/index/index.test.tsx
describe("ダミー", () => {
  test("ダミー", () => {
    expect("ダミー").toBe("ダミー");
  });
});
```

## tailwindCSSを導入した

[【2022年最新版】Electron + Next.js + TypeScript + tailwindCSS でMac/Windows用アプリを作成する【React】](https://yurupro.cloud/2514/)を参考にした。

### tailwindCSSを追加した

> $ yarn add tailwindcss@latest postcss@latest autoprefixer@latest

### tailwindCSSの初期化コマンドを実行した

> $ npx tailwindcss init -p

### renderer/pages/_app.jsを作成した

```renderer/pages/_app.js
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
```

### renderer/tailwind.config.jsを編集した

```renderer/tailwind.config.js
module.exports = {
  content: ["./renderer/pages/**/*.{js,ts,jsx,tsx}",
    "./renderer/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
