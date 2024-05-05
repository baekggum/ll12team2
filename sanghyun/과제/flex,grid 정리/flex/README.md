# Flex
사용 목적 : Flex는 웹 레이아웃을 할때 주로 사용하며, 일차원 배열을 정렬시켜 보여줄때 많이 사용한다. 내부의 요소들을 수직 또는 수평 축으로 쉽게 정렬하게 해준다.  

Flex는 container와 item으로 나뉜다. container는 item들을 감싸는 부모요소이고, item은 container에 속하여 하나의 자식요소로 존재한다.

container와 item에 적용되는 속성은 구분되어 있다.

## Flex Container

### display 속성
`display : flex` : container가 block 특성을 가짐, 수직으로 쌓임  
`display : inline-flex` : container가 inline 특성을 가짐, 수평으로 쌓임   
- flex와 관련된 요소는 display로 설정되어 있지 않으면 속성이 적용이 되지 않는다.

### flex-flow 속성
`flex-flow` 은 `flex-direction`과 `flex-wrap`을 함께 정의한다.   

`flex-direction` 은 아이템 내부가 가로/세로 어떻게 배열되는지 정하는 속성 
- 기본 값은 `flex-direction : row `

![](https://www.heropy.dev/postAssets/Ha29GI/flex-direction.jpg)

`flex-wrap` 은 아이템들이 화면 크기에 따라 줄바꿈 되어지는지에 대한 속성  
- 기본 값은 `flex-wrap : nowrap`

![](https://www.heropy.dev/postAssets/Ha29GI/flex-wrap.jpg)


### justify-content 속성

`justify-content` 은 container의 주축에 대한 정렬 방법이다. row라면 가로, column이라면 세로가 주축이 될것이다.  

![justify-content 이미지](https://www.heropy.dev/postAssets/Ha29GI/flex-justify-content.jpg)

### align-content 속성

`align-content` 은 container의 교차축에 대한 정렬방법이다.
- `flex-wrap` 속성을 통해 Items가 여러 줄(2줄 이상)이고 여백이 있을 경우만 사용할 수 있습니다.

![](https://www.heropy.dev/postAssets/Ha29GI/flex-align-content.jpg)

### align-items 속성

`align-items` 은 container의 교차축에 대한 정렬방법이다.
- items가 한 줄일 경우가 많다.
- Items가 `flex-wrap`을 통해 여러 줄(2줄 이상)일 경우에는 `align-content` 속성이 우선합니다.
따라서 `align-items`를 사용하려면 `align-content` 속성을 기본값(stretch)으로 설정해야 합니다.

![](https://www.heropy.dev/postAssets/Ha29GI/flex-align-items.jpg)

### align-content와 align-items 차이점

`align-content`는 컨테이너 내에 여러줄이 있을 때, 이 줄들 사이 및 전체적인 정렬을 결정한다
`align-items`는 컨테이너 내에 한줄이 있을 때 많이 사용하고, 각 줄에 대한 교차축에 있어서의 정렬을 결정한다.

### gap 설정

`gap` 은 각 아이템 사이의 간격을 설정한다.
- px, em 등 다양한 단위로 설정할 수 있다.  

## Flex Items

### order 속성
`order`의 작은 값 순서대로 정렬시킨다.
- 기본 값은 0

### flex 속성

`flex`는  `flex-grow`, `flex-shrink`, `flex-basis` 속성을 단축하여 정의한다.

`flex-grow` 속성은 플렉스 아이템이 플렉스 컨테이너 내의 남은 공간을 어떻게 채울지 결정하는 속성이다. 값이 0이면, 아이템은 기본 크기 이상으로 커지지 않지만, 값이 1 이상이면, 해당 아이템은 남은 공간을 비율을 따져서 공간을 차지한다. 
- 기본 값은 0

`flex-shrink` 속성은 플렉스 컨테이너의 크기가 줄어들 때 플렉스 아이템의 크기가 어떻게 감소할지 결정하는 속성이다.기본값은 1이며, 이는 아이템이 필요에 따라 축소될 수 있음을 의미합니다. 만약 값이 0이라면, 컨테이너의 크기가 줄어들어도 해당 아이템의 크기는 줄어들지 않는다.
- 기본 값은 0

`flex-basis` 속성은 플렉스 아이템의 초기 크기를 설정합니다. 이 값은 아이템의 기본 크기를 결정하며, width나 height와 유사하게 작동한다. 값으로는 px, em ,%등이 있고, 또는 auto를 사용할 수 있습니다. auto는 아이템의 컨텐츠 크기에 따라 결정됩니다.
- 기본 값은 auto  

**단축 속성인 `flex`에서 `flex-basis` 값을 생략할 경우 0이 적용된다. 
` flex: 1;` , `flex: 1 1;`은 `flex: 1 1 0;`이 된다.**

### align-self 속성

교차 축에서 개별 item의 정렬 방법을 설정한다.

**일부 item만 정렬 방법을 변경하려고 할 경우 `align-self`를 사용한다. 이 속성은 `align-items` 속성보다 우선시된다.**


[참조](https://www.heropy.dev/p/Ha29GI)