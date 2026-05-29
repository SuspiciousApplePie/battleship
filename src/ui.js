import { parentClass, mainParentClass } from "./constant.js";

export function createBoardContainer() {
  const boardContainer = document.createElement("div");
  boardContainer.className = mainParentClass.BOARD_CONTAINER;
  return boardContainer;
}

export function renderBoardContainer(boardContainer) {
  const main = document.querySelector(`.${parentClass.MAIN}`);
  main.appendChild(boardContainer);
}

export function createBoardBorder() {
  const boardBorder = document.createElement("div");
  boardBorder.className = mainParentClass.BOARD_BORDER;
  return boardBorder;
}

export function renderBoardBorder(boardBorder) {
  const boardContainer = document.querySelector(
    `.${mainParentClass.BOARD_CONTAINER}`,
  );
  boardContainer.appendChild(boardBorder);
}

export function createRandomizerBorder() {
  const randomizerBorder = document.createElement("div");
  randomizerBorder.className = mainParentClass.RANDOMIZER_BORDER;
  return randomizerBorder;
}

export function renderRandomizerBorder(randomizerBorder) {
  const container = document.querySelector(`.${parentClass.CONTAINER}`);
  const main = container.querySelector(`.${parentClass.MAIN}`);
  main.appendChild(randomizerBorder);
}
