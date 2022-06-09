/**
 * 타입 추론 기본
 */
let a; // 마우스 오버시 any 로 타입 추론
let b = 10; // 마우스 오버시 number 로 타입 추론
let c = 'abc'; // 마우스 오버시 string 로 타입 추론

// default value 를 설정하면 default value 의 타입으로 추론
function get(b = 10) {
  let c = 'hi';
  return b + c;
}

/**
 * 타입 추론 기본 2
 */
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
//
// let shoppingItem: Dropdown<string> = {
//   value: 'range',
//   title: 'electric',
// };

/**
 * 타입 추론 기본 3
 */
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  title: 'title',
  description: 'description',
  value: 'value',
  tag: 'tag',
};

/**
 * Best Common Type
 */
let arr = [1, 2, 3, true, 'string']; // number | boolean | string 유니온 타입으로 추론
