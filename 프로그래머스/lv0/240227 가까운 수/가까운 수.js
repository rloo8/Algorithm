function solution1(array, n) {
  var answer = 0;

  // 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 하기 위해 array 오름차순 정렬
  array.sort((a, b) => a - b);

  // 처음 최솟값을 정의해준다.
  let min = 100;

  for (let i = 0; i < array.length; i++) {
    const item = array[i];

    // 최솟값과 item과 n의 차이의 절대값을 비교
    if (min > Math.abs(n - item)) {
      min = Math.abs(n - item);
      answer = item;
    }
  }
  return answer;
}
