import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./layout/Header";
import { MainPage } from "./layout/MainPage";
import { Details } from "./layout/Details";

export const App = (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </BrowserRouter>
);
