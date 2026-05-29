import {
  parentClass,
  mainParentClassContainers,
  mainParentClassBorders,
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
