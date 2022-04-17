alert("hi") // 위에 hi라고 알림창이 나온다 
console.log(1234);
console.log('hahahaha');
console.log("memememe");

console.log(5 + 2);
console.log(5 * 2);
console.log(6 / 2);

const a = 5; // 값을 저장하거나 유지하는 역할을 하는 variable을 만들기 위해서는 const을 이용한다. const는 변하지 않는 값이라는 뜻이다.
// variable의 이름은 a이고 이것은 5랑 같다는 뜻이다. 따라서 위 console.log에서 5대신 a 쓸수 있다.
console.log(a + 2); 
const b = 2;
const c = "d"; // 이런식으로 문자도 가능

console.log(a+b);
console.log(a*b);
console.log("d" + c);

let e = 1; // const는 constant을 의미하는데, 이것은 값이 불변함을 의미.
// let은 const와 달리 변함. 업데이트 하고 싶을때 언제든지 업데이트 가능. 
e = "MuYaHo"; // 이런식으로 1 -> "무야호"로 바꾸기 가능
console.log("your new name is " + e);//1이 아니라 무야호가 나온다
// 옛날에는 var만 있었으나, 항상 업데이트 될 수도 있고 이해도 가능하나, 몇몇 값들을 보호할 수 없다. 
// 그래서 const, let으로 쪼개진것. 
// 컴퓨터에서 0는 꺼져있음, 1은 켜져있음. 우리는 똑같은 표현방식으로 true, false 씀
const amIFat = true;// (= "true") 라 쓰면 다른거임 그리고 true는 켜져있음, false는 꺼져있음을 의미한다. 
console.log(amIFat);
const YouAreFat = null; // null은 아무것도 없다는것을 의미한다. 여기서 YouAreFat은 값은 있으나, 그 값에 아무것도 없다는 것을 뜻한다.
let Something;
console.log(Something); // 이경우 variable 인 Something은 존재하나, 정의되진 않음(undefined)

const d = 100;
const Total = [a, b, c, d, e]; // array임. 1. 대괄호로 묶이고, 2. 콤마(,)로 나누기
const Nonsense = ["hello", "Seil", "High"]; 
console.log(Total, Nonsense);
console.log(Total[3])// 만약 array안 데이터에 접근하고 싶으면, variable의 이름 적고 대괄호 열고 얻고 싶은 항목의 번호를 적기
console.log(Nonsense[0])// 주의: array는 0부터 시작
Total.push("sun"); // array에서 하나 더 추가하기(뒤쪽에)
console.log(Total); 
console.log(Total[99999]) // 이경우 100000번째 항에는 정의되지 않았다고 컴퓨터가 얘기할거임.

const player = {
    name: "Dog",
    points: 10,
    fat: true,
}; // 리스트 항목의 이름들까지 정해줌
console.log(player.name); // 출력시 이렇게 항목의 이름을 넣는다.
player.fat = false;
console.log(player); // constant 안의 내용은 constant 자체와 달리 업데이트 가능
player.points = player.points + 15;
console.log(player.points); // 중간에 포인트처럼 수치의 경우, 올리는 정도를 써서 업데이트도 가능하다.