import Board, { Position } from "./board";
import { Colours, Pieces } from "./reducers";

describe("Board", () => {
  describe("Pawns", () => {
    it("should be able to move forward two spaces if it has not moved", () => {
      let [boardData, legalMoves] = getTestData([
        [" ", "+", " "],
        [" ", "+", " "],
        [" ", "P", " "],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 1, col: 2 }).piece;
      Object.defineProperty(piece, "hasMoved", { get: () => false });
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });
    it("should only be able to move forward one space is it has moved", () => {
      let [boardData, legalMoves] = getTestData([
        [" ", " ", " "],
        [" ", "+", " "],
        [" ", "P", " "],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 1, col: 2 }).piece;
      Object.defineProperty(piece, "hasMoved", { get: () => true });
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });
    it("should be able to take enemy pieces one square diagonally", () => {
      let [boardData, legalMoves] = getTestData([
        [" ", " ", " "],
        ["p", "+", "p"],
        [" ", "P", " "],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 1, col: 2 }).piece;
      Object.defineProperty(piece, "hasMoved", { get: () => true });
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });
    // it("should be able to take an enemy pawn en passant", () => {
    //   let [boardData, legalMoves] = getTestData([
    //     [" ", " ", " "],
    //     ["+", "+", "+"],
    //     ["p", "P", "p"],
    //   ]);
    //   let board = new Board({ board: boardData });
    //   let piece = board.getCell({ row: 1, col: 2 }).piece;
    //   piece.hasMoved = true;
    //   legalMoves = legalMoves.filter(pos => pos.row !== 1);
    //   expect(piece.legalMoves.map(String).sort()).toEqual(
    //     legalMoves.map(String).sort()
    //   );
    // });
  });

  describe("Knights", () => {
    it("should have the correct legal moves", () => {
      let [boardData, legalMoves] = getTestData([
        [" ", "+", " ", "+", " "],
        ["+", " ", " ", " ", "+"],
        [" ", " ", "N", " ", " "],
        ["+", " ", " ", " ", "+"],
        [" ", "+", " ", "+", " "],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 3, col: 3 }).piece;
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });
    it("should not move through a friendly piece", () => {
      let [boardData, legalMoves] = getTestData([
        [" ", "+", " ", "+", " "],
        ["B", " ", " ", " ", "+"],
        [" ", " ", "N", " ", " "],
        ["+", " ", " ", " ", "+"],
        [" ", "+", " ", "+", " "],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 3, col: 3 }).piece;
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });
    it("should be able to take enemy pieces", () => {
      let [boardData, legalMoves] = getTestData([
        [" ", "+", " ", "b", " "],
        ["+", " ", " ", " ", "+"],
        [" ", " ", "N", " ", " "],
        ["+", " ", " ", " ", "+"],
        [" ", "+", " ", "+", " "],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 3, col: 3 }).piece;
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });
  });

  describe("Bishops", () => {
    it("should have the correct legal moves", () => {
      let [boardData, legalMoves] = getTestData([
        ["+", " ", " ", " ", "+"],
        [" ", "+", " ", "+", " "],
        [" ", " ", "B", " ", " "],
        [" ", "+", " ", "+", " "],
        ["+", " ", " ", " ", "+"],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 3, col: 3 }).piece;
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });
    it("should not move through a friendly piece", () => {
      let [boardData, legalMoves] = getTestData([
        ["+", " ", " ", " ", " "],
        [" ", "+", " ", "K", " "],
        [" ", " ", "B", " ", " "],
        [" ", "+", " ", "+", " "],
        ["+", " ", " ", " ", "+"],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 3, col: 3 }).piece;
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });
    it("should be able to take enemy pieces", () => {
      let [boardData, legalMoves] = getTestData([
        ["+", " ", " ", " ", " "],
        [" ", "+", " ", "n", " "],
        [" ", " ", "B", " ", " "],
        [" ", "+", " ", "+", " "],
        ["+", " ", " ", " ", "+"],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 3, col: 3 }).piece;
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });
  });

  describe("Rooks", () => {
    it("should have the correct legal moves", () => {
      let [boardData, legalMoves] = getTestData([
        [" ", " ", "+", " ", " "],
        [" ", " ", "+", " ", " "],
        ["+", "+", "R", "+", "+"],
        [" ", " ", "+", " ", " "],
        [" ", " ", "+", " ", " "],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 3, col: 3 }).piece;
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });
    it("should not move through a friendly piece", () => {
      let [boardData, legalMoves] = getTestData([
        [" ", " ", "+", " ", " "],
        [" ", " ", "+", " ", " "],
        [" ", "Q", "R", "+", "+"],
        [" ", " ", "+", " ", " "],
        [" ", " ", "+", " ", " "],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 3, col: 3 }).piece;
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });
    it("should be able to take enemy pieces", () => {
      let [boardData, legalMoves] = getTestData([
        [" ", " ", " ", " ", " "],
        [" ", " ", "n", " ", " "],
        ["+", "+", "R", "+", "+"],
        [" ", " ", "+", " ", " "],
        [" ", " ", "+", " ", " "],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 3, col: 3 }).piece;
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });
  });

  describe("Queens", () => {
    it("should have the correct legal moves", () => {
      let [boardData, legalMoves] = getTestData([
        ["+", " ", "+", " ", "+"],
        [" ", "+", "+", "+", " "],
        ["+", "+", "Q", "+", "+"],
        [" ", "+", "+", "+", " "],
        ["+", " ", "+", " ", "+"],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 3, col: 3 }).piece;
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });
    it("should not move through a friendly piece", () => {
      let [boardData, legalMoves] = getTestData([
        [" ", " ", " ", " ", "+"],
        [" ", "B", "P", "+", " "],
        ["+", "+", "Q", "N", " "],
        [" ", "+", "+", "+", " "],
        ["+", " ", "+", " ", "+"],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 3, col: 3 }).piece;
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });
    it("should be able to take enemy pieces", () => {
      let [boardData, legalMoves] = getTestData([
        ["+", " ", " ", " ", "+"],
        [" ", "+", "q", "+", " "],
        ["+", "+", "Q", "n", " "],
        [" ", "+", "+", "+", " "],
        ["+", " ", "+", " ", "p"],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 3, col: 3 }).piece;
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });
  });

  describe("Kings", () => {
    it("should have the correct legal moves", () => {
      let [boardData, legalMoves] = getTestData([
        [" ", " ", " ", " ", " "],
        [" ", "+", "+", "+", " "],
        [" ", "+", "K", "+", " "],
        [" ", "+", "+", "+", " "],
        [" ", " ", " ", " ", " "],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 3, col: 3 }).piece;
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });

    it("should not move through a friendly piece", () => {
      let [boardData, legalMoves] = getTestData([
        [" ", " ", " ", " ", " "],
        [" ", "+", "N", "P", " "],
        [" ", "+", "K", "+", " "],
        [" ", "+", "+", "+", " "],
        [" ", " ", " ", " ", " "],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 3, col: 3 }).piece;
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });
    it("should be able to take enemy pieces", () => {
      let [boardData, legalMoves] = getTestData([
        [" ", " ", " ", " ", " "],
        [" ", "+", "+", "+", " "],
        [" ", "q", "K", "+", " "],
        [" ", "p", "+", "+", " "],
        [" ", " ", " ", " ", " "],
      ]);
      let board = new Board({ board: boardData });
      let piece = board.getCell({ row: 3, col: 3 }).piece;
      expect(piece.legalMoves.map(String).sort()).toEqual(
        legalMoves.map(String).sort()
      );
    });
    // it("should be able to castle king's side", () => {
    //   expect(true).toBe(false);
    // });
    // it("should be able to castle queen's side", () => {
    //   expect(true).toBe(false);
    // });
  });
});

