// i가 합성수인지 확인하는 함수
// 합성수라면 isCount가 true
const getIsCount = (i) => {
  let isCount = false;
  for (let num = 2; num < i - 1; num++) {
    if (i % num === 0) {
      isCount = true;
    }
  }
  return isCount;
};

function solution(n) {
  let answer = 0;

  // n부터 1까지 돌려서 합성수라면 answer 1 증가
  for (let i = n; i >= 1; i--) {
    const isCount = getIsCount(i);
    if (isCount) {
      answer += 1;
    }
  }

  return answer;
}
