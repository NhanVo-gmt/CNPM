import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import {BasicTable} from "./components/Table"
import NavBar from "./components/NavBar";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BasicTable/>
    </div>
  );
}

export default App;
