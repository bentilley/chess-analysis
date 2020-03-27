const Pieces = Object.freeze({
  Pawn: 'Pawn',
  Knight: 'Knight',
  Bishop: 'Bishop',
  Rook: 'Rook',
  Queen: 'Queen',
  King: 'King',
});

const Colours = Object.freeze({
  White: 'White',
  Black: 'Black',
});

const initialState = {
  perspective: Colours.White,
  board: [
    {
      row: 8,
      col: 1,
      rank: 'a',
      colour: Colours.White,
      piece: { id: 'bRa', type: Pieces.Rook, colour: Colours.Black },
    },
    {
      row: 8,
      col: 2,
      rank: 'b',
      colour: Colours.Black,
      piece: { id: 'bNb', type: Pieces.Knight, colour: Colours.Black },
    },
    {
      row: 8,
      col: 3,
      rank: 'c',
      colour: Colours.White,
      piece: { id: 'bBc', type: Pieces.Bishop, colour: Colours.Black },
    },
    {
      row: 8,
      col: 4,
      rank: 'd',
      colour: Colours.Black,
      piece: { id: 'bQd', type: Pieces.Queen, colour: Colours.Black },
    },
    {
      row: 8,
      col: 5,
      rank: 'e',
      colour: Colours.White,
      piece: { id: 'bKe', type: Pieces.King, colour: Colours.Black },
    },
    {
      row: 8,
      col: 6,
      rank: 'f',
      colour: Colours.Black,
      piece: { id: 'bBf', type: Pieces.Bishop, colour: Colours.Black },
    },
    {
      row: 8,
      col: 7,
      rank: 'g',
      colour: Colours.White,
      piece: { id: 'bNg', type: Pieces.Knight, colour: Colours.Black },
    },
    {
      row: 8,
      col: 8,
      rank: 'h',
      colour: Colours.Black,
      piece: { id: 'bRh', type: Pieces.Rook, colour: Colours.Black },
    },
    {
      row: 7,
      col: 1,
      rank: 'a',
      colour: Colours.Black,
      piece: { id: 'bpa', type: Pieces.Pawn, colour: Colours.Black },
    },
    {
      row: 7,
      col: 2,
      rank: 'b',
      colour: Colours.White,
      piece: { id: 'bpb', type: Pieces.Pawn, colour: Colours.Black },
    },
    {
      row: 7,
      col: 3,
      rank: 'c',
      colour: Colours.Black,
      piece: { id: 'bpc', type: Pieces.Pawn, colour: Colours.Black },
    },
    {
      row: 7,
      col: 4,
      rank: 'd',
      colour: Colours.White,
      piece: { id: 'bpd', type: Pieces.Pawn, colour: Colours.Black },
    },
    {
      row: 7,
      col: 5,
      rank: 'e',
      colour: Colours.Black,
      piece: { id: 'bpe', type: Pieces.Pawn, colour: Colours.Black },
    },
    {
      row: 7,
      col: 6,
      rank: 'f',
      colour: Colours.White,
      piece: { id: 'bpf', type: Pieces.Pawn, colour: Colours.Black },
    },
    {
      row: 7,
      col: 7,
      rank: 'g',
      colour: Colours.Black,
      piece: { id: 'bpg', type: Pieces.Pawn, colour: Colours.Black },
    },
    {
      row: 7,
      col: 8,
      rank: 'h',
      colour: Colours.White,
      piece: { id: 'bph', type: Pieces.Pawn, colour: Colours.Black },
    },
    {
      row: 6,
      col: 1,
      rank: 'a',
      colour: Colours.White,
      piece: null,
    },
    {
      row: 6,
      col: 2,
      rank: 'b',
      colour: Colours.Black,
      piece: null,
    },
    {
      row: 6,
      col: 3,
      rank: 'c',
      colour: Colours.White,
      piece: null,
    },
    {
      row: 6,
      col: 4,
      rank: 'd',
      colour: Colours.Black,
      piece: null,
    },
    {
      row: 6,
      col: 5,
      rank: 'e',
      colour: Colours.White,
      piece: null,
    },
    {
      row: 6,
      col: 6,
      rank: 'f',
      colour: Colours.Black,
      piece: null,
    },
    {
      row: 6,
      col: 7,
      rank: 'g',
      colour: Colours.White,
      piece: null,
    },
    {
      row: 6,
      col: 8,
      rank: 'h',
      colour: Colours.Black,
      piece: null,
    },
    {
      row: 5,
      col: 1,
      rank: 'a',
      colour: Colours.Black,
      piece: null,
    },
    {
      row: 5,
      col: 2,
      rank: 'b',
      colour: Colours.White,
      piece: null,
    },
    {
      row: 5,
      col: 3,
      rank: 'c',
      colour: Colours.Black,
      piece: null,
    },
    {
      row: 5,
      col: 4,
      rank: 'd',
      colour: Colours.White,
      piece: null,
    },
    {
      row: 5,
      col: 5,
      rank: 'e',
      colour: Colours.Black,
      piece: null,
    },
    {
      row: 5,
      col: 6,
      rank: 'f',
      colour: Colours.White,
      piece: null,
    },
    {
      row: 5,
      col: 7,
      rank: 'g',
      colour: Colours.Black,
      piece: null,
    },
    {
      row: 5,
      col: 8,
      rank: 'h',
      colour: Colours.White,
      piece: null,
    },
    {
      row: 4,
      col: 1,
      rank: 'a',
      colour: Colours.White,
      piece: null,
    },
    {
      row: 4,
      col: 2,
      rank: 'b',
      colour: Colours.Black,
      piece: null,
    },
    {
      row: 4,
      col: 3,
      rank: 'c',
      colour: Colours.White,
      piece: null,
    },
    {
      row: 4,
      col: 4,
      rank: 'd',
      colour: Colours.Black,
      piece: null,
    },
    {
      row: 4,
      col: 5,
      rank: 'e',
      colour: Colours.White,
      piece: null,
    },
    {
      row: 4,
      col: 6,
      rank: 'f',
      colour: Colours.Black,
      piece: null,
    },
    {
      row: 4,
      col: 7,
      rank: 'g',
      colour: Colours.White,
      piece: null,
    },
    {
      row: 4,
      col: 8,
      rank: 'h',
      colour: Colours.Black,
      piece: null,
    },
    {
      row: 3,
      col: 1,
      rank: 'a',
      colour: Colours.Black,
      piece: null,
    },
    {
      row: 3,
      col: 2,
      rank: 'b',
      colour: Colours.White,
      piece: null,
    },
    {
      row: 3,
      col: 3,
      rank: 'c',
      colour: Colours.Black,
      piece: null,
    },
    {
      row: 3,
      col: 4,
      rank: 'd',
      colour: Colours.White,
      piece: null,
    },
    {
      row: 3,
      col: 5,
      rank: 'e',
      colour: Colours.Black,
      piece: null,
    },
    {
      row: 3,
      col: 6,
      rank: 'f',
      colour: Colours.White,
      piece: null,
    },
    {
      row: 3,
      col: 7,
      rank: 'g',
      colour: Colours.Black,
      piece: null,
    },
    {
      row: 3,
      col: 8,
      rank: 'h',
      colour: Colours.White,
      piece: null,
    },
    {
      row: 2,
      col: 1,
      rank: 'a',
      colour: Colours.White,
      piece: { id: 'wpa', type: Pieces.Pawn, colour: Colours.White },
    },
    {
      row: 2,
      col: 2,
      rank: 'b',
      colour: Colours.Black,
      piece: { id: 'wpb', type: Pieces.Pawn, colour: Colours.White },
    },
    {
      row: 2,
      col: 3,
      rank: 'c',
      colour: Colours.White,
      piece: { id: 'wpc', type: Pieces.Pawn, colour: Colours.White },
    },
    {
      row: 2,
      col: 4,
      rank: 'd',
      colour: Colours.Black,
      piece: { id: 'wpd', type: Pieces.Pawn, colour: Colours.White },
    },
    {
      row: 2,
      col: 5,
      rank: 'e',
      colour: Colours.White,
      piece: { id: 'wpe', type: Pieces.Pawn, colour: Colours.White },
    },
    {
      row: 2,
      col: 6,
      rank: 'f',
      colour: Colours.Black,
      piece: { id: 'wpf', type: Pieces.Pawn, colour: Colours.White },
    },
    {
      row: 2,
      col: 7,
      rank: 'g',
      colour: Colours.White,
      piece: { id: 'wpg', type: Pieces.Pawn, colour: Colours.White },
    },
    {
      row: 2,
      col: 8,
      rank: 'h',
      colour: Colours.Black,
      piece: { id: 'wph', type: Pieces.Pawn, colour: Colours.White },
    },
    {
      row: 1,
      col: 1,
      rank: 'a',
      colour: Colours.Black,
      piece: { id: 'wRa', type: Pieces.Rook, colour: Colours.White },
    },
    {
      row: 1,
      col: 2,
      rank: 'b',
      colour: Colours.White,
      piece: { id: 'wNb', type: Pieces.Knight, colour: Colours.White },
    },
    {
      row: 1,
      col: 3,
      rank: 'c',
      colour: Colours.Black,
      piece: { id: 'wBc', type: Pieces.Bishop, colour: Colours.White },
    },
    {
      row: 1,
      col: 4,
      rank: 'd',
      colour: Colours.White,
      piece: { id: 'wQd', type: Pieces.Queen, colour: Colours.White },
    },
    {
      row: 1,
      col: 5,
      rank: 'e',
      colour: Colours.Black,
      piece: { id: 'wKe', type: Pieces.King, colour: Colours.White },
    },
    {
      row: 1,
      col: 6,
      rank: 'f',
      colour: Colours.White,
      piece: { id: 'wBf', type: Pieces.Bishop, colour: Colours.White },
    },
    {
      row: 1,
      col: 7,
      rank: 'g',
      colour: Colours.Black,
      piece: { id: 'wNg', type: Pieces.Knight, colour: Colours.White },
    },
    {
      row: 1,
      col: 8,
      rank: 'h',
      colour: Colours.White,
      piece: { id: 'wRh', type: Pieces.Rook, colour: Colours.White },
    },
  ],
};

const types = {
  MOVE_PIECE: 'MOVE_PIECE',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MOVE_PIECE:
      const { from, to } = action.payload;
      console.log(from, to);
      console.log(isLeagalMove(from, to));
      if (isLeagalMove(from, to)) return movePiece(state);
      else return state;
    default:
      return state;
  }
};

function isLeagalMove(from, to) {
  return from.piece.legalMoves.some(({ row, col }) => {
    return row === to.position.row && col === to.position.col;
  });
}

function movePiece(boardState) {
  return boardState;
}

export { initialState, types, reducer, Colours, Pieces };
