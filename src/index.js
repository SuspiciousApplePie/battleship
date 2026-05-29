import "./styles/styles.css";
import {
  createBoardContainer,
  renderBoardContainer,
  createBoardBorder,
  renderBoardBorder,
} from "./ui.js";

const container = createBoardContainer();
renderBoardContainer(container);
const border1 = createBoardBorder();
renderBoardBorder(border1);
const border2 = createBoardBorder();
renderBoardBorder(border2);
