import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Component from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "./ProductsPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import UserProductsPage from "./UserProductsPage";

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/ProductsPage" element={<ProductsPage />}></Route>
        <Route path="/LoginPage" element={<LoginPage />}></Route>
        <Route path="/UserProductsPage" element={<UserProductsPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
