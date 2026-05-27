export function Ship(length) {
  let hitCount = 0;

  return {
    hit: () => {
      hitCount += 1;
    },

    isSunk: () => {
      return hitCount === length ? true : false;
    },
  };
}
