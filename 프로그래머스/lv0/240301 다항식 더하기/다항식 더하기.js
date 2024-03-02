function solution(polynomial) {
  var answer = [];
  let x = [];
  let num = [];
  let resultX = 0;
  let resultNum = 0;

  // "+"연산자를 제외한 배열을 만들어준다.
  let arrPoly = polynomial.split(" + ");

  // x항과 숫자항 각각의 배열을 만들어준다.
  for (let i = 0; i < arrPoly.length; i++) {
    const item = arrPoly[i];
    if (item.includes("x")) {
      x.push(item);
    } else {
      num.push(item);
    }
  }

  for (let j = 0; j < x.length; j++) {
    // x앞의 숫자를 구하기 위해 x를 없애준다.
    const item = x[j].replace("x", "");

    // 1x였을 것을 생각해서 경우를 나눠준다.
    if (item === "") {
      resultX++;
    } else {
      resultX += Number(item);
    }
  }

  for (let k = 0; k < num.length; k++) {
    const item = Number(num[k]);
    resultNum += item;
  }

  // resultX값과 resultNum을 answer 배열에 넣어준다.
  if (resultX !== 0) {
    if (resultX === 1) {
      answer.push("x");
    } else {
      answer.push(resultX + "x");
    }
  }
  if (resultNum !== 0) {
    answer.push(resultNum);
  }

  // 배열을 " + "로 연결하여 문자열으로 반환
  return answer.join(" + ");
}
