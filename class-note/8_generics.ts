// function logText(text) {
//   console.log(text);
//   return text;
// }
//
// logText(10); // number
// logText('하이'); // string
// logText(true); // boolean

// function logText<T>(text: T) {
//   console.log(text);
//   return text;
// }
//
// logText<number>(10);
// logText<string>('하이');

/**
 * 기존 타입 정의 방식와 제네릭의 차이점
 * - 기존 방식의 경우 타입마다 함수를 선언해줘야 함 (불필요한 함수 선언)
 * - 유니온 타입을 이용해 함수 선안한다 해도 각 타입이 수행할 수 있는 특정 함수를 수행할 수 없음 (어떤 타입이 들어올지 모르므로)
 */
// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }
//
// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// logText('a');
// logNumber(10);

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }
//
// let a = logText('a');
// // a.split(''); // 에러 (타입을 정확히 알아야만 split 사용 가능 -> 유니온 타입의 문제점 )
// logText(10);

/**
 * 제네릭의 장점
 * - 제네릭을 사용해 타입을 지정해주면 유니온 타입을 이용해 함수를 선언했을 때의 문제점을 해결할 수 있음
 */
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

let a = logText<string>('string');
a.split(''); // 제네릭을 사용하면 string만 사용할 수 있는 split() 사용 가능
const login = logText<boolean>(true);
login.valueOf();

// 인터페이스에 제네릭 선언하기
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = {
//   value: 10, // 오류
//   selected: false
// }

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<number> = {
  value: 10,
  selected: false,
};

// 제네릭의 타입 제한 1 - T 타입을 배열로 활용하겠다는 추가적인 타입 힌트 명시
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length); // 타입 힌트로 인해 배열의 특정 속성(.length) 접근 가능
  return text;
}

logTextLength<string>(['hi']);

// 제네릭의 타입 제한 2 - 정의된 타입 이용
interface LengthType {
  length: number;
  mingyu: string;
}

// 제네릭 타입은 LengthType 의 하위 타입일것을 명시
// (LengthType에 존재하는 모든 속성을 가지고 있어야 함)
function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength2({ length: 10, mingyu: '10' });

// 제네릭의 타입 제한 3 - keyof 예약어 사용
// 인터페이스에 이미 정의되어있는 타입 중 키값들만 들어갈 수 있다.
interface ShoppingItem {
  name;
  price;
  stock;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption('a');

getShoppingItemOption('name');
