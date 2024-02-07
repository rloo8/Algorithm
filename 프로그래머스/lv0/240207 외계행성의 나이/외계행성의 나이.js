function solution1(age) {
  var answer = "";
  const stringAge = String(age); // 숫자를 문자열로 바꿔줌

  let cnt = 0;
  while (cnt < stringAge.length) {
    if (stringAge[cnt] === 0) {
      answer = answer + "a";
    }
    if (stringAge[cnt] === 1) {
      answer = answer + "b";
    }
    // ...
    if (stringAge[cnt] === 9) {
      answer = answer + "j";
    }
    cnt = cnt + 1;
  }

  return answer;
}

////// ascii code 활용법 //////
// 컴퓨터는 0과 1밖에 모른다.
// 컴퓨터는 문자들을 모두 0과 1로 변환해서 생각한다.
// ascii code
// 문자열 0~9를 ascii code로 변환하면 48~57
// 문자열 a~j를 ascii code로 변환하면 97~106
// ascii code가 49 차이난다는 것을 활용해서 풀 수 있다.
function solution2(age) {
  var answer = "";
  const stringAge = String(age);

  let cnt = 0;
  while (cnt < stringAge.length) {
    // charCodeAt(index) : 문자를 ascii code로 바꿔줌
    // String.fromCharCode() : ascii code를 문자로 바꿔줌

    answer = answer + String.fromCharCode(stringAge[cnt].charCodeAt(0) + 49);

    cnt = cnt + 1;
  }

  return answer;
}

///// 알파벳 문자열 작성 /////
// 예시 23 -> "cd"
function solution3(age) {
  var answer = age // 23
    .toString() // "23"
    .split("") // ["2", "3"]
    .map((v) => "abcdefghij"[v]) // ["c", "d"]
    .join(""); // "cd"
  return answer;
}
