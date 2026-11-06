// operator 연산자

let x = 10;
let y = 20;
let z = '30';

console.log(x);
console.log(x+10);
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(10%4); //10나누기4해서 나머지
console.log(2**3); //2의 세제곱
console.log(x+y+x+y);
console.log(x);
x = 20;
console.log(x);

x = x - 5;
console.log(x);
console.log(z + x + y);
console.log( x + y + z);
// 문작 포함된 + 연산 : 문자 형태로 이어붙이기 35 + '30' > '3530'


let q = 10;
// ++ --
console.log(-10);
console.log(-q);
// ++q q++ --q q-- 다 다르다 
// + or - 를 먼저하느냐 나중에 하느냐
// 변수 원본값이 변경됨

console.log(q);
console.log(q + 5);
console.log(q)

console.log(q);
q = q + 5;
console.log(q);

// q++ 
// q = q + 1
q++;
console.log(q);
++q;
console.log(q);
--q;
console.log(q);
q--;
console.log(q);

// q = 15   15 + 10 >  결과 25출력 q에는 16저장
console.log(q++ + 10);
// q = 16 
console.log(q);
// q =16 + 1 = 17  > 17 + 10 > 27출력 이미 q에는 17저장
console.log( ++q + 10);
console.log(q);
// q = 17

let w = 5;

console.log(w);
w = ++q - w;
console.log(w);  //13
w = q-- + w;
console.log(w); //w = 31 q =17
console.log(q);
