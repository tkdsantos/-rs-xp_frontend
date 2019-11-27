import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "../header";
import Routes from "../../routes";
// import { Container } from './styles';

export default function home() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </>
  );
}
