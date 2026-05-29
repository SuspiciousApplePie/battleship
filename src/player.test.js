import { Player } from "./player.js";

describe("Player", () => {
  test("Human Player", () => {
    const player = Player(1);
    expect(player.type).toBe(1);
  });
  test("AI Player", () => {
    const player = Player(0);
    expect(player.type).toBe(0);
  });
  test("Out of range", () => {
    expect(() => Player(3)).toThrow("0 and 1 is only valid player types");
  });

  test("Player ship sunked", () => {
    const player = Player(1);
    player.board.placeShipHorizontal(1, 2, 4);
    player.board.recieveAttack(1, 2);
    player.board.recieveAttack(1, 3);
    player.board.recieveAttack(1, 4);
    player.board.recieveAttack(1, 5);
    expect(player.board.allShipSinked()).toBe(true);
  });

  test("Player recieve attack", () => {
    const player = Player(1);
    player.board.placeShipHorizontal(1, 2, 4);
    player.board.recieveAttack(1, 2);
    expect(player.board.allShipSinked()).toBe(false);
  });

  test("Player vertical ship recieved attack", () => {
    const player = Player(1);
    player.board.placeShipVertical(1, 1, 3);
    player.board.recieveAttack(1, 1);
    expect(player.board.allShipSinked()).toBe(false);
  });

  test("Player vertical ship sunked", () => {
    const player = Player(1);
    player.board.placeShipVertical(1, 1, 3);
    player.board.recieveAttack(1, 1);
    player.board.recieveAttack(2, 1);
    player.board.recieveAttack(3, 1);
    expect(player.board.allShipSinked()).toBe(true);
  });
});
