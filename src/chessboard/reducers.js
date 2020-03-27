const Pieces = Object.freeze({
  Pawn: "Pawn",
  Knight: "Knight",
  Bishop: "Bishop",
  Rook: "Rook",
  Queen: "Queen",
  King: "King",
});

const Colours = Object.freeze({
  White: "White",
  Black: "Black",
});

const initialState = {
  perspective: Colours.White,
  board: {
    "(1,8)": {
      row: 8,
      col: 1,
      rank: "a",
      colour: Colours.White,
      piece: { id: "bRa", type: Pieces.Rook, colour: Colours.Black },
    },
    "(2,8)": {
      row: 8,
      col: 2,
      rank: "b",
      colour: Colours.Black,
      piece: { id: "bNb", type: Pieces.Knight, colour: Colours.Black },
    },
    "(3,8)": {
      row: 8,
      col: 3,
      rank: "c",
      colour: Colours.White,
      piece: { id: "bBc", type: Pieces.Bishop, colour: Colours.Black },
    },
    "(4,8)": {
      row: 8,
      col: 4,
      rank: "d",
      colour: Colours.Black,
      piece: { id: "bQd", type: Pieces.Queen, colour: Colours.Black },
    },
    "(5,8)": {
      row: 8,
      col: 5,
      rank: "e",
      colour: Colours.White,
      piece: { id: "bKe", type: Pieces.King, colour: Colours.Black },
    },
    "(6,8)": {
      row: 8,
      col: 6,
      rank: "f",
      colour: Colours.Black,
      piece: { id: "bBf", type: Pieces.Bishop, colour: Colours.Black },
    },
    "(7,8)": {
      row: 8,
      col: 7,
      rank: "g",
      colour: Colours.White,
      piece: { id: "bNg", type: Pieces.Knight, colour: Colours.Black },
    },
    "(8,8)": {
      row: 8,
      col: 8,
      rank: "h",
      colour: Colours.Black,
      piece: { id: "bRh", type: Pieces.Rook, colour: Colours.Black },
    },
    "(1,7)": {
      row: 7,
      col: 1,
      rank: "a",
      colour: Colours.Black,
      piece: { id: "bpa", type: Pieces.Pawn, colour: Colours.Black },
    },
    "(2,7)": {
      row: 7,
      col: 2,
      rank: "b",
      colour: Colours.White,
      piece: { id: "bpb", type: Pieces.Pawn, colour: Colours.Black },
    },
    "(3,7)": {
      row: 7,
      col: 3,
      rank: "c",
      colour: Colours.Black,
      piece: { id: "bpc", type: Pieces.Pawn, colour: Colours.Black },
    },
    "(4,7)": {
      row: 7,
      col: 4,
      rank: "d",
      colour: Colours.White,
      piece: { id: "bpd", type: Pieces.Pawn, colour: Colours.Black },
    },
    "(5,7)": {
      row: 7,
      col: 5,
      rank: "e",
      colour: Colours.Black,
      piece: { id: "bpe", type: Pieces.Pawn, colour: Colours.Black },
    },
    "(6,7)": {
      row: 7,
      col: 6,
      rank: "f",
      colour: Colours.White,
      piece: { id: "bpf", type: Pieces.Pawn, colour: Colours.Black },
    },
    "(7,7)": {
      row: 7,
      col: 7,
      rank: "g",
      colour: Colours.Black,
      piece: { id: "bpg", type: Pieces.Pawn, colour: Colours.Black },
    },
    "(8,7)": {
      row: 7,
      col: 8,
      rank: "h",
      colour: Colours.White,
      piece: { id: "bph", type: Pieces.Pawn, colour: Colours.Black },
    },
    "(1,6)": {
      row: 6,
      col: 1,
      rank: "a",
      colour: Colours.White,
      piece: null,
    },
    "(2,6)": {
      row: 6,
      col: 2,
      rank: "b",
      colour: Colours.Black,
      piece: null,
    },
    "(3,6)": {
      row: 6,
      col: 3,
      rank: "c",
      colour: Colours.White,
      piece: null,
    },
    "(4,6)": {
      row: 6,
      col: 4,
      rank: "d",
      colour: Colours.Black,
      piece: null,
    },
    "(5,6)": {
      row: 6,
      col: 5,
      rank: "e",
      colour: Colours.White,
      piece: null,
    },
    "(6,6)": {
      row: 6,
      col: 6,
      rank: "f",
      colour: Colours.Black,
      piece: null,
    },
    "(7,6)": {
      row: 6,
      col: 7,
      rank: "g",
      colour: Colours.White,
      piece: null,
    },
    "(8,6)": {
      row: 6,
      col: 8,
      rank: "h",
      colour: Colours.Black,
      piece: null,
    },
    "(1,5)": {
      row: 5,
      col: 1,
      rank: "a",
      colour: Colours.Black,
      piece: null,
    },
    "(2,5)": {
      row: 5,
      col: 2,
      rank: "b",
      colour: Colours.White,
      piece: null,
    },
    "(3,5)": {
      row: 5,
      col: 3,
      rank: "c",
      colour: Colours.Black,
      piece: null,
    },
    "(4,5)": {
      row: 5,
      col: 4,
      rank: "d",
      colour: Colours.White,
      piece: null,
    },
    "(5,5)": {
      row: 5,
      col: 5,
      rank: "e",
      colour: Colours.Black,
      piece: null,
    },
    "(6,5)": {
      row: 5,
      col: 6,
      rank: "f",
      colour: Colours.White,
      piece: null,
    },
    "(7,5)": {
      row: 5,
      col: 7,
      rank: "g",
      colour: Colours.Black,
      piece: null,
    },
    "(8,5)": {
      row: 5,
      col: 8,
      rank: "h",
      colour: Colours.White,
      piece: null,
    },
    "(1,4)": {
      row: 4,
      col: 1,
      rank: "a",
      colour: Colours.White,
      piece: null,
    },
    "(2,4)": {
      row: 4,
      col: 2,
      rank: "b",
      colour: Colours.Black,
      piece: null,
    },
    "(3,4)": {
      row: 4,
      col: 3,
      rank: "c",
      colour: Colours.White,
      piece: null,
    },
    "(4,4)": {
      row: 4,
      col: 4,
      rank: "d",
      colour: Colours.Black,
      piece: null,
    },
    "(5,4)": {
      row: 4,
      col: 5,
      rank: "e",
      colour: Colours.White,
      piece: null,
    },
    "(6,4)": {
      row: 4,
      col: 6,
      rank: "f",
      colour: Colours.Black,
      piece: null,
    },
    "(7,4)": {
      row: 4,
      col: 7,
      rank: "g",
      colour: Colours.White,
      piece: null,
    },
    "(8,4)": {
      row: 4,
      col: 8,
      rank: "h",
      colour: Colours.Black,
      piece: null,
    },
    "(1,3)": {
      row: 3,
      col: 1,
      rank: "a",
      colour: Colours.Black,
      piece: null,
    },
    "(2,3)": {
      row: 3,
      col: 2,
      rank: "b",
      colour: Colours.White,
      piece: null,
    },
    "(3,3)": {
      row: 3,
      col: 3,
      rank: "c",
      colour: Colours.Black,
      piece: null,
    },
    "(4,3)": {
      row: 3,
      col: 4,
      rank: "d",
      colour: Colours.White,
      piece: null,
    },
    "(5,3)": {
      row: 3,
      col: 5,
      rank: "e",
      colour: Colours.Black,
      piece: null,
    },
    "(6,3)": {
      row: 3,
      col: 6,
      rank: "f",
      colour: Colours.White,
      piece: null,
    },
    "(7,3)": {
      row: 3,
      col: 7,
      rank: "g",
      colour: Colours.Black,
      piece: null,
    },
    "(8,3)": {
      row: 3,
      col: 8,
      rank: "h",
      colour: Colours.White,
      piece: null,
    },
    "(1,2)": {
      row: 2,
      col: 1,
      rank: "a",
      colour: Colours.White,
      piece: { id: "wpa", type: Pieces.Pawn, colour: Colours.White },
    },
    "(2,2)": {
      row: 2,
      col: 2,
      rank: "b",
      colour: Colours.Black,
      piece: { id: "wpb", type: Pieces.Pawn, colour: Colours.White },
    },
    "(3,2)": {
      row: 2,
      col: 3,
      rank: "c",
      colour: Colours.White,
      piece: { id: "wpc", type: Pieces.Pawn, colour: Colours.White },
    },
    "(4,2)": {
      row: 2,
      col: 4,
      rank: "d",
      colour: Colours.Black,
      piece: { id: "wpd", type: Pieces.Pawn, colour: Colours.White },
    },
    "(5,2)": {
      row: 2,
      col: 5,
      rank: "e",
      colour: Colours.White,
      piece: { id: "wpe", type: Pieces.Pawn, colour: Colours.White },
    },
    "(6,2)": {
      row: 2,
      col: 6,
      rank: "f",
      colour: Colours.Black,
      piece: { id: "wpf", type: Pieces.Pawn, colour: Colours.White },
    },
    "(7,2)": {
      row: 2,
      col: 7,
      rank: "g",
      colour: Colours.White,
      piece: { id: "wpg", type: Pieces.Pawn, colour: Colours.White },
    },
    "(8,2)": {
      row: 2,
      col: 8,
      rank: "h",
      colour: Colours.Black,
      piece: { id: "wph", type: Pieces.Pawn, colour: Colours.White },
    },
    "(1,1)": {
      row: 1,
      col: 1,
      rank: "a",
      colour: Colours.Black,
      piece: { id: "wRa", type: Pieces.Rook, colour: Colours.White },
    },
    "(2,1)": {
      row: 1,
      col: 2,
      rank: "b",
      colour: Colours.White,
      piece: { id: "wNb", type: Pieces.Knight, colour: Colours.White },
    },
    "(3,1)": {
      row: 1,
      col: 3,
      rank: "c",
      colour: Colours.Black,
      piece: { id: "wBc", type: Pieces.Bishop, colour: Colours.White },
    },
    "(4,1)": {
      row: 1,
      col: 4,
      rank: "d",
      colour: Colours.White,
      piece: { id: "wQd", type: Pieces.Queen, colour: Colours.White },
    },
    "(5,1)": {
      row: 1,
      col: 5,
      rank: "e",
      colour: Colours.Black,
      piece: { id: "wKe", type: Pieces.King, colour: Colours.White },
    },
    "(6,1)": {
      row: 1,
      col: 6,
      rank: "f",
      colour: Colours.White,
      piece: { id: "wBf", type: Pieces.Bishop, colour: Colours.White },
    },
    "(7,1)": {
      row: 1,
      col: 7,
      rank: "g",
      colour: Colours.Black,
      piece: { id: "wNg", type: Pieces.Knight, colour: Colours.White },
    },
    "(8,1)": {
      row: 1,
      col: 8,
      rank: "h",
      colour: Colours.White,
      piece: { id: "wRh", type: Pieces.Rook, colour: Colours.White },
    },
  },
};

const types = {
  MOVE_PIECE: "MOVE_PIECE",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MOVE_PIECE:
      const { from, to } = action.payload;
      if (isLeagalMove(from, to)) return movePiece(from, to, state);
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

function movePiece(from, to, state) {
  const board = { ...state.board };
  board[to.pos].piece = board[from.pos].piece;
  board[from.pos].piece = null;
  return { ...state, board };
}

export { initialState, types, reducer, Colours, Pieces };
