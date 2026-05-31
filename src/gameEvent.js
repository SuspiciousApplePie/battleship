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
  createRandomizeBtn,
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

export function menuOperation(e) {
  if (e.target.classList.contains(btnClass.START)) {
    getRightBoard().addEventListener("click", attackCell);
    populateAIBoard();
    populateBoardWithShip(mainParentClassBorders.PLAYER_1);
    const menu = e.target.closest(`.${mainParentClassBorders.MENU_BORDER}`);
    menu.querySelector(`.${btnClass.RANDOMIZE}`).remove();
    const quitBtn = createQuitButton();
    replaceBtn(quitBtn, e.target);
  }

  if (e.target.classList.contains(btnClass.QUIT)) {
    getFooter().textContent = "";
    player = Player(1);
    computer = Player(0);
    populateBoardWithShip(mainParentClassBorders.PLAYER_1);
    displayShips(
      mainParentClassBorders.PLAYER_2,
      computer.board.showGameBoard(),
    );
    getRightBoard().removeEventListener("click", attackCell);
    const startBtn = createStartButton();
    replaceBtn(startBtn, e.target);
    const menu = startBtn.closest(`.${mainParentClassBorders.MENU_BORDER}`);
    menu.prepend(createRandomizeBtn());
  }

  if (e.target.classList.contains(btnClass.RANDOMIZE)) {
    player = Player(1);
    randomize(1, 4, player);
    randomize(2, 3, player);
    randomize(3, 2, player);
    randomize(4, 1, player);

    displayShips(mainParentClassBorders.PLAYER_1, player.board.showGameBoard());
  }
}

function randomize(quantity, length, player) {
  let total = 0;

  while (total < quantity) {
    const placers = [
      player.board.placeShipHorizontal,
      player.board.placeShipVertical,
    ];
    const chosenFunc = placers[Math.floor(Math.random() * placers.length)];
    const isMoveValid = chosenFunc(
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      length,
    );
    if (isMoveValid) {
      total++;
    }
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
  player.board.placeShipHorizontal(1, 1, 2);
  player.board.placeShipHorizontal(2, 1, 1);

  displayShips(id, player.board.showGameBoard());
}

function populateAIBoard() {
  computer.board.placeShipHorizontal(1, 1, 2);
  computer.board.placeShipHorizontal(2, 1, 1);
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
