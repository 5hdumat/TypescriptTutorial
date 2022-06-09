function logMessage(value: any) {
  console.log(value);
}

logMessage('hello');
logMessage(100);

var seho: string | number | boolean;
var capt: string & number & boolean;

// Union type 의 장점은 type체크가 끝난 if문 안의 value는 number로 타입 추론이 된다.
// 이를 Type guard 라고하며, 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정을 의미한다.
function logMessage2(value: string | number) {
  if (typeof value === 'number') {
    console.log(value.toLocaleString());
  } else if (typeof value === 'string') {
    console.log(value.toString());
  }

  throw new TypeError('value must be string or number');
}

logMessage2('hello');
logMessage2(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 타입 가드가 없으면 공통 속성만 접근 가능 (실무에선 이걸 더 많이 씀)
function askSomeone(someone: Developer | Person) {
  // someone.name;
  // if ('skill' in someone) {
  //   someone.skill
  // }
  // someone.age;
}

// 인터섹션(&)은 타입 가드 없이 모든 속성에 접근 가능
function askSomeoneInterSection(someone: Developer & Person) {
  // someone.name;
  // someone.skill;
  // someone.age;
}

// 유니온 타입과 인터섹션 타입의 차이점
askSomeone({ name: 'developer', skill: 'Web Developer' });
askSomeone({ name: 'developer', age: 100 });

askSomeoneInterSection({ name: 'developer', skill: 'Web Developer', age: 29 });
