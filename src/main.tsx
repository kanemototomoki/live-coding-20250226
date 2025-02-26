import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Top from "./routes/top";
import Buttons from "./routes/buttons";
import Form from "./routes/form";
import Counter from "./routes/counter";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/buttons" element={<Buttons />} />
        <Route path="/form" element={<Form />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
