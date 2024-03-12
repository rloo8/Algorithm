function solution(n) {
  let arr = [];
  for (let i = 1; i < 300; i++) {
    if (i % 3 !== 0 && !i.includes("3")) {
      arr.push(i);
    }
  }
  console.log(arr);
  return arr[n - 1];
}
