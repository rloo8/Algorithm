function solution1(num_list, n) {
  var answer = [];

  // 각 배열 만들어주기
  let arr = [];
  for (let i = 0; i < num_list.length; i++) {
    const item = num_list[i];
    arr.push(item);
    // arr의 길이가 n만큼 채워졌을 때, answer 배열에 넣어주고 arr 배열 다시 비워주기
    if (arr.length === n) {
      answer.push(arr);
      arr = [];
    }
  }

  return answer;
}

// splice() 메서드
// 기존 요소를 삭제하거나 교체하여 배열의 내용을 변경하며
// 제거된 요소가 담긴 별도의 배열을 새로 반환합니다.
function solution2(num_list, n) {
  var answer = [];

  while (num_list.length) {
    // index 0부터 n개 splice
    answer.push(num_list.splice(0, n));
  }

  return answer;
}
