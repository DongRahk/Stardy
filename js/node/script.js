function welcome(){
	return 'Hello World';
}
//window.alert(welcome()); //경고창띄우기
//변수선언 let 변수명 = 초기값;  문자는 ' '  " "로 묶는다.변수명은 문자로시작,특수문자는$_만가능
//상수선언 const 상수이름 = 초기값;
// console.log("콘솔에 출력 log")
//prompt("다이얼로그 입력창 팝업 생성")
//백틱  `` =>표현식을 내장할수있다 `${data}` 탬플릿리터럴``내부에 플레이스홀더${} 안에 데이터를 기입하면 데이터는 문자열의 멤버가된다
//DOM 
//document.querySelector("p"); 첫번째요소 반환 ,css선택자
//document.getElementById("id"); id를 인자로 요소를 반환
//textContent =>요소내 텍스트를 반환
//산술연산자 += -= *= /=
//비교연산자 > >=  == !=  === 완전히같다(값과자료형이 같은 경우)  !== 완전히같지않다(값은같으나 자료형이 다른경우)
//if( ){ }else{ }
//while( ){  }
//confirm("경고창이 뜨고 취소와 확인 선택버튼이 제공된다") 확인=>true 취소 false 반환 
//for(초기식;조건식;반복식){  }
//함수  function 함수명(){  } , const 함수명= function(){  } , return => 데이터를 반환
//이벤트  타겟.on이벤트명 = 이벤트핸들러함수
//       타겟.addEventListener('click',function(){})
//       타겟.removeEventListner('click',function(){}) => 등록된 이벤트 제거
// html 요소 생성 => const newDiv = document.createElement("div")
//           추가 => div.appendChild(newDiv)
//삼항연산식  조건식 ? 참일경우결과 : 거짓일경우 결과
//setTimeout(실행할함수,ms시간) =>ms지난후 실행
//setInterval(반복실행할 함수,ms시간) =>ms간격으로 반복실행
//classList =>class명 컨트롤 add("클래스명 추가"),remove("클래스명 제거"),toggle("클래스명이 있으면 제거 없으면 생성")
//로컬스토리지=> 크롬 : Application내
// localStorage.setItem("로칼스토리지변수명지정",어플리케이션변수명) => 로칼스토리지에 변수명과 값 저장
//localStorage.getItem("로칼스토리지변수명")  //로칼스토리지에서 저장된값을 가져옴 


const a = prompt("다이얼로그 입력창 생성");  //팝업창에 입력된 값이 상수 a에 대입된다
const aa = "데이터";
const str = `문자열 중간에 ${a} 삽입하기`; //백틱 사용 `` ,플레이스홀더 ${} 사용
console.log(str);
console.log(document.querySelector("ul"));
console.log(document.getElementById("dog"));

const h1 = document.querySelector("h1"); //자바스크립트 반환
console.log(h1.textContent);
const li = document.getElementById("dog"); // 강아지 반환 
console.log(li.textContent);

h1.textContent = "자바스크립트 테스트" //html 태그 내용 변경
li.textContent = "dog";

while(confirm("메시지")){
	console.log("확인버튼을 눌렸네요")
} console.log("취소버튼을 눌렀군요")
for(let i=1;i<3;i++){
	console.log(i)
}
const inputType = document.querySelector("#typing")
const inputClick = document.querySelector("#push")

const handleTyping = function(){
	console.log("타이핑되고 있어요")
}
const handleClick = function(){
	console.log("클릭되고 있어요")
}
inputType.onkeydown = handleTyping
inputClick.onclick = handleClick

const btn1 = document.getElementById("one")
const btn2 = document.getElementById("two")
const btn3 = document.getElementById("three")

const handleClick2 = function(){
	console.log("저를 클릭하셨나요?")
}
btn2.addEventListener('click',handleClick2)
btn2.addEventListener('click',function(){
	console.log("이벤트핸들러 여러개 등록가능")
})
btn2.removeEventListener('click',handleClick2) //앞에 등록된 것만 제거됨 

const handleClick3 = function(event){
	console.log(event)  //이벤트핸들러객체내 속성표시
}
btn1.addEventListener('click',handleClick3)

const handleClick4 = function(event){
	console.log(event.target)
    const newDiv = document.createElement("div") //html요소만들기
	newDiv.style.backgroundColor = "red"
	newDiv.style.width = "200px"
	newDiv.style.height = "100px"
	btn3.appendChild(newDiv) //만든요소 위치지정
}
btn3.addEventListener('click',handleClick4)

//html요소 컨트롤대상 상수화
const textInput = document.getElementById("text")
const button = document.getElementById("button")

//이벤트 핸들러 생성
button.addEventListener("click",function(){
	
	console.log(textInput.value)  //value속성에 입력한 값이 넘어온다
})
button.addEventListener("click",handleClick4)

const form = document.querySelector("form") //form요소 선택
form.addEventListener("submit",function(e){  //submit되면 재실행 기능이 작동되기때문에 prevent기능을 넣어야 함
	e.preventDefault()
	console.log(form.ilum.value)  //form요소 name이 ilum인 입력값(value)
	console.log(form.town.value)
})

let result = 3 > 2 ? "참" : "거짓"  //삼항연산식 
console.log(result)

const select = document.querySelector("select")
const button1 = document.getElementById("btn5")

button1.addEventListener("click",function(){
	console.log(select.value) //선택한 값
	let result = select.value == "foot" ? "축구를 선택했네요" : "다른것을 선택했네요";
	alert(result)

})
setTimeout(function(){
	console.log("재미있다")
},1000)

let timer =
setInterval(function () {
	console.log("안녕하세요")
}, 1000);
const timerStop = document.getElementById("timerStop")
timerStop.addEventListener("click",function () {
	clearInterval(timer)  //timer 중지
})

const h1classList = document.getElementById("h1classlist")
const addBtn = document.querySelector("#add")
const removeBtn = document.querySelector("#remove")
const toggleBtn = document.getElementById("toggle")

addBtn.addEventListener("click",function(){
	h1classList.classList.add("text")  //html id=h1classlist에 class명 text 지정 => style시트에서 컨트롤 
})
removeBtn.addEventListener("click",function(){
	h1classList.classList.remove("text")
})
toggleBtn.addEventListener("click",function(){
	h1classList.classList.toggle("text")
})

const myName = "김동락"
localStorage.setItem("myName",myName)  //브라우져 사이트에 영구적저장됨,문자열만 저장됨
const myName1 = localStorage.getItem("myName")  //로칼스토리지에서 저장된값을 가져옴 
alert(myName1)
localStorage.removeItem("myName")  //해당변수명 삭제
localStorage.clear()  //전체삭제  