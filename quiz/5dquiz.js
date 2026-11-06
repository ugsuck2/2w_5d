//문제1
const name1 = '홍길동';
let age = 25;
let height = 175.5;
let student = 'true'
let area = '서울';

console.log('이름:' + name1);
console.log('나이:'+age);
console.log('키:'+height);
console.log('학생 여부:'+student);
console.log('거주 지역:'+area);

age = age + 1
console.log(age)



//문제2
let price = 1000;
let quantity = 5;
const productName = "사과";

console.log(price);
console.log(quantity);
console.log(productName)

//price = price + 500;
price = 1500;
quantity = 10;

console.log(price);
console.log(quantity);

// const 로 상수 지정을 해서 고정된 값이라 변경하면 오류가 난다.

//문제3
// 10
// 20
// undefiend
// 100
// 100
let a = 10;
let b = 20;
let c;

console.log(a);
console.log(b);
console.log(c);

a = 100;
b = a;

console.log(a);
console.log(b);

// b=a 는 변수 b 에다가 a의 값을 저장한다는 뜻 이다
// c에는 아무값도 지정을 안했기 때문에 지정되지않은 값 undefined가 나온다

//문제4
// 1name 이 변수명에 숫자가 앞에 왔기 때문에 잘못됐다. > name1
// user age 띄어쓰기가 있기 때문에 잘못됐다. > user_age or userAge
// user-name 은 변수명에 _ $ 가 아닌 다른 기호가 들어갔으므로 잘못됐다. > user_name
// const 는 예약어(키워드) 이므로 다른 변수명을 써야한다
// my_score는 정상적인 변수명
// $price는 정상적인 변수명
// _count는 정상적인 변수명

let name_1 = "김철수";
let userAge = 30;
let user_name = "이영희";
let constant = 100;
let my_score = 95;
let $price = 5000;
let _count = 10;

console.log(name_1);
console.log(userAge);
console.log(user_name);
console.log(constant);
console.log(my_score);
console.log($price);
console.log(_count);