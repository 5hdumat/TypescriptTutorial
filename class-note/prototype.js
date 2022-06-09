// https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

// user에게 관리자 권한의 role을 주고자 했을 때
var user = { name: 'capt', age: 100 };

// 기존의 user 객체의 속성 + role 로 admin 객체를 새로 생성한다.
// var admin = { name: 'capt', age: 100, role: 'admin' };

// 하지만, name: 'capt', age: 100 속성이 중복되므로 비효율 적이다.
// 자바스크립트는 prototype 기반의 언어이기에 이를 활용해보자.
var admin = {};

// 프로토타입 객체에 user 객체를 정의하면 user 객체의 속성을 상속받을 수 있다.
admin.__proto__ = user;

console.log(admin.name) // admin.name 에 접근했을 때 상위 오브젝트인 prototype이라는 은닉 속성에 접근해 지정한 user의 값을 가져온다.
console.log(admin.age)
console.log(admin.__proto__) // 프로토타입이라는 상위 객체에 user 속성이 정의되어 있다.
console.log(admin) // 기본적으로 admin은 빈 객체로 출력된다. 자바스크립트 객체는 속성을 저장하는 동적인 "가방"과 (자기만의 속성이라고 부른다) 프로토타입 객체에 대한 링크를 가진다. 

admin.role = 'admin';

console.log(admin) // { role: 'admin', __proto__: user }