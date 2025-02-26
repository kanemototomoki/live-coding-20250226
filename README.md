# Test Storybook VRT

このプロジェクトは、StorybookとChromaticを使用したVisual Regression Testing（VRT）の実行可能性を検証するためのテストプロジェクトです。

## 🚀 開発環境のセットアップ

```bash
# 依存パッケージのインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# Storybookの起動
pnpm storybook
```

## 📝 コンポーネントの開発

1. `src/components`ディレクトリに新しいコンポーネントを作成
2. コンポーネントと同じディレクトリに`*.stories.tsx`ファイルを作成
3. Storybookで動作確認

## 🎨 Storybookの使用方法

Storybookは以下のURLで確認できます：
```bash
http://localhost:6006
```

## 👀 VRTの実行方法

### 初回セットアップ

1. [Chromatic](https://www.chromatic.com/)でアカウントを作成
2. プロジェクトを作成し、project-tokenを取得
3. 以下のコマンドでChromaticにデプロイ：

```bash
pnpx chromatic --project-token=<your-project-token>
```

### 通常のVRT実行

```bash
# Chromaticでのテスト実行
pnpm chromatic
```

## 📱 対応ビューポート

- モバイル: 375x667
- デスクトップ: 1280x800

## 🔍 判定基準

- ピクセル差分の許容範囲: 0.1%未満
- アニメーション要素は固定状態でテスト
- フォントのレンダリングの微小な違いは許容

## 🛠️ 使用技術

- React + TypeScript
- Vite
- TailwindCSS
- Storybook
- Chromatic (VRT)
- pnpm (パッケージマネージャー)
