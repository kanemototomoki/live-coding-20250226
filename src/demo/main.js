// DOMが完全に読み込まれてから実行
document.addEventListener("DOMContentLoaded", () => {
  // 要素の取得
  const countElement = document.getElementById("count");
  const incrementButton = document.getElementById("increment");
  const decrementButton = document.getElementById("decrement");

  // カウンターの初期値
  let count = 0;

  // カウンターの値を更新する関数
  function updateCount() {
    countElement.textContent = count;
  }

  // インクリメントボタンのクリックイベント
  incrementButton.addEventListener("click", () => {
    count++;
    updateCount();
  });

  // デクリメントボタンのクリックイベント
  decrementButton.addEventListener("click", () => {
    count--;
    updateCount();
  });

  // 初期表示の設定
  updateCount();
});
