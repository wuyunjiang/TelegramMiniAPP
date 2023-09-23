import { TonConnectUIProvider } from '@tonconnect/ui-react';
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TonConnectUIProvider manifestUrl="https://koala.cryptoweb3.tools/tonconnect-manifest.json">
      <App />
    </TonConnectUIProvider>
  </BrowserRouter>
);
