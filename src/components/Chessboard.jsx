import React, { useContext, useState } from 'react';

import { ChessPiece } from './ChessPiece';
import { ChessboardContext } from '../chessboard/context';
import { Colours } from '../chessboard/reducers';

export const ChessBoard = () => {
  const { board, actions } = useContext(ChessboardContext);
  const [movingCell, setMovingCell] = useState({});

  return (
    <div className="chessboard">
      {board.map(row => {
        return (
          <div className="chessboard__row" key={row}>
            {row.map(cell => {
              let cellClass = 'chessboard__cell' + ' ' + getColourMod(cell);
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
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

const getColourMod = cell => {
  return {
    [Colours.White]: 'chessboard--white',
    [Colours.Black]: 'chessboard--black',
  }[cell.colour];
};
