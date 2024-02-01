function solution1(numbers) {
  let sum = 0; // 총합 저장 변수

  // sum = sum + numbers[0]
  // sum = sum + numbers[1]
  // sum = sum + numbers[2]
  // 이렇게 계속 총합을 저장해줘야한다.

  // 반복문으로 작성
  let cnt = 0;
  while (cnt < numbers.length) {
    sum = sum + numbers[cnt];
    cnt = cnt + 1;
  }

  return sum / numbers.length;
}

// 고차 배열 메소드, reduce 활용법
function solution2(numbers) {
  var answer = numbers.reduce(a, (b) => a + b, 0);
  return answer / numbers.length;
}
