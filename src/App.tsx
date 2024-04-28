import * as React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./layout/Header";
import { MainPage } from "./layout/MainPage";
import { Details } from "./layout/Details";

export const App = (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace={true}/>} />
	  <Route path="/home" element={<MainPage />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </BrowserRouter>
);
