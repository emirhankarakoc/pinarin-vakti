import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";

import { App } from "./App";
import StartPage from "./components/StartPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/:sehirIsmi" element={<App />} />
      <Route path="/" element={<StartPage />} />
    </Routes>
  </BrowserRouter>
);
