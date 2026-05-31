import {
  mainParentClassContainers,
  mainParentClassBorders,
  boardClass,
} from "./constant.js";

export function createBoardContainer() {
  const boardContainer = document.createElement("div");
  boardContainer.className = mainParentClassContainers.BOARD_CONTAINER;
  return boardContainer;
}

export function renderBoardContainer(boardContainer, main) {
  main.appendChild(boardContainer);
}

export function createBoardBorder(id) {
  const boardBorder = document.createElement("div");
  boardBorder.className = mainParentClassBorders.BOARD_BORDER;
  boardBorder.id = id;
  return boardBorder;
}

export function renderBoardBorder(boardBorder, boardContainer) {
  boardContainer.appendChild(boardBorder);
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
    board.appendChild(cell);

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
  boardBorder.appendChild(board);
}

export function createMenuContainer() {
  const menuContainer = document.createElement("div");
  menuContainer.className = mainParentClassContainers.MENU_CONTAINER;
  return menuContainer;
}

export function renderMenuContainer(menuContainer, main) {
  main.appendChild(menuContainer);
}

export function createMenuBorder() {
  const menuBorder = document.createElement("div");
  menuBorder.className = mainParentClassBorders.MENU_BORDER;
  return menuBorder;
}

export function renderMenuBorder(menuBorder, menuContainer) {
  menuContainer.appendChild(menuBorder);
}

export function markAsOccupied(cell) {
  cell.classList.add(boardClass.OCCUPIED);
}

export function markAsMissed(cell) {
  cell.classList.add(boardClass.MISSED);
}

export function markAsDestroyed(cell) {
  cell.classList.add(boardClass.DESTROYED);
}
