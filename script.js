// script.js - Tam sürüm (tek dosya)

let board = [];
let currentTurn = 'white';
let selected = null;
let botEnabled = false;
let botColor = 'black';

function saveGameState() {
    const state = {
        board,
        currentTurn,
        botEnabled,
        botColor
    };
    localStorage.setItem('timurChessState', JSON.stringify(state));
}

function loadGameState() {
    const saved = localStorage.getItem('timurChessState');
    if (saved) {
        const state = JSON.parse(saved);
        board = state.board;
        currentTurn = state.currentTurn;
        botEnabled = state.botEnabled;
        botColor = state.botColor;
    } else {
        board = createInitialBoard();
    }
}

function createInitialBoard() {
    const empty = Array.from({ length: 11 }, () => Array(11).fill(null));
    const setupRow = (color) => [
        { type: 'fil', symbol: '🐘', color },
        null,
        { type: 'deve', symbol: '🐪', color },
        null,
        { type: 'manc', symbol: '🛡', color },
        null,
        { type: 'manc', symbol: '🛡', color },
        null,
        { type: 'deve', symbol: '🐪', color },
        null,
        { type: 'fil', symbol: '🐘', color }
    ];
    const secondRow = (color) => [
        { type: 'kale', symbol: '♜', color },
        { type: 'at', symbol: '♞', color },
        { type: 'debbabe', symbol: '🎯', color },
        { type: 'zurafa', symbol: '🦒', color },
        { type: 'vezir', symbol: '♛', color },
        { type: 'sah', symbol: '♚', color },
        { type: 'bakan', symbol: '⚜️', color },
        { type: 'zurafa', symbol: '🦒', color },
        { type: 'debbabe', symbol: '🎯', color },
        { type: 'at', symbol: '♞', color },
        { type: 'kale', symbol: '♜', color }
    ];
    const piyonRow = (color) => Array.from({ length: 11 }, (_, i) => ({
        type: 'piyon',
        symbol: '♟',
        color
    }));

    empty[0] = setupRow('black');
    empty[1] = secondRow('black');
    empty[2] = piyonRow('black');

    empty[8] = piyonRow('white');
    empty[9] = secondRow('white');
    empty[10] = setupRow('white');

    return empty;
}

function renderBoard() {
    const boardEl = document.getElementById('board');
    boardEl.innerHTML = '';
    for (let row = 0; row < 11; row++) {
        for (let col = 0; col < 11; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.row = row;
            cell.dataset.col = col;
            const piece = board[row][col];
            if (piece) {
                cell.textContent = piece.symbol;
                cell.classList.add(piece.color);
            }
            boardEl.appendChild(cell);
        }
    }
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
}

function handleCellClick(e) {
    const row = parseInt(e.currentTarget.dataset.row);
    const col = parseInt(e.currentTarget.dataset.col);
    const piece = board[row][col];

    if (selected) {
        const [fromRow, fromCol] = selected;
        const valid = getValidMoves(board[fromRow][fromCol], fromRow, fromCol);
        const isValid = valid.some(m => m.row === row && m.col === col);
        if (isValid) {
            board[row][col] = board[fromRow][fromCol];
            board[fromRow][fromCol] = null;
            currentTurn = currentTurn === 'white' ? 'black' : 'white';
            selected = null;
            saveGameState();
            renderBoard();
            if (botEnabled && currentTurn === botColor) {
                setTimeout(botMove, 500);
            }
        } else {
            selected = null;
            renderBoard();
        }
    } else {
        if (piece && piece.color === currentTurn) {
            selected = [row, col];
            highlightMoves(getValidMoves(piece, row, col));
        }
    }
    announceWinner();
}

function highlightMoves(moves) {
    renderBoard();
    moves.forEach(move => {
        const selector = `.cell[data-row='${move.row}'][data-col='${move.col}']`;
        const el = document.querySelector(selector);
        if (el) el.classList.add('highlight');
    });
}

function botMove() {
    const moves = getAllValidMoves(botColor);
    if (moves.length === 0) return;
    const move = moves[Math.floor(Math.random() * moves.length)];
    board[move.toRow][move.toCol] = board[move.fromRow][move.fromCol];
    board[move.fromRow][move.fromCol] = null;
    currentTurn = botColor === 'white' ? 'black' : 'white';
    saveGameState();
    renderBoard();
    announceWinner();
}

