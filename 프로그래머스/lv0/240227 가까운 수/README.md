# 문제 설명

정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

## 제한사항

<ul>
    <li>1 ≤ array의 길이 ≤ 100</li>
    <li>1 ≤ array의 원소 ≤ 100</li>
    <li>1 ≤ n ≤ 100</li>
    <li>가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.</li>
</ul>

## 입출력 예

<table class="table">
    <thead>
        <tr>
            <th>array</th>
            <th>n</th>
            <th>result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>[3, 10, 28]</td>
            <td>20</td>
            <td>28</td>
        </tr>
        <tr>
            <td>[10, 11, 12]</td>
            <td>13</td>
            <td>12</td>
        </tr>
    </tbody>
</table>

### 입출력 예 설명

#### 입출력 예 #1

3, 10, 28 중 20과 가장 가까운 수는 28입니다.

#### 입출력 예 #2

10, 11, 12 중 13과 가장 가까운 수는 12입니다.
