import {
  parentClass,
  mainParentClassContainers,
  mainParentClassBorders,
  boardClass,
} from "./constant.js";

export function createBoardContainer() {
  const boardContainer = document.createElement("div");
  boardContainer.className = mainParentClassContainers.BOARD_CONTAINER;
  return boardContainer;
}

export function renderBoardContainer(boardContainer) {
  const main = document.querySelector(`.${parentClass.MAIN}`);
  main.appendChild(boardContainer);
}

export function createBoardBorder() {
  const boardBorder = document.createElement("div");
  boardBorder.className = mainParentClassBorders.BOARD_BORDER;
  return boardBorder;
}

export function renderBoardBorder(boardBorder) {
  const boardContainer = document.querySelector(
    `.${mainParentClassContainers.BOARD_CONTAINER}`,
  );
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

export function renderBoard(board) {
  const main = document.querySelector(`.${parentClass.MAIN}`);
  const boardBorder = main.querySelectorAll(
    `.${mainParentClassBorders.BOARD_BORDER}`,
  );

  boardBorder.forEach((boardBorder) => {
    const clone = board.cloneNode(true);
    boardBorder.appendChild(clone);
  });
}

export function createMenuContainer() {
  const menuContainer = document.createElement("div");
  menuContainer.className = mainParentClassContainers.MENU_CONTAINER;
  return menuContainer;
}

export function renderMenuContainer(menuContainer) {
  const main = document.querySelector(`.${parentClass.MAIN}`);
  main.appendChild(menuContainer);
}

export function createMenuBorder() {
  const menuBorder = document.createElement("div");
  menuBorder.className = mainParentClassBorders.MENU_BORDER;
  return menuBorder;
}

export function renderMenuBorder(menuBorder) {
  const container = document.querySelector(`.${parentClass.CONTAINER}`);
  const menuContainer = container.querySelector(
    `.${mainParentClassContainers.MENU_CONTAINER}`,
  );
  menuContainer.appendChild(menuBorder);
}
