function solution(my_string) {
  var answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    // 숫자로 변환
    // 숫자가 아니면 NaN 반환하기 때문에 NaN인지 검사해서 아니라면(숫자라면) answer에 더해준다.
    const item = Number(my_string[i]);
    if (!isNaN(item)) {
      answer += item;
    }
  }
  return answer;
}
