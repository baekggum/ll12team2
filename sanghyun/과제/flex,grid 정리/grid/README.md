# Grid

사용 목적 : Grid는 웹 레이아웃을 할때 주로 사용하며, 이차원 배열을 정렬시켜 보여줄때 많이 사용되며, Flex보다 복잡한 레이아웃을 위해 사용된다.

Grid도 Flex 처럼 container와 item으로 나뉜다. container는 item들을 감싸는 부모요소이고, item은 container에 속하여 하나의 자식요소로 존재한다.

container와 item에 적용되는 속성은 구분되어 있다.

## Grid 관련 용어 정리

### Track   
Track은 Grid 내부에서 하나의 행(row) 또는 열(column)이다.  `grid-template-columns`와 `grid-template-rows` 속성으로 설정할 수 있다.

![](https://www.heropy.dev/postAssets/c6ROLZ/track-1.jpg)

### Gutter
Gutter 은 Grid에서 track과 track 사이의 간격을 말한다. `gap`, `row-gap`, `column-gap` 속성으로 설정할 수 있다. 

![](https://www.heropy.dev/postAssets/c6ROLZ/line-1.jpg)

### Cell
Cell은 Grid 내부에서 Item이 배치되는 최소 단위의 Area를 말한다.

![](https://www.heropy.dev/postAssets/c6ROLZ/cell-1.jpg)

## Grid Container 

### display 속성
`display : grid` : container가 block 특성을 가짐, 수직으로 쌓임  
`display : inline-grid` : container가 inline 특성을 가짐, 수평으로 쌓임   

### grid-template-columns, grid-template-rows
명시적인 행과 열의 크기를 정한다. 각 라인의 이름을 지을 수도 있다. ` repeat()`함수를 많이 이용한다.

100px 3개의 컬럼을 만들고 싶을 경우  

    grid-template-columns: 100px 100px 100px;  

`repeat()` 함수를 이용해서 이렇게도 정의할 수 있음  

    grid-template-columns: repeat(3, 100px);

### grid-areas
Grid Item의 이름을 지을 수 있는 속성인 `grid-area`를 참조하여 Grid 템플릿을 생성한다.   
Grid Item의 이름을 사용하여 각 위치를 표처럼 지정해 줄 수 있다.  
`.` 및 `none`으로 비어있는 셀을 표현할 수 있다.
  

     grid-template-areas:  
        "header header header"  
        "main . ."  
        "main . aside"  
        "footer footer footer"; 

### grid-template
`grid-template-columns`, `grid-template-rows`, `grid-areas`을 단축한 속성이다.

    .container {
    display: grid;
    grid-template:
        "header header header" 80px
        "main main aside" 350px
        "footer footer footer" 130px
        / 2fr 100px 1fr;
    }  
    
이것을 나누어 적으면 이렇게 해석된다.

    .container {
        display: grid;
        grid-template-rows: 80px 350px 130px;
        grid-template-columns: 2fr 100px 1fr;
        grid-template-areas:
            "header header header"
            "main main aside"
            "footer footer footer";
    }; 

### row-gap, column-gap, gap
Track과 Track 사이인 Gutter의 크기를 정하는 속성이다.
`row-gap`은 행과 행사이의 간격을, `column-gap`은 열과 열사이의 간격을 말한다.  
`gap`은 `row-gap` 과 `column-gap`을 단축으로 지정하는 속성이다.  

    gap: (row-gap) (column-gap);

### grid-auto-columns, grid-auto-rows
`grid-template-columns`, `grid-template-row`로 정의되지 않은 외부의 공간에 grid item이 위치하게 될 경우 적용시키는 track의 크기이다.

만약 `grid-template-columns`, `grid-template-row`로 2x2의 공간만 만들었을 경우이다.

![](https://www.heropy.dev/postAssets/c6ROLZ/grid-auto-rows-1.jpg)

### grid-auto-flow
따로 배치에 대해 정의하지 않은 Grid Item에 대해 어떻게 배치할지에 대해 정의한다.

row : 각 행 축을 따라 차례로 배치
row dense 각 행 축을 따라 차례로 배치, 빈 영역을 메운다.
![](https://www.heropy.dev/postAssets/c6ROLZ/grid-auto-flow-1.jpg)	

column : 각 열 축을 따라 차례로 배치
column dense : 각 열 축을 따라 차례로 배치, 빈 영역을 메운다.
![](https://www.heropy.dev/postAssets/c6ROLZ/grid-auto-flow-2.jpg)

### align-content, justify-content
Grid 안의 Contents를 어떻게 정렬할지에 대해 정의한다.
`align-content`는 세로방향을 기준으로 정렬한다.
![](https://www.heropy.dev/postAssets/c6ROLZ/align-content-1.jpg)

`justify-content`는 가로방향 기준으로 정렬한다.
![](https://www.heropy.dev/postAssets/c6ROLZ/justify-content-1.jpg)

### align-items, justify-items
Grid Item들을 어떻게 정렬할지에 대해 정의한다.  

`align-items`는 세로방향을 기준으로 정렬한다.
![](https://www.heropy.dev/postAssets/c6ROLZ/align-items-1.jpg)

`justify-items`는 가로방향을 기준으로 정렬한다.
![](https://www.heropy.dev/postAssets/c6ROLZ/justify-items-1.jpg)


## Grid Item

### grid-row-start, grid-row-end, grid-column-start, grid-column-end

Grid Item의 시작과 끝의 위치를 지정하는 속성이다.

    .item:nth-child(1) {
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 2;
        grid-column-end: 4;
    }

![](https://www.heropy.dev/postAssets/c6ROLZ/grid-area-1.jpg)

`span` 키워드를 이용하여 배치할 수도 있다. `span`와 숫자를 조합하면 숫자만큼 라인을 확장할 수 있다.  
적지 않은 경우 `span 1`이 기본 값이다.  

    .item:nth-child(1) {
        /* Row 1번에서 3번(1+2=3)까지 */
        grid-row-start: 1;
        grid-row-end: span 2;

        /* Column 2번에서 3번(2+1=3)까지 */
        grid-column-start: 2;
        /* grid-column-end: span 1; (생략) */
    }
![](https://www.heropy.dev/postAssets/c6ROLZ/grid-area-3.jpg)

### grid-row, grid-column
`grid-row`는 `grid-row-start`과 `grid-row-end`의 단축 속성이고, 각 속성을 `/`로 구분한다.

    .item {
    grid-row: <grid-row-start> / <grid-row-end>;
    }

`grid-column`는 `grid-column-start`과 `grid-column-end`의 단축 속성이고, 각 속성을 `/`로 구분한다.

    .item {
    grid-column: <grid-column-start> / <grid-column-end>;
    }

### grid-area
`grid-row-start`, `grid-column-start`, `grid-row-end`,  `grid-column-end`의 단축 속성이다.
혹은 `grid-template-areas`에서 참조할 area의 이름을 설정할 수 있다.  
만약 영역 이름을 설정할 경우 `grid-row`와 `grid-column` 설정 값은 무시된다.

    .item {
    grid-area: <grid-row-start> / <grid-column-start> / <grid-row-end> / <grid-column-end>;
    grid-area: 영역이름;
    }

### align-self, justify-self
단일 Grid Item을 정렬하는데 쓰인다.
`align-self`는 세로 방향을 기준으로 정렬한다.

![](https://www.heropy.dev/postAssets/c6ROLZ/align-self-1.jpg)

`justify-self`는 가로 방향을 기준으로 정렬한다.
![](https://www.heropy.dev/postAssets/c6ROLZ/justify-self-1.jpg)

### order
Grid Item이 자동 배치되는 순서를 변경할 수 있고, 숫자가 작을 수록 앞에 위치된다. 기본 값은 `0`이다.

    .item:nth-child(1) { order: 1; }
    .item:nth-child(3) { order: 5; }
    .item:nth-child(5) { order: -1; }

![](https://www.heropy.dev/postAssets/c6ROLZ/order-1.jpg)

### z-index
Grid Item이 쌓이는 순서를 변경할 수 있다. 값이 클수록 상위에 배치되어 보다 더 앞에 위치하게 된다. 기본 값은 `auto`이지만 나머지 요소들이 지정되어 있지 않을 경우 `0`이다.

    .item:nth-child(1) {
    grid-area: 1 / 1 / 2 / 3;
    }
    .item:nth-child(2) {
    grid-area: 1 / 2 / 3 / 3;
    z-index: 1;
    }
    .item:nth-child(3) {
    grid-area: 2 / 2 / 3 / 4;
    }

![](https://www.heropy.dev/postAssets/c6ROLZ/z-index-1.jpg)

## Grid Function

### repeat()
`repeat()` 함수는 행/열(Track)의 크기 정의를 반복하는데 사용한다.
`grid-template-rows`와 `grid-template-columns`에서 사용한다.

### minmax()
`minmax()` 함수를 이용해서 행/열(Track)의 최소/최대 크기를 지정할 수 있다.
첫 번째 인수는 '최솟값'이고 두 번째 인수는 '최댓값'입니다.
`grid-template-rows`, `grid-template-columns`, `grid-auto-rows`, `grid-auto-columns에서` 사용한다.

    grid-template-columns: minmax(100px, 1fr) minmax(200px, 400px);

브라우저의 크기에 따라 트랙의 크기를 동적으로 설정할 때 주로 많이 사용한다. 
트랙의 크기가 너무 작아지거나 커지는 것을 방지하여 레이아웃을 유지하는데 사용된다.


### fit-content()
`fit-content()` 함수는 행/열(Track)의 크기를 그리드 아이템(Item)이 포함하는 내용(Contents) 크기에 맞춥니다.

    .container {
    grid-template-columns: fit-content(300px) fit-content(300px);
    }

![](https://www.heropy.dev/postAssets/c6ROLZ/fit-content-1.jpg)

## Grid Units
### auto-fill, auto-fit
행/열(Track)의 개수를 그리드 컨테이너(Container) 및 행/열 크기에 맞게 자동으로 조정한다.
repeat() 함수와 같이 사용하며, 행/열과 아이템(Item) 개수가 명확할 필요가 없거나 명확하지 않은 경우 유용하게 쓰인다. 반응형 웹을 만들때 많이 사용된다.

    .container {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    }

![](https://www.heropy.dev/postAssets/c6ROLZ/auto-fill-2.jpg)

`auto-fill`은 Grid Container안에 가능한 많은 Track의 수를 확보하려한다. Grid Item 수가 변하지 않을 경우에 유용하다.

`auto-fit`은 사용 가능 공간을 기준으로 Track의 수를 조절한다. 빈 Track이 있을 경우 제거되기 때문에, 빈 공간 없이 채울 때 유용하다.

![](https://www.heropy.dev/postAssets/c6ROLZ/auto-fill-3.jpg)


[참조](https://www.heropy.dev/p/c6ROLZ)