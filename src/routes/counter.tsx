import { useState } from "react";
import { NavLink } from "react-router";

export default function Counter() {
  // カウントのステート管理
  const [count, setCount] = useState(0);

  // カウントを増やす関数
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // カウントを減らす関数
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
        <h1 className="text-2xl font-bold mb-6">Reactカウンターデモ</h1>

        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            type="button"
            onClick={decrement}
            className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-blue-600 transition-colors"
          >
            -
          </button>

          <span className="text-3xl font-bold min-w-[60px]">{count}</span>

          <button
            type="button"
            onClick={increment}
            className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-blue-600 transition-colors"
          >
            +
          </button>
        </div>

        <p className="text-gray-600 mb-6">ReactとuseStateフックで作られたカウンター</p>

        <div className="mt-8">
          <NavLink to="/" className="text-blue-500 hover:underline">
            トップページに戻る
          </NavLink>
        </div>
      </div>
    </div>
  );
}
