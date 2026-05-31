import {
  mainParentClassContainers,
  mainParentClassBorders,
  boardClass,
  btnClass,
} from "./constant.js";

export function createBoardContainer() {
  const boardContainer = document.createElement("div");
  boardContainer.className = mainParentClassContainers.BOARD_CONTAINER;
  return boardContainer;
}

export function renderBoardContainer(boardContainer, main) {
  main.append(boardContainer);
}

export function createBoardBorder(id) {
  const boardBorder = document.createElement("div");
  boardBorder.className = mainParentClassBorders.BOARD_BORDER;
  boardBorder.id = id;
  return boardBorder;
}

export function renderBoardBorder(boardBorder, boardContainer) {
  boardContainer.append(boardBorder);
}

export function createBoard() {
  let x = 1;
  let y = 1;
  const board = document.createElement("div");
  board.className = boardClass.BOARD;

  while (x <= 10 && y <= 10) {
    const cell = document.createElement("div");
    cell.dataset.x = x;
    cell.dataset.y = y;
    cell.className = boardClass.CELL;
    board.append(cell);

    if (y === 10 && x !== 10) {
      x++;
      y = 1;
    } else {
      y++;
    }
  }

  return board;
}

export function renderBoard(board, boardBorder) {
  boardBorder.append(board);
}

export function createMenuContainer() {
  const menuContainer = document.createElement("div");
  menuContainer.className = mainParentClassContainers.MENU_CONTAINER;
  return menuContainer;
}

export function renderMenuContainer(menuContainer, main) {
  main.append(menuContainer);
}

export function createMenuBorder() {
  const menuBorder = document.createElement("div");
  menuBorder.className = mainParentClassBorders.MENU_BORDER;
  return menuBorder;
}

export function renderMenuBorder(menuBorder, menuContainer) {
  menuContainer.append(menuBorder);
}

export function createRandomizeBtn() {
  const randomizeBtn = document.createElement("button");
  randomizeBtn.className = btnClass.RANDOMIZE;
  randomizeBtn.textContent = btnClass.RANDOMIZE_TXT;
  return randomizeBtn;
}

export function createStartButton() {
  const startBtn = document.createElement("button");
  startBtn.className = btnClass.START;
  startBtn.textContent = btnClass.START_TXT;
  return startBtn;
}

export function createQuitButton() {
  const quitBtn = document.createElement("button");
  quitBtn.className = btnClass.QUIT;
  quitBtn.textContent = btnClass.QUIT_TXT;
  return quitBtn;
}

export function replaceBtn(newBtn, oldBtn) {
  oldBtn.replaceWith(newBtn);
}

export function renderBtn(btn, border) {
  border.append(btn);
}

export function markAsOccupied(cell) {
  cell.className = `${boardClass.CELL} ${boardClass.OCCUPIED}`;
}

export function markAsMissed(cell) {
  cell.className = `${boardClass.CELL} ${boardClass.MISSED}`;
}

export function markAsDestroyed(cell) {
  cell.className = `${boardClass.CELL} ${boardClass.DESTROYED}`;
}

export function unMarkCell(cell) {
  cell.className = boardClass.CELL;
}

export function removeElement(cell) {
  cell.remove();
}
