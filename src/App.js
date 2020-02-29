import React from "react";
import "./App.css";

import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

const MainApp = styled.div``;

const App = () => {
  return (
    <BrowserRouter>
      <MainApp>
        <Navbar />
      </MainApp>
    </BrowserRouter>
  );
};

export default App;
