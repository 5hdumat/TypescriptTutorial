// 타입 호환

interface Avengers {
  name: string;
  skill: string;
}

class Ironman {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

/**
 * 자바였다면 Hero가 Avengers를 상속받지 않아 오류가 발생한다.
 * 하지만 자바스크립트는 객체 리터럴이나 익명 함수 등을 사용하기 때문에 명시적으로 타입을 지정하는 것 보다는 코드의 구조적인 관점에서 타입을 지정하는 것이 더 잘어울린다.
 * 무슨 말이냐 하면 명시된 객체보단 객체에 선언된 속성에 집중한다는 의미이다. 자바스크립트는 타입 별칭(interface, class)이 중요한게 아니다.
 *
 * 리터럴(literal)? 리터럴은 변수의 값이 변하지 않는 데이터(메모리 위치안의 값)를 의미
 * 익명 함수? 함수 코드가 변수에 지정된 상태
 */
let hero = new Ironman('tony');
function assemble(hero: Avengers) {
  return hero;
}

/**
 *
 구조적으로 속성의 수가 더 많은 Avengers에 Ironman을 기입하면 호환되지 않는다.
  */
// assemble(hero);

/**
 * 함수
 */

let add = (a: Number) => {};

// 구조적으로 add 보다 더 크다.
// 그러므로 sum은 add를 포함할 수 있다.
let sum = (a: number, b: number) => {};

// add = sum // TS2322: Type '(a: number, b: number) => void' is not assignable to type '(a: Number) => void'.
sum = add;

/**
 * 제네릭
 */

interface Empty<T> {}

let empty1: Empty<string>;
let empty2: Empty<number>;

interface NotEmpty<T> {
  data: T;
}

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;

// 두 변수는 string과 number라는 타입 차이가 있으므로 서로 호환 불가능
// notEmpty1 = notEmpty2; // Error
// notEmpty2 = notEmpty1; // Error
