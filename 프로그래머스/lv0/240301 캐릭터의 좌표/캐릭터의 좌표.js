function solution(keyinput, board) {
  let x = 0;
  let y = 0;

  const [boardXSize, boardYSize] = board.map((b) => (b - 1) / 2);

  for (let i = 0; i < keyinput.length; i++) {
    const key = keyinput[i];

    if (key === "left" && x > -boardXSize) {
      x--;
    }
    if (key === "right" && x < boardXSize) {
      x++;
    }
    if (key === "up" && y < boardYSize) {
      y++;
    }
    if (key === "down" && y > -boardYSize) {
      y--;
    }
  }
  return [x, y];
}