function getTestData(boardShortHand) {
  return [compileBoardData(boardShortHand), compileLegalMoves(boardShortHand)];
}

function compileBoardData(boardShortHand) {
  let cellArray = boardShortHand
    .map((row, row_index) =>
      row.map((cell, col_index) => ({
        row: boardShortHand.length - row_index,
        col: col_index + 1,
        rank: Ranks[col_index + 1],
        colour:
          (row_index + col_index) % 2 === 0 ? Colours.White : Colours.Black,
        piece: PieceMap[cell],
      }))
    )
    .flat();
  const boardData = {};
  cellArray.forEach(cell => {
    boardData[`(${cell.col},${cell.row})`] = cell;
  });
  return boardData;
}

function compileLegalMoves(boardShortHand) {
  return boardShortHand
    .map((row, row_index) =>
      row.map((col, col_index) =>
        col === "+" || ["p", "n", "b", "r", "q", "k"].includes(col)
          ? new Position(col_index + 1, boardShortHand.length - row_index)
          : null
      )
    )
    .flat()
    .filter(pos => !!pos);
}

const Ranks = Object.freeze({
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
});

const PieceMap = Object.freeze({
  " ": null,
  "+": null,
  p: { id: "p", type: Pieces.Pawn, colour: Colours.Black },
  n: { id: "n", type: Pieces.Knight, colour: Colours.Black },
  b: { id: "b", type: Pieces.Bishop, colour: Colours.Black },
  r: { id: "r", type: Pieces.Rook, colour: Colours.Black },
  q: { id: "q", type: Pieces.Queen, colour: Colours.Black },
  k: { id: "k", type: Pieces.King, colour: Colours.Black },
  P: { id: "P", type: Pieces.Pawn, colour: Colours.White },
  N: { id: "N", type: Pieces.Knight, colour: Colours.White },
  B: { id: "B", type: Pieces.Bishop, colour: Colours.White },
  R: { id: "R", type: Pieces.Rook, colour: Colours.White },
  Q: { id: "Q", type: Pieces.Queen, colour: Colours.White },
  K: { id: "K", type: Pieces.King, colour: Colours.White },
});
