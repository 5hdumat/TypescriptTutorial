// 타입과 인터페이스의 차이점은?
// 1. 타입 별칭 호버 시 정의한 타입의 프리뷰를 정확하게 확인 가능
// 2. 인터페이스는 확장 가능하지만, 타입 별칭은 확장 불가능. (좋은 소프트웨어는 언제나 확장이 용이해야 한다. 즉 인터페이스 사용을 권장한다.)

//
// interface Person {
//   name: string;
//   age: number;
// }

type Person = {
  name: string;
  age: number;
}

var seho: Person = {
  name: '세호',
  age: 100,
};

type MyString = string;
var str: MyString = 'hello';

type Todo = {
  id: string;
  title: string;
  done: boolean;
};
function getTodo(todo: Todo) {}




