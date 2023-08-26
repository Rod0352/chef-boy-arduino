import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardContainer } from "./Display/Cards";
import { SearchBar } from "./Display/Search";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#282c34",
      }}
    >
      <SearchBar />
      <CardContainer />
    </div>
  );
}

export default App;