function getValidMoves(piece, row, col) {
    if (!piece) return [];
    const moves = [];
    const directions = {
        fil: [[-1, -1], [-1, 1], [1, -1], [1, 1]],
        deve: [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2]],
        kale: [[0, 1], [0, -1], [1, 0], [-1, 0]],
        at: [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2]],
        zurafa: [[-3, 0], [3, 0], [0, -3], [0, 3]],
        vezir: [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]],
        sah: [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]],
        debbabe: [[-1, 0], [1, 0], [0, -1], [0, 1]],
        mancinik: [[-2, 0], [2, 0], [0, -2], [0, 2]],
        bakan: [[1, 1], [1, -1], [-1, 1], [-1, -1]]
    };
    const apply = (dr, dc, repeat = false) => {
        let r = row + dr;
        let c = col + dc;
        while (r >= 0 && r < 11 && c >= 0 && c < 11) {
            const target = board[r][c];
            if (!target) moves.push({ row: r, col: c });
            else {
                if (target.color !== piece.color) moves.push({ row: r, col: c });
                break;
            }
            if (!repeat) break;
            r += dr;
            c += dc;
        }
    };

    const type = piece.type;
    if (type === 'piyon') {
        const dir = piece.color === 'white' ? -1 : 1;
        const forward = row + dir;
        if (forward >= 0 && forward < 11 && !board[forward][col])
            moves.push({ row: forward, col });
        [-1, 1].forEach(dc => {
            const capture = board[forward]?.[col + dc];
            if (capture && capture.color !== piece.color)
                moves.push({ row: forward, col: col + dc });
        });
    } else if (type === 'kale') {
        directions.kale.forEach(d => apply(...d, true));
    } else if (type === 'fil') {
        directions.fil.forEach(d => apply(...d, true));
    } else if (type === 'vezir') {
        directions.vezir.forEach(d => apply(...d, true));
    } else if (type === 'at') {
        directions.at.forEach(d => apply(...d));
    } else if (type === 'deve') {
        directions.deve.forEach(d => apply(...d));
    } else if (type === 'zurafa') {
        directions.zurafa.forEach(d => apply(...d));
    } else if (type === 'sah') {
        directions.sah.forEach(d => apply(...d));
    } else if (type === 'debbabe') {
        directions.debbabe.forEach(d => apply(...d));
    } else if (type === 'manc') {
        directions.mancinik.forEach(d => apply(...d));
    } else if (type === 'bakan') {
        directions.bakan.forEach(d => apply(...d));
    }

    return moves;
}


function getAllValidMoves(color) {
    const moves = [];
    for (let row = 0; row < 11; row++) {
        for (let col = 0; col < 11; col++) {
            const piece = board[row][col];
            if (piece && piece.color === color) {
                const valid = getValidMoves(piece, row, col);
                valid.forEach(dest => {
                    moves.push({
                        fromRow: row,
                        fromCol: col,
                        toRow: dest.row,
                        toCol: dest.col
                    });
                });
            }
        }
    }
    return moves;
}

document.addEventListener('DOMContentLoaded', () => {
    loadGameState();
    renderBoard();

    document.getElementById('newGameBtn').addEventListener('click', () => {
        board = createInitialBoard();
        currentTurn = 'white';
        botEnabled = false;
        saveGameState();
        renderBoard();
    });

    document.getElementById('botGameBtn').addEventListener('click', () => {
        board = createInitialBoard();
        currentTurn = 'white';
        botEnabled = true;
        botColor = 'black';
        saveGameState();
        renderBoard();
    });

    document.getElementById('resignBtn').addEventListener('click', () => {
        if (!botEnabled || confirm('Gerçekten pes etmek istiyor musunuz?')) {
            alert(`${currentTurn} oyuncusu pes etti!`);
            board = createInitialBoard();
            saveGameState();
            renderBoard();
        }
    });

    document.getElementById('drawBtn').addEventListener('click', () => {
        if (!botEnabled || confirm('Beraberlik teklifini kabul ediyor musunuz?')) {
            alert('Oyun berabere bitti.');
            board = createInitialBoard();
            saveGameState();
            renderBoard();
        }
    });
});




function isGameOver() {
  const opponent = currentTurn === 'white' ? 'black' : 'white';
  const kingPos = findPiece('sah', opponent);
  if (!kingPos) return currentTurn; // Şah taş yoksa zaten bitmiş

  const veliaht = findPiece('bakan', opponent);
  const allMoves = getAllValidMoves(opponent);

  // Şah tehdit altındaysa ve kaçamazsa ve veliaht varsa şah alınamaz!
  if (isUnderThreat(kingPos.row, kingPos.col, currentTurn)) {
    const kingMoves = getValidMoves(board[kingPos.row][kingPos.col], kingPos.row, kingPos.col);
    const escapes = kingMoves.filter(move =>
      !isUnderThreat(move.row, move.col, currentTurn)
    );
    if (escapes.length === 0 && veliaht) return null; // Veliaht varsa şah alınamaz
    if (escapes.length === 0 && !veliaht) return currentTurn; // Mat oldu
  }
  return null;
}

function findPiece(type, color) {
  for (let row = 0; row < 11; row++) {
    for (let col = 0; col < 11; col++) {
      const piece = board[row][col];
      if (piece?.type === type && piece.color === color) {
        return { row, col };
      }
    }
  }
  return null;
}

function isUnderThreat(row, col, byColor) {
  const enemyMoves = getAllValidMoves(byColor);
  return enemyMoves.some(m => m.toRow === row && m.toCol === col);
}

function announceWinner() {
  const winner = isGameOver();
  if (winner) {
    alert(`${winner} kazandı!`);
    board = createInitialBoard();
    saveGameState();
  }
}