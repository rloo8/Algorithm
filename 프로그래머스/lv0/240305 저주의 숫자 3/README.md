# 문제 설명

3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.<br>

<table class="table">
    <thead>
        <tr>
            <th>10진법</th>
            <th>3x 마을에서 쓰는 숫자</th>
            <th>10진법</th>
            <th>3x 마을에서 쓰는 숫자</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>1</td>
            <td>6</td>
            <td>8</td>
        </tr>
        <tr>
            <td>2</td>
            <td>2</td>
            <td>7</td>
            <td>10</td>
        </tr>
        <tr>
            <td>3</td>
            <td>4</td>
            <td>8</td>
            <td>11</td>
        </tr>
        <tr>
            <td>4</td>
            <td>5</td>
            <td>9</td>
            <td>14</td>
        </tr>
        <tr>
            <td>5</td>
            <td>7</td>
            <td>10</td>
            <td>16</td>
        </tr>
    </tbody>
</table>
정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

## 제한사항

<ul>
    <li>1 ≤ n ≤ 100</li>
</ul>

## 입출력 예

<table class="table">
    <thead>
        <tr>
            <th>n</th>
            <th>result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>15</td>
            <td>25</td>
        </tr>
        <tr>
            <td>40</td>
            <td>76</td>
        </tr>
    </tbody>
</table>

### 입출력 예 설명

#### 입출력 예 #1

15를 3x 마을의 숫자로 변환하면 25입니다.

#### 입출력 예 #2

40을 3x 마을의 숫자로 변환하면 76입니다.
