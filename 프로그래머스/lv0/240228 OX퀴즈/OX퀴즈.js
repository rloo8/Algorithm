function solution(quiz) {
  return quiz.map((t) => {
    // 구조분해할당을 이용하여 수식과 결과값으로 나눠준다.
    const [calc, result] = t.split(" = ");

    // 연산자가 +면 1, -면 -1
    const sign = calc.includes("+") ? 1 : -1;
    // 연산자로 앞 뒤 값을 split
    const [a, b] = calc.split(sign === 1 ? " + " : " - ");

    return +a + +b * sign === +result ? "O" : "X";
  });
}
