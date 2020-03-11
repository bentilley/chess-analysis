import React from 'react';

import { Pieces, Colours } from '../chessboard/reducers';
import Pawn from '../svg/pawn.svg';
import Knight from '../svg/knight.svg';
import Bishop from '../svg/bishop.svg';
import Rook from '../svg/rook.svg';
import Queen from '../svg/queen.svg';
import King from '../svg/king.svg';

const PieceMap = {
  [Pieces.Pawn]: Pawn,
  [Pieces.Knight]: Knight,
  [Pieces.Bishop]: Bishop,
  [Pieces.Rook]: Rook,
  [Pieces.Queen]: Queen,
  [Pieces.King]: King,
};

export const ChessPiece = ({ piece }) => {
  if (!piece) return null;

  let PieceSvg;
  try {
    PieceSvg = PieceMap[piece.type];
  } catch (e) {
    throw new TypeError(`Invalid piece data: ${piece.type}, ${piece.colour}`);
  }
  return (
    <div
      className={
        'chessboard__piece' +
        getColourMod(piece.colour) +
        getSizeMod(piece.type)
      }
    >
      <PieceSvg />
    </div>
  );
};

const getColourMod = colour => {
  return {
    [Colours.White]: ' chessboard__piece--white',
    [Colours.Black]: ' chessboard__piece--black',
  }[colour];
};

const getSizeMod = type => {
  return {
    [Pieces.Pawn]: ' chessboard__piece--smaller',
    [Pieces.Knight]: '',
    [Pieces.Bishop]: '',
    [Pieces.Rook]: ' chessboard__piece--smaller',
    [Pieces.Queen]: '',
    [Pieces.King]: '',
  }[type];
};
