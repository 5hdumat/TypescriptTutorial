// ES2015 (ES6)


// 실제 java class 와 같은 기능보단 프로토타입 기반 언어인 자바스크립트의 function 을 이용한
// syntactic sugar 로 이해하자.
function Person (name, age) {
  this.name = name;
  this.age = age;
}

// 위 코드와 아래코드는 완전히 동일하다.
class Person {
  constructor(name, age) {
    console.log(this); // 자바와 마찬가지로 생성자의 this는 인스턴스를 가리키고,
    this.name = name; // this.name은 멤버변수를 의미.
    this.age = age;
  }
}

var seo = new Person('seo', 29);
console.log(seo);
