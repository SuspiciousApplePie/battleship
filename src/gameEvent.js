import {
  parentClass,
  boardClass,
  mainParentClassBorders,
  btnClass,
} from "./constant.js";
import { Player } from "./player.js";
import {
  markAsDestroyed,
  markAsMissed,
  markAsOccupied,
  createStartButton,
  createQuitButton,
  replaceBtn,
  unMarkCell,
} from "./ui.js";

let player = Player(1);
let computer = Player(0);

function getRightBoard() {
  return document.querySelector(
    `#${mainParentClassBorders.PLAYER_2} .${boardClass.BOARD}`,
  );
}

function getFooter() {
  return document.querySelector(`.${parentClass.FOOTER}`);
}

function getStartButton() {
  return document.querySelector(`.${btnClass.START}`);
}

function getQuitBtn() {
  const quitBtn = document.querySelector(`.${btnClass.QUIT}`);
  if (!quitBtn) return;
  return quitBtn;
}

export function startGame() {
  getRightBoard().addEventListener("click", attackCell);
  populateAIBoard();
  populateBoardWithShip(mainParentClassBorders.PLAYER_1);
  const startBtn = getStartButton();
  const quitBtn = createQuitButton();
  replaceBtn(quitBtn, startBtn);
  quitBtn.addEventListener("click", quitGame);
}

function quitGame() {
  const quitBtn = getQuitBtn();
  if (quitBtn) {
    getFooter().textContent = "";
    player = Player(1);
    computer = Player(0);
    populateBoardWithShip(mainParentClassBorders.PLAYER_1);
    displayShips(
      mainParentClassBorders.PLAYER_2,
      computer.board.showGameBoard(),
    );
    quitBtn.removeEventListener("click", quitGame);
    getRightBoard().removeEventListener("click", attackCell);
    const startBtn = createStartButton();
    replaceBtn(startBtn, quitBtn);
    startBtn.addEventListener("click", startGame);
  }
}

function attackCell(e) {
  if (e.target.classList.contains(boardClass.CELL)) {
    const isAttack = computer.board.recieveAttack(
      e.target.dataset.x,
      e.target.dataset.y,
    );

    if (isAttack === false) {
      markAsMissed(e.target);
      ComputerAttack();
    } else if (isAttack) {
      markAsDestroyed(e.target);
      if (computer.board.allShipSinked()) {
        getRightBoard().removeEventListener("click", attackCell);
        renderWinMessage("Player 1");
      }
    }
    return;
  }
}

function populateBoardWithShip(id) {
  player.board.placeShipHorizontal(1, 5, 4);
  player.board.placeShipHorizontal(5, 9, 2);
  player.board.placeShipVertical(3, 7, 3);
  player.board.placeShipVertical(8, 6, 1);
  displayShips(id, player.board.showGameBoard());
}

function populateAIBoard() {
  computer.board.placeShipHorizontal(1, 5, 4);
  computer.board.placeShipHorizontal(5, 9, 2);
  computer.board.placeShipVertical(3, 7, 3);
  computer.board.placeShipVertical(8, 6, 1);
}

function displayShips(id, board) {
  const cells = document.querySelectorAll(`#${id} .${boardClass.CELL}`);
  cells.forEach((cell) => {
    if (
      typeof board[cell.dataset.x - 1][cell.dataset.y - 1] === "object" &&
      board[cell.dataset.x - 1][cell.dataset.y - 1] !== null
    ) {
      markAsOccupied(cell);
    } else {
      unMarkCell(cell);
    }
  });
}

function ComputerAttack() {
  while (true) {
    const x = Math.floor(Math.random() * 10) + 1;
    const y = Math.floor(Math.random() * 10) + 1;
    const status = player.board.recieveAttack(x, y);

    const cell = document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    if (status === true) {
      markAsDestroyed(cell);
      if (player.board.allShipSinked()) {
        getRightBoard().removeEventListener("click", attackCell);
        renderWinMessage("Player 2");
        break;
      }
      continue;
    } else if (status === false) {
      markAsMissed(cell);
      break;
    }
  }
}

function renderWinMessage(player) {
  getFooter().textContent = `${player} wins.`;
}

export { attackCell, populateAIBoard, populateBoardWithShip, displayShips };
