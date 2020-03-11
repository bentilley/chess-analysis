const Pieces = Object.freeze({
  Pawn: 'Pawn',
  Knight: 'Knight',
  Bishop: 'Bishop',
  Rook: 'Rook',
  Queen: 'Queen',
  King: 'King'
});

const Colours = Object.freeze({
  White: 'White',
  Black: 'Black'
});

const initialState = {
  board: [
    [
      {
        row: 8,
        rank: 'a',
        colour: Colours.White,
        piece: { id: 'bRa', type: Pieces.Rook, colour: Colours.Black }
      },
      {
        row: 8,
        rank: 'b',
        colour: Colours.Black,
        piece: { id: 'bNb', type: Pieces.Knight, colour: Colours.Black }
      },
      {
        row: 8,
        rank: 'c',
        colour: Colours.White,
        piece: { id: 'bBc', type: Pieces.Bishop, colour: Colours.Black }
      },
      {
        row: 8,
        rank: 'd',
        colour: Colours.Black,
        piece: { id: 'bQd', type: Pieces.Queen, colour: Colours.Black }
      },
      {
        row: 8,
        rank: 'e',
        colour: Colours.White,
        piece: { id: 'bKe', type: Pieces.King, colour: Colours.Black }
      },
      {
        row: 8,
        rank: 'f',
        colour: Colours.Black,
        piece: { id: 'bBf', type: Pieces.Bishop, colour: Colours.Black }
      },
      {
        row: 8,
        rank: 'g',
        colour: Colours.White,
        piece: { id: 'bNg', type: Pieces.Knight, colour: Colours.Black }
      },
      {
        row: 8,
        rank: 'h',
        colour: Colours.Black,
        piece: { id: 'bRh', type: Pieces.Rook, colour: Colours.Black }
      }
    ],
    [
      {
        row: 7,
        rank: 'a',
        colour: Colours.Black,
        piece: { id: 'bpa', type: Pieces.Pawn, colour: Colours.Black }
      },
      {
        row: 7,
        rank: 'b',
        colour: Colours.White,
        piece: { id: 'bpb', type: Pieces.Pawn, colour: Colours.Black }
      },
      {
        row: 7,
        rank: 'c',
        colour: Colours.Black,
        piece: { id: 'bpc', type: Pieces.Pawn, colour: Colours.Black }
      },
      {
        row: 7,
        rank: 'd',
        colour: Colours.White,
        piece: { id: 'bpd', type: Pieces.Pawn, colour: Colours.Black }
      },
      {
        row: 7,
        rank: 'e',
        colour: Colours.Black,
        piece: { id: 'bpe', type: Pieces.Pawn, colour: Colours.Black }
      },
      {
        row: 7,
        rank: 'f',
        colour: Colours.White,
        piece: { id: 'bpf', type: Pieces.Pawn, colour: Colours.Black }
      },
      {
        row: 7,
        rank: 'g',
        colour: Colours.Black,
        piece: { id: 'bpg', type: Pieces.Pawn, colour: Colours.Black }
      },
      {
        row: 7,
        rank: 'h',
        colour: Colours.White,
        piece: { id: 'bph', type: Pieces.Pawn, colour: Colours.Black }
      }
    ],
    [
      {
        row: 6,
        rank: 'a',
        colour: Colours.White,
        piece: null
      },
      {
        row: 6,
        rank: 'b',
        colour: Colours.Black,
        piece: null
      },
      {
        row: 6,
        rank: 'c',
        colour: Colours.White,
        piece: null
      },
      {
        row: 6,
        rank: 'd',
        colour: Colours.Black,
        piece: null
      },
      {
        row: 6,
        rank: 'e',
        colour: Colours.White,
        piece: null
      },
      {
        row: 6,
        rank: 'f',
        colour: Colours.Black,
        piece: null
      },
      {
        row: 6,
        rank: 'g',
        colour: Colours.White,
        piece: null
      },
      {
        row: 6,
        rank: 'h',
        colour: Colours.Black,
        piece: null
      }
    ],
    [
      {
        row: 5,
        rank: 'a',
        colour: Colours.Black,
        piece: null
      },
      {
        row: 5,
        rank: 'b',
        colour: Colours.White,
        piece: null
      },
      {
        row: 5,
        rank: 'c',
        colour: Colours.Black,
        piece: null
      },
      {
        row: 5,
        rank: 'd',
        colour: Colours.White,
        piece: null
      },
      {
        row: 5,
        rank: 'e',
        colour: Colours.Black,
        piece: null
      },
      {
        row: 5,
        rank: 'f',
        colour: Colours.White,
        piece: null
      },
      {
        row: 5,
        rank: 'g',
        colour: Colours.Black,
        piece: null
      },
      {
        row: 5,
        rank: 'h',
        colour: Colours.White,
        piece: null
      }
    ],
    [
      {
        row: 4,
        rank: 'a',
        colour: Colours.White,
        piece: null
      },
      {
        row: 4,
        rank: 'b',
        colour: Colours.Black,
        piece: null
      },
      {
        row: 4,
        rank: 'c',
        colour: Colours.White,
        piece: null
      },
      {
        row: 4,
        rank: 'd',
        colour: Colours.Black,
        piece: null
      },
      {
        row: 4,
        rank: 'e',
        colour: Colours.White,
        piece: null
      },
      {
        row: 4,
        rank: 'f',
        colour: Colours.Black,
        piece: null
      },
      {
        row: 4,
        rank: 'g',
        colour: Colours.White,
        piece: null
      },
      {
        row: 4,
        rank: 'h',
        colour: Colours.Black,
        piece: null
      }
    ],
    [
      {
        row: 3,
        rank: 'a',
        colour: Colours.Black,
        piece: null
      },
      {
        row: 3,
        rank: 'b',
        colour: Colours.White,
        piece: null
      },
      {
        row: 3,
        rank: 'c',
        colour: Colours.Black,
        piece: null
      },
      {
        row: 3,
        rank: 'd',
        colour: Colours.White,
        piece: null
      },
      {
        row: 3,
        rank: 'e',
        colour: Colours.Black,
        piece: null
      },
      {
        row: 3,
        rank: 'f',
        colour: Colours.White,
        piece: null
      },
      {
        row: 3,
        rank: 'g',
        colour: Colours.Black,
        piece: null
      },
      {
        row: 3,
        rank: 'h',
        colour: Colours.White,
        piece: null
      }
    ],
    [
      {
        row: 2,
        rank: 'a',
        colour: Colours.White,
        piece: { id: 'wpa', type: Pieces.Pawn, colour: Colours.White }
      },
      {
        row: 2,
        rank: 'b',
        colour: Colours.Black,
        piece: { id: 'wpb', type: Pieces.Pawn, colour: Colours.White }
      },
      {
        row: 2,
        rank: 'c',
        colour: Colours.White,
        piece: { id: 'wpc', type: Pieces.Pawn, colour: Colours.White }
      },
      {
        row: 2,
        rank: 'd',
        colour: Colours.Black,
        piece: { id: 'wpd', type: Pieces.Pawn, colour: Colours.White }
      },
      {
        row: 2,
        rank: 'e',
        colour: Colours.White,
        piece: { id: 'wpe', type: Pieces.Pawn, colour: Colours.White }
      },
      {
        row: 2,
        rank: 'f',
        colour: Colours.Black,
        piece: { id: 'wpf', type: Pieces.Pawn, colour: Colours.White }
      },
      {
        row: 2,
        rank: 'g',
        colour: Colours.White,
        piece: { id: 'wpg', type: Pieces.Pawn, colour: Colours.White }
      },
      {
        row: 2,
        rank: 'h',
        colour: Colours.Black,
        piece: { id: 'wph', type: Pieces.Pawn, colour: Colours.White }
      }
    ],
    [
      {
        row: 1,
        rank: 'a',
        colour: Colours.Black,
        piece: { id: 'wRa', type: Pieces.Rook, colour: Colours.White }
      },
      {
        row: 1,
        rank: 'b',
        colour: Colours.White,
        piece: { id: 'wNb', type: Pieces.Knight, colour: Colours.White }
      },
      {
        row: 1,
        rank: 'c',
        colour: Colours.Black,
        piece: { id: 'wBc', type: Pieces.Bishop, colour: Colours.White }
      },
      {
        row: 1,
        rank: 'd',
        colour: Colours.White,
        piece: { id: 'wQd', type: Pieces.Queen, colour: Colours.White }
      },
      {
        row: 1,
        rank: 'e',
        colour: Colours.Black,
        piece: { id: 'wKe', type: Pieces.King, colour: Colours.White }
      },
      {
        row: 1,
        rank: 'f',
        colour: Colours.White,
        piece: { id: 'wBf', type: Pieces.Bishop, colour: Colours.White }
      },
      {
        row: 1,
        rank: 'g',
        colour: Colours.Black,
        piece: { id: 'wNg', type: Pieces.Knight, colour: Colours.White }
      },
      {
        row: 1,
        rank: 'h',
        colour: Colours.White,
        piece: { id: 'wRh', type: Pieces.Rook, colour: Colours.White }
      }
    ]
  ]
};

const types = {
  FIRST: 'FIRST'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FIRST:
      return state;
    default:
      return state;
  }
};

export { initialState, types, reducer, Colours, Pieces };
