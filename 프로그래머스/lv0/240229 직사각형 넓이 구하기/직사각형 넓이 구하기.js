function solution1(dots) {
  // 2중배열을 오름차순으로 정렬해준다.
  dots.sort((a, b) => a[0] - b[0]);

  const dot0 = dots[0];
  const dot1 = dots[1];
  const dot2 = dots[2];
  const dot3 = dots[3];

  const x = Math.abs(dot0[1] - dot1[1]);
  const y = Math.abs(dot2[0] - dot0[0]);

  return x * y;
}

function solution2(dots) {
  // Set으로 각 배열의 x좌표, y좌표에 중복되는 값들을 빼준다.
  const x = [...new Set(dots.map((p) => p[0]))];
  const y = [...new Set(dots.map((p) => p[1]))];

  return Math.abs((x[0] - x[1]) * (y[0] - y[1]));
}
