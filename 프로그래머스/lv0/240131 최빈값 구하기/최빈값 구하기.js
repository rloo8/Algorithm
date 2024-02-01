function solution(array) {
  let sortedArray = array.sort((a, b) => a - b);

  let cnt = 0;
  let choi = -1; // 최빈값
  let choiRepeat = 0; // 최빈값이 될 때, 몇 번 등장해서 됐는지
  let beforeNumber = -1; // 지금 보고있는 숫자의 이전 숫자
  let repeatCnt = 0; // 똑같은 숫자가 몇 번 등장했는지
  let isDupChoi = false; // 최빈값이 중복인지

  while (cnt < array.length) {
    // 지금 보고 있는 숫자가 이전 숫자와 다르면
    if (beforeNumber !== array[cnt]) {
      repeatCnt = 1; // 한 번 등장했다.
    } else {
      // 같으면
      repeatCnt = repeatCnt + 1; // 한번 더 등장했다. (+1)
    }

    // 지금 세고 있는 등장횟수가 가장 많이 등장한 값의 등장횟수보다 클 때
    if (repeatCnt > choiRepeat) {
      // 새로운 최빈값이 된다.
      choi = array[cnt];
      choiRepeat = repeatCnt;
      isDupChoi = false;
    }

    // 최빈값 중복 여부 확인
    if (choi !== array[cnt] && repeatCnt === choiRepeat) {
      isDupChoi = true;
    }

    beforeNumber = array[cnt];
    cnt = cnt + 1;
  }

  // 최빈값 중복 시 -1 반환, 아닐 시 최빈값 반환
  if (isDupChoi) return -1;
  return choi;
}
