// 첫번째 요소에 숫자를 지정하면 다음 요소는 해당 숫자부터 1씩 증가 (지정 안하면 default 0)
// 문자를 지정하면 문자열 Enum이 된다.
enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스',
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 나이키

enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer == Answer.Yes) {
    console.log('정답입니다.');
  }

  if (answer == Answer.No) {
    console.log('오답입니다.');
  }
}

// 이렇게 요청할수도 있으니 구체적인 값을 제안하기 위해 Enum 타입 활용.
// askQuestion('Y');
// askQuestion('예스');
// askQuestion('Yes');
askQuestion(Answer.Yes);
