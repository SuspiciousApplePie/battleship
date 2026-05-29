export function Ship(length) {
  let hitCount = 0;

  const isSunk = () => {
    return hitCount === length ? true : false;
  };

  return {
    hit: () => {
      if (!isSunk()) hitCount += 1;
    },
    isSunk,
  };
}
