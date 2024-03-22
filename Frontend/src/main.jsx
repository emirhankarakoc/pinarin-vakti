import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Uygulama from "./pages/Uygulama.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:sehirIsmi" element={<Uygulama />} />
        <Route
          path="*"
          element={
            <>
              <h1>404</h1>
              <p>BOYLE BIR SAYFA BULUNMAMAKTADIR.</p>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
