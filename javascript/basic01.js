


console.log('basic01.js')
console.log('text')
console.log('여기 영역값을 출력해라')

// 변수 선언

// 변수 타입
// var let const

// 변수 선언 : let
// 상수 선언 : const (*한번 할당/ 저장하면 값이 바뀌지 않음)

// 숫자 문자 논리형...
let gs = 10;   //숫자타입 정수형
let seok = 20.3232;   //숫자타입 실수형
let hello = "안녕하세요";  //문자타입
let d = '반갑습니다';
let e = true; //  논리타입 참
let f = false; // 거짓
gs = 200;

// 변수명 숫자시작 불가 $ _ 이외의 특수 문자 불가 띄어쓰기 불가 예약어 불가
// 변수명을 짓는 관례
/*
    like food (x)
    like_food (o)  snake cass
    likeFood       camel case

    my bag price
    my_bag_price
    myBagPrice

    */
let v1 = 123; //변수 선언 + 값 저장 : 변수초기화
let v2 = 0;
let v3 = null;
let v4 =undefined;
let v5;  //변수 선언 까지만 했다


console.log(gs);
console.log(seok);
console.log(hello);

let ho = "안녕하세요";
console.log(ho);

const yu = 30;
// yu = 300; const 변수 상수형 변수로 값 변경이 불가
console.log('반갑습니다만')
console.log("'")
console.log("안녕 '너무' 반가워")
console.log('안녕 "너무나" 반가워')
console.log("안녕 \"매우\" 반가워")
console.log(`백틱문자로 하면 중간에 '작은' "큰" 상관없음`) //``````


let x = 20;
let y;
console.log(x)
console.log(y)//undefined
//---------------------------------------------

var abc = 10;
var abc = 20;
var abc = 30;

z = 50;
console.log(z)
//let z =500;
var z = 30;
console.log(z)