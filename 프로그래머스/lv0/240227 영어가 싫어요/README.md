# 문제 설명

영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

## 제한사항

<ul>
    <li>numbers는 소문자로만 구성되어 있습니다.</li>
    <li>numbers는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.</li>
    <li>1 ≤ numbers의 길이 ≤ 50</li>
    <li>"zero"는 numbers의 맨 앞에 올 수 없습니다.</li>
</ul>

## 입출력 예

<table class="table">
    <thead>
        <tr>
            <th>numbers</th>
            <th>result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>"onetwothreefourfivesixseveneightnine"</td>
            <td>123456789</td>
        </tr>
        <tr>
            <td>"onefourzerosixseven"</td>
            <td>14067</td>
        </tr>
    </tbody>
</table>

### 입출력 예 설명

#### 입출력 예 #1

"onetwothreefourfivesixseveneightnine"를 숫자로 바꾼 123456789를 return합니다.

#### 입출력 예 #2

"onefourzerosixseven"를 숫자로 바꾼 14067를 return합니다.
