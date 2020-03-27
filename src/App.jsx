import React from "react";
import { hot } from "react-hot-loader";
import "./App.scss";
import { Options } from "./components/Options";
import ChessBoard from "./components/Chessboard";
import { Centred } from "./components/Centred";
import { ChessboardProvider } from "./chessboard/context";

const App = () => {
  return (
    <ChessboardProvider>
      <div className="App">
        <h1>Chess Analysis</h1>
        <Centred>
          <Options />
          <ChessBoard />
        </Centred>
      </div>
    </ChessboardProvider>
  );
};

export default hot(module)(App);
