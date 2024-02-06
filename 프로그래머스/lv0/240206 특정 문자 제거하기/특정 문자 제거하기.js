function solution1(my_string, letter) {
  var answer = "";

  // 반복문으로 my_string의 글자가 letter와 다르면 answer에 넣기
  let cnt = 0;
  while (cnt < my_string.length) {
    if (my_string[cnt] !== letter) {
      answer = answer + my_string[cnt];
    }
    cnt = cnt + 1;
  }

  return answer;
}

// letter를 기준으로 배열 나누기(split)
// 나눈 배열을 문자열로 다시 합치기(join)
function solution2(my_string, letter) {
  const answer = my_string.split(letter).join("");
  return answer;
}
