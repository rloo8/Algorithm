// 팩토리얼 함수 만들기 (n!)
function fac(n) {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result = result * i;
  }
  return result;
}

function solution(balls, share) {
  var answer = Math.round(fac(balls) / (fac(balls - share) * fac(share)));
  return answer;
}
