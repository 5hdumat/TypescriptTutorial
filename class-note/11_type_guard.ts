// 타입 가드
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 33, skill: 'Iron Man' };
}

let tony = introduce();

// 유니온 타입은 공통된 속성만 가져올 수 있다.
tony.name; // OK
// tony.skill; // Error

// 타입 단언을 통해 어느정도 해결은 가능하나 굉장히 복잡해진다. 이는 타입 가드를 정의해 쉽게 해결할 수 있다.
if ((tony as Developer).skill) {
  let skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  let age = (tony as Person).age;
  console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
  // 타입 가드로 인해 skill 접근 가능
  tony.skill;
} else {
  tony.age;
}
