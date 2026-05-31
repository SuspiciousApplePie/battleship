import { parentClass, mainParentClassBorders } from "./constant.js";
import {
  createBoardContainer,
  createBoardBorder,
  createBoard,
  renderBoardContainer,
  renderBoardBorder,
  renderBoard,
  createMenuBorder,
  renderMenuBorder,
  createRandomizeBtn,
  createStartButton,
  renderBtn,
} from "./ui.js";

import { menuOperation, populateBoardWithShip } from "./gameEvent.js";

import "./styles/styles.css";
const main = document.querySelector(parentClass.MAIN);

export function init() {
  const boardContainer = createBoardContainer();
  renderBoardContainer(boardContainer, main);

  const leftBorder = createBoardBorder(mainParentClassBorders.PLAYER_1);
  renderBoardBorder(leftBorder, boardContainer);

  const rightBorder = createBoardBorder(mainParentClassBorders.PLAYER_2);
  renderBoardBorder(rightBorder, boardContainer);

  const leftBoard = createBoard();
  renderBoard(leftBoard, leftBorder);

  const rightBoard = createBoard();
  renderBoard(rightBoard, rightBorder);

  const menuBorder = createMenuBorder();
  renderMenuBorder(menuBorder, main);

  const randomizeBtn = createRandomizeBtn();
  renderBtn(randomizeBtn, menuBorder);

  const startBtn = createStartButton();
  renderBtn(startBtn, menuBorder);
  populateBoardWithShip(mainParentClassBorders.PLAYER_1);
  menuBorder.addEventListener("click", menuOperation);
}
