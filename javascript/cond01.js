

//  조건문 if 문

// if (조건식) {실행할 코드} > 조건식이 참(true) 면 실행하겠다.

let num = 15;

if (num > 5) {
    console.log('num이 5보다 크다')
    console.log('if문 {} 안에 코드 실행');
}

if ( num >= 100 )
    console.log('num이 10보다 크거나 같다');

if(num==10)
    console.log('num이 10과 다르다1');
else
    console.log('num이 10과 다르다2');


let x = 3;
let y
// 15>0 ->true
if(num>0) {
    console.log('num이 0보다 크다')
    
    // {}영역은 인식되는 지역을 구분

    let x = 50; // 이 지역내에 x값
    console.log(x);
    let y = 33;
    y = y + 7;
    console.log(y);
}

console.log(x);
console.log(y);

// if ( 조건식 <- 결과가 true false ){}

x = 3;
let b1 = ( x < 10);
if(b1) {
    console.log('111');
}
if(b1==true) {
    console.log('222');
}
if(b1!=false) {
    console.log('333');
}

// if   else   else if
let z = 59;
if(z<10) {
    console.log('z가 10보다 작다');
}
else if (z <50) {
    console.log('z가 10보다 크고 50보다 작다');
}
else {
    console.log('z가 50보다 크거나 같다');
}






