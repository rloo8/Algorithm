function solution(my_string) {
  let sum = 0;
  let currentNumber = 0;

  for (let i = 0; i < my_string.length; i++) {
    const char = my_string[i];

    //for문을 돌다가 숫자를 만났을 때,
    if (char >= "0" && char <= "9") {
      // 해당 숫자를 currentNumber에 담아준다.
      // 10의자리 이상인 숫자일 경우를 위해 currentNumber*10 필요
      // 1의자리 숫자일 경우 currentNumber가 0이기 때문에 해당 숫자 그대로 currentNumber가 된다.
      currentNumber = currentNumber * 10 + parseInt(char);
    } else {
      // 숫자가 끝났을 때
      // 지금까지 currentNumber를 sum에 더해주고,
      // currentNumber를 다시 0으로 돌려준다.
      sum += currentNumber;
      currentNumber = 0;
    }
  }

  // 마지막 글자가 숫자일 때를 위해
  sum += currentNumber;
  return sum;
}
