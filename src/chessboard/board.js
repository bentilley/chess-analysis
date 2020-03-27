import { Pieces, Colours } from "./reducers";

const Perspectives = Object.freeze({
  rowOrder: {
    [Colours.White]: [8, 7, 6, 5, 4, 3, 2, 1],
    [Colours.Black]: [1, 2, 3, 4, 5, 6, 7, 8],
  },
});

export default class Board {
  constructor({ board: boardData, perspective }) {
    this.cells = boardData.map((cellData, index) => new Cell(this, cellData));
    this.perspective = perspective;
    this.isLegal = this.isLegal.bind(this);
    this.hasFriendlyPiece = this.hasFriendlyPiece.bind(this);
    this.hasEnemyPiece = this.hasEnemyPiece.bind(this);
  }

  get rows() {
    return Perspectives.rowOrder[this.perspective].map(
      rowNumber =>
        new Slice(this.cells.filter(cell => cell.row === rowNumber), rowNumber)
    );
  }

  get cols() {
    return [1, 2, 3, 4, 5, 6, 7, 8].map(
      colNumber =>
        new Slice(this.cells.filter(cell => cell.col === colNumber), colNumber)
    );
  }

  getCell({ row, col }) {
    return this.cells.filter(cell => cell.row === row && cell.col === col)[0];
  }

  hasFriendlyPiece(position, colour) {
    const cell = this.getCell(position);
    return cell.hasPiece && cell.piece.colour === colour;
  }

  hasEnemyPiece(position, colour) {
    const cell = this.getCell(position);
    return cell.hasPiece && cell.piece.colour !== colour;
  }

  get rowNumbers() {
    return new Set(this.cells.map(cell => cell.row));
  }

  get colNumbers() {
    return new Set(this.cells.map(cell => cell.col));
  }

  get minRow() {
    return Math.min(...this.rowNumbers);
  }

  get maxRow() {
    return Math.max(...this.rowNumbers);
  }

  get minCol() {
    return Math.min(...this.colNumbers);
  }

  get maxCol() {
    return Math.max(...this.colNumbers);
  }

  isLegal({ row, col }) {
    return (
      row >= this.minRow &&
      row <= this.maxRow &&
      col >= this.minCol &&
      col <= this.maxCol
    );
  }

  map(f) {
    return this.rows.map(f);
  }
}

class Slice {
  constructor(cells, index) {
    this.cells = cells;
    this.index = index;
  }

  toString() {
    return "" + this.index;
  }

  map(f) {
    return this.cells.map(f);
  }
}

class Cell {
  constructor(board, { row, col, rank, colour, piece }) {
    // this.board = board;
    this.row = row;
    this.col = col;
    this.position = new Position(col, row);
    this.rank = rank;
    this.colour = colour;
    if (piece) piece.position = this.position;
    this.piece = piece ? Piece.createPiece(board, piece) : null;
  }

  toString() {
    return this.rank + this.row;
  }

  get hasPiece() {
    return Boolean(this.piece);
  }

  get pos() {
    return String(this.position);
  }
}

export class Position {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  toString() {
    return `(${this.col},${this.row})`;
  }

  moveBy({ up, right }) {
    return new Position(this.col + right, this.row + up);
  }
}

class Piece {
  constructor({ id, type, colour, position, board }) {
    this.board = board;
    this.id = id;
    this.type = type;
    this.colour = colour;
    this.position = position;
  }

  static createPiece(board, pieceData) {
    pieceData.board = board;
    switch (pieceData.type) {
      case Pieces.Pawn:
        return new Pawn(pieceData);
      case Pieces.Knight:
        return new Knight(pieceData);
      case Pieces.Bishop:
        return new Bishop(pieceData);
      case Pieces.Rook:
        return new Rook(pieceData);
      case Pieces.Queen:
        return new Queen(pieceData);
      case Pieces.King:
        return new King(pieceData);
      default:
        throw new TypeError("Not a valid piece type!");
    }
  }

  getLineInDirection({ up, right }) {
    let moves = [];
    let pos = this.position.moveBy({ up, right });
    while (
      this.board.isLegal(pos) &&
      !this.board.hasFriendlyPiece(pos, this.colour)
    ) {
      moves.push(pos);
      if (this.board.hasEnemyPiece(pos, this.colour)) break;
      pos = pos.moveBy({ up, right });
    }
    return moves;
  }

