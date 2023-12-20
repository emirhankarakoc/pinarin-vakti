import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import { App } from "./App";
import StartPage from "./components/StartPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);
