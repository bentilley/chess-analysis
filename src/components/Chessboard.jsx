import React, { useContext } from 'react';

import { ChessPiece } from './ChessPiece';
import { ChessboardContext } from '../chessboard/context';
import { Colours } from '../chessboard/reducers';

export const ChessBoard = () => {
  const { state, actions } = useContext(ChessboardContext);
  console.log(state.board);
  return (
    <div className="chessboard">
      {state.board.map((row, index) => {
        return (
          <div className="chessboard__row" key={index + 1}>
            {row.map(cell => {
              let cellClass = 'chessboard__cell' + ' ' + getColourMod(cell);
              return (
                <div className={cellClass} key={cell.rank + cell.row}>
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

const getColourMod = ({ colour }) => {
  return {
    [Colours.White]: 'chessboard--white',
    [Colours.Black]: 'chessboard--black',
  }[colour];
};