  get legalMoves() {
    return [];
  }
}

class Pawn extends Piece {
  constructor(pieceData) {
    super(pieceData);
  }

  get direction() {
    return { [Colours.White]: 1, [Colours.Black]: -1 }[this.colour];
  }

  get forwardMoves() {
    const moves = [this.position.moveBy({ up: this.direction, right: 0 })];
    if (!this.hasMoved) {
      moves.push(this.position.moveBy({ up: 2 * this.direction, right: 0 }));
    }
    return moves;
  }

  get takingMoves() {
    const moves = [
      this.position.moveBy({ up: this.direction, right: 1 }),
      this.position.moveBy({ up: this.direction, right: -1 }),
    ];
    return moves
      .filter(this.board.isLegal)
      .filter(position => this.board.hasEnemyPiece(position, this.colour));
  }

  get legalMoves() {
    return this.forwardMoves.concat(this.takingMoves);
  }
}

class Knight extends Piece {
  constructor(pieceData) {
    super(pieceData);
  }

  get possibleMoves() {
    return [
      this.position.moveBy({ up: 2, right: 1 }),
      this.position.moveBy({ up: 2, right: -1 }),
      this.position.moveBy({ up: 1, right: 2 }),
      this.position.moveBy({ up: 1, right: -2 }),
      this.position.moveBy({ up: -1, right: 2 }),
      this.position.moveBy({ up: -1, right: -2 }),
      this.position.moveBy({ up: -2, right: 1 }),
      this.position.moveBy({ up: -2, right: -1 }),
    ];
  }

  get legalMoves() {
    return this.possibleMoves
      .filter(this.board.isLegal)
      .filter(position => !this.board.hasFriendlyPiece(position, this.colour));
  }
}

class Bishop extends Piece {
  constructor(pieceData) {
    super(pieceData);
  }

  get legalMoves() {
    let moves = [];
    moves = moves.concat(this.getLineInDirection({ up: 1, right: 1 }));
    moves = moves.concat(this.getLineInDirection({ up: 1, right: -1 }));
    moves = moves.concat(this.getLineInDirection({ up: -1, right: 1 }));
    moves = moves.concat(this.getLineInDirection({ up: -1, right: -1 }));
    return moves;
  }
}

class Rook extends Piece {
  constructor(pieceData) {
    super(pieceData);
  }

  get legalMoves() {
    let moves = [];
    moves = moves.concat(this.getLineInDirection({ up: 1, right: 0 }));
    moves = moves.concat(this.getLineInDirection({ up: -1, right: 0 }));
    moves = moves.concat(this.getLineInDirection({ up: 0, right: 1 }));
    moves = moves.concat(this.getLineInDirection({ up: 0, right: -1 }));
    return moves;
  }
}

class Queen extends Piece {
  constructor(pieceData) {
    super(pieceData);
  }

  get legalMoves() {
    let moves = [];
    moves = moves.concat(this.getLineInDirection({ up: 1, right: 1 }));
    moves = moves.concat(this.getLineInDirection({ up: 1, right: -1 }));
    moves = moves.concat(this.getLineInDirection({ up: -1, right: 1 }));
    moves = moves.concat(this.getLineInDirection({ up: -1, right: -1 }));
    moves = moves.concat(this.getLineInDirection({ up: 1, right: 0 }));
    moves = moves.concat(this.getLineInDirection({ up: -1, right: 0 }));
    moves = moves.concat(this.getLineInDirection({ up: 0, right: 1 }));
    moves = moves.concat(this.getLineInDirection({ up: 0, right: -1 }));
    return moves;
  }
}

class King extends Piece {
  constructor(pieceData) {
    super(pieceData);
  }

  get possibleMoves() {
    return [
      this.position.moveBy({ up: 1, right: 1 }),
      this.position.moveBy({ up: 1, right: 0 }),
      this.position.moveBy({ up: 1, right: -1 }),
      this.position.moveBy({ up: 0, right: 1 }),
      this.position.moveBy({ up: 0, right: -1 }),
      this.position.moveBy({ up: -1, right: 1 }),
      this.position.moveBy({ up: -1, right: 0 }),
      this.position.moveBy({ up: -1, right: -1 }),
    ];
  }

  get legalMoves() {
    return this.possibleMoves
      .filter(this.board.isLegal)
      .filter(position => !this.board.hasFriendlyPiece(position, this.colour));
  }
}
