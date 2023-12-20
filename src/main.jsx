import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

document.body.setAttribute("data-bs-theme", "dark");

import { Cities } from "./pages/Cities";
import { App } from "./pages/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sehirler/*" element={<Cities />} />
      <Route path="*" element={<>404</>} />
    </Routes>
  </BrowserRouter>
);
