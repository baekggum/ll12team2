<h1>3주차 알게 된 내용</h1>

1. CSS는 프로그래밍 언어가 아니다.
왜냐하면 데이터를 다루기 위한 논리적인 로직을 짤 수 없기 때문이다.

2. 
- HTML Tags :
`<div></div> `

- HTML Elements :
`<div>hello</div>`

3. CSS를 적용시키는 방법
- `<head>`태그 안에`<link rel="stylesheet" href="style.css">`를 적어서 css 파일 적용
- `<body>`태그 안에 `<style>`를 이용하여 적용
- 태그 안에 `<div style="color : red;" >` 이런식으로 css 적용하기

4. CSS의 id, class 선택자는 숫자로 시작하면 적용을 할 수 없다.
예)
html : `<p class=3rd>hello</p>`
css : .3rd{border : 1px solid pink;} => css 적용이 안된다.

5. box-sizing: border-box;
-  border나 padding을 추가하면 해당 box의 크기는 그만큼 더 커지지 않고 사용자가 지정한 너비나 높이만큼 길이에 맞추게 된다. border값이나 padding 값는 지정한  width값이나 height값에 포함이 되어 적용된다.
