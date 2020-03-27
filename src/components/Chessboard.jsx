import React, { useContext, useState } from "react";

import { ChessPiece } from "./ChessPiece";
import { ChessboardContext } from "../chessboard/context";
import { Colours } from "../chessboard/reducers";

const ChessBoard = () => {
  const { board, actions } = useContext(ChessboardContext);
  const [movingCell, setMovingCell] = useState({});

  const { whiteAttacking, blackAttacking } = board.getAllCellAttackedCounts();

  return (
    <div className="chessboard">
      {board.map(row => {
        return (
          <div className="chessboard__row" key={row}>
            {row.map(cell => {
              const cellClass = `chessboard__cell ${getColourMod(cell)}`;
              return (
                <div
                  className={cellClass}
                  key={cell}
                  draggable
                  onDrag={event => event.preventDefault()}
                  onDragStart={event => {
                    if (!cell.hasPiece) return event.preventDefault();
                    setMovingCell(cell);
                  }}
                  onDragOver={event => event.preventDefault()}
                  onDrop={event => {
                    event.preventDefault();
                    const from = movingCell;
                    const to = cell;
                    actions.movePiece(from, to);
                    setMovingCell({});
                  }}
                >
                  {cell.piece ? <ChessPiece piece={cell.piece} /> : null}
                  <div
                    className={`chessboard__cell_status ${getAttackedColour(
                      Colours.White
                    )(whiteAttacking, cell)}`}
                  />
                  <div
                    className={`chessboard__cell_status ${getAttackedColour(
                      Colours.Black
                    )(blackAttacking, cell)}`}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const getColourMod = cell =>
  ({
    [Colours.White]: "chessboard--white",
    [Colours.Black]: "chessboard--black",
  }[cell.colour]);

const getAttackedColour = colour => (cellAttackedCounts, cell) => {
  const col = {
    [Colours.White]: "white",
    [Colours.Black]: "black",
  }[colour];
  return {
    undefined: `chessboard--${col}-attacked-0`,
    1: `chessboard--${col}-attacked-1`,
    2: `chessboard--${col}-attacked-2`,
    3: `chessboard--${col}-attacked-3`,
    4: `chessboard--${col}-attacked-4`,
    5: `chessboard--${col}-attacked-5`,
    6: `chessboard--${col}-attacked-6`,
    7: `chessboard--${col}-attacked-7`,
    8: `chessboard--${col}-attacked-8`,
  }[cellAttackedCounts[cell.pos]];
};

export default ChessBoard;
