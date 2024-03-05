// 1. 폭탄이 있는 위치를 [0, 0]으로 잡고 폭발 범위 생성
// 2. board[i][j]를 확인하여 1인지 찾기 (폭탄인지)
// 3. explosion(폭발 범위) 를 순회하며 board[i][j] (폭탄 위치) [i, j]에 explosion[index][0], explosion[index][1]을 더하여 폭발 범위 위치를 알아낸다.
// 4. 폭발 범위가 0이상 board.length를 벗어나지 않고, 0인 부분만 바꾸도록 한다.
// 5. 0의 개수를 센다.

function solution(board) {
  var answer = 0;
  // 1)
  var explosion = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      // 2)
      if (board[i][j] == 1) {
        // 3)
        // 폭탄 좌표(3,2) 를 구하고 해당 좌표에서 explosion의 좌표 (3 + [i], 2 + [j])를 해주면 폭발 범위가 된다.
        explosion.forEach((e) => {
          let [x, y] = e;
          [x, y] = [x + i, y + j];

          // 4)
          if (
            x >= 0 &&
            x < board.length &&
            y >= 0 &&
            y < board.length &&
            board[x][y] == 0
          ) {
            board[x][y] = 2;
          }
        });
      }
    }
  }

  // 5)
  for (let i = 0; i < board.length; i++) {
    board[i].forEach((e) => {
      if (e == 0) {
        answer += 1;
      }
    });
  }

  return answer;
}
