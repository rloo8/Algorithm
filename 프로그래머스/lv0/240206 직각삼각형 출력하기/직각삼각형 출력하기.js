const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const n = Number(input[0]);

  // n이 주어지면 n번 줄의 별 개수가 n개
  let line = 1; // 줄 개수

  // 한 줄씩 반복문
  while (line <= n) {
    let starStr = "";

    let cnt = 0;
    while (cnt < line) {
      starStr = starStr + "*";
      cnt = cnt + 1;
    }
    console.log(starStr);

    line = line + 1;
  }

  // for (let i = 1; i <= n; i++) {
  //   console.log("*".repeat(i));
  // }
});
