const number = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(numbers) {
  for (let i = 0; i < number.length; i++) {
    numbers = numbers.split(number[i]).join(i);
  }

  return +numbers;
}

// numbers가 "onefourzerosixseven" 일 때,

// for문 - i가 0
// split("zero") // ["onefour","sixseven"]
// join(0) // "onefour0sixseven"

// for문 - i가 1
// split("one") // ["","four0sixseven"]
// join(1) // "1four0sixseven"

// for문 - i가 2
// split("two") // ["1four0sixseven"]
// join(2) // "1four0sixseven"

// ...  for문 - i가 4
// split("four") // ["1","0sixseven"]
// join(4) // "140sixseven"
