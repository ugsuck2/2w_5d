
let money = 0;


let isHungry = true;

if( isHungry ) {
    console.log('햄버거 주문');
    money = money + 5000;
}
else {
    console.log('맥플러리 주문');
    money += 2000;
}

let option = false

if (option) {
    console.log('패티 옵션 추가');
    money = money + 2000;
}
else {
    console.log('옵션추가없음');
}

let isDiscount = 'true'
let coupon = 0;
let age = 23;

//if ( isDiscount == true)
if ( !isDiscount) {  //할인이 없으면
    console.log('할인없음');
}
else {

    if(age<20) {
        coupon = 1000;
    }
    else{
        coupon = 500;
    }
    money = money - coupon
    console.log(coupon +'원 할인 적용 됩니다.');
}

console.log('최종금액 :' + money);