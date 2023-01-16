let target = document.querySelector("#dynamic"); // html문서내 id dynamic 선택 => p태그 객체가 할당됨

dynamic(randomString()); // dynamic펑션에 선택된 배열값을 넘겨서 실행 
setInterval(blink,500); // 0.5초 간격으로 blink 함수 실행

function randomString(){
    let stringArr = ["Learn to HTML","Learn to CSS","Learn to Javascript",
    "Learn to Python","Learn to Ruby"]; //한글자씩보이기 배열변수
    
    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)]; //Math.floor() 소숫점이하 버리기,배열값중 하나 임의선택
    let selectStringArr = selectString.split("");  //선택된배열을 하나씩 분리시켜라

    return selectStringArr;
}

function dynamic(rasa){ //한글자씩 화면에 찍기
    //console.log(rasa);
    if(rasa.length > 0){
        target.textContent += rasa.shift(); //한글자씩 넘기면서 추가됨
        setTimeout(function () {
            dynamic(rasa);
        },80); //0.08초간격으로 dynamic함수 호출
    }else{
        setTimeout(resetTyping,3000); // 배열이 0이면 3초뒤에 resetTyping함수 실행 
    }
}
function resetTyping(){
    target.textContent = "";  //공백 출력
    dynamic(randomString()); // dynamic펑션에 선택된 배열값을 넘겨서 실행 
}




//console.log(selectString);
//console.log(selectStringArr);


function blink(){ //커서 깜박이는 펑션
    target.classList.toggle("active"); //target class에 active 추가/제거 토글메소드
}
