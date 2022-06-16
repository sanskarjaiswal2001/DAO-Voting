import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import {ConnectButton} from "web3uikit";
const App = () => {
  return (
    <>
      <div className="header">
        <div style = {{font : "30px Google Sans", color : "white"}}>DAO Voting System</div>
        <ConnectButton/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
    </>
  );
};

export default App;
