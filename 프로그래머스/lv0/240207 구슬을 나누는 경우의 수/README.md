# 문제 설명

머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

## 제한사항

<ul>
    <li>1 ≤ balls ≤ 30</li>
    <li>1 ≤ share ≤ 30</li>
    <li>구슬을 고르는 순서는 고려하지 않습니다.</li>
    <li>share ≤ balls</li>
</ul>

## 입출력 예

<table class="table">
    <thead>
        <tr>
            <th>balls</th>
            <th>share</th>
            <th>result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>3</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>5</td>
            <td>3</td>
            <td>10</td>
        </tr>
    </tbody>
</table>

### 입출력 예 설명

#### 입출력 예 #1

서로 다른 구슬 3개 중 2개를 고르는 경우의 수는 3입니다.

#### 입출력 예 #2

서로 다른 구슬 5개 중 3개를 고르는 경우의 수는 10입니다.

## Hint

서로 다른 n개 중 m개를 뽑는 경우의 수 공식은 다음과 같습니다.
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/54c8b2b9-f88c-4a09-8956-7560ff7ea918/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-08-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.37.53.png">
