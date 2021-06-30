import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";
import { ProductsContextProvider } from "./store/products-context";

ReactDOM.render(
  <AuthContextProvider>
    <ProductsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProductsContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
