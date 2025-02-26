# 概要
ライブコーディング用のリポジトリ。  
テーマはStorybookを用いたモダンなフロントエンド開発。

## デプロイしたページ
- app: https://live-coding-20250226-app.pages.dev/
- storybook: https://live-coding-20250226-storybook.pages.dev/

## 使用するライブラリ・ツールなど
| ライブラリ/ツール | バージョン | 説明 |
|-----------------|-----------|------|
| React           | 19     | UIコンポーネントを構築するためのJavaScriptライブラリ |
| TypeScript      | 5.x       | 静的型付けを追加したJavaScriptのスーパーセット |
| Storybook       | 8       | UIコンポーネントの開発・テスト・ドキュメント化ツール |
| Vite            | 6       | フロントエンド開発環境 |

## アジェンダ
- Reactの説明
  - 素のHTML, CSS, JSで実装する場合と比較してみる
    - DOMの直接操作が大変
    - コードの再利用性が低い
    - 状態管理が大変
    - etc...
- コンポーネント開発とStorybook
- Storybookでできること
  - カタログ
  - テスト
    - integration test (インテグレーションテスト)
    - a11y test (アクセシビリティテスト)
      - a11y -> accessibility
        - i18n -> internationalization (国際化)
        - k8s -> kubernetes (コンテナオーケストレーションツール)
        - e18e -> ecosystem performance (エコシステムのパフォーマンス向上)
      - スクリーンリーダー
    - Visual Regression Test (ヴィジュアルリグレッションテスト)

## 参考
- [Storybook document](https://storybook.js.org/docs)
- [SmartHR Storybook](https://story.smarthr-ui.dev/)