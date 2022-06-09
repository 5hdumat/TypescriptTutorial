// 타입 단언
let a; // any
let b = 10; // number
let c = a; // any

a = 20;
a = 'a';
let d = a; // 개발자들이 봤을 떈 d는 string이 될 것 같지만 any가 된다.
let e = a as string; // 때문에 'as'를 사용해 타입을 단언할 수 있다.

// Dom API(웹페이지의 태그 정보를 접근하고 조작할 수 있는 API) 조작

/**
 * <div id="app">hi</div> 라는 태그가 있다고 가정했을 때 querySelector 에 div 태그를 넣으면 HTMLElementTagNameMap interface에 정의되어있는 Key 로
 * HTMLDivElement 라는 타입 추론이 이루어진다.
 * 때문에 div 태그의 innerHtml 속성을 이용할 수 있다.
 * 하지만 문제가 있는데 div의 innerHTML 속성을 사용하고자 하는 시점에 dom에 태그가 렌더링되지 않았을 수도 있다.
 * 하여 조건문으로 div 태그를 체크한 후 그려줘야 한다. 번거롭다.
 */
let div = document.querySelector('div');
if (div) div.innerHTML;

/**
 * 번거로움을 해소하고자 이런 경우 타입 단언을 사용하게 된다.
 * 타입 단언은 타입스크립트한테 "야 이거 내가 너보다 잘 알아 그러니까 이 값이 뭐가 들어오든 신경쓰지마" 와 같기 때문에 개발자가 정말 주의해서 타입 정의를 잘해줘야 하며,
 * 단언한 타입이 실제로 수행하는 시점의 타입이라는 것을 엔지니어가 로직으로 보장해야한다.
 */
let div2 = document.querySelector('div') as HTMLDivElement;
div2.innerHTML;
