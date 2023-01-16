//node.js 파일
const add2 = require("./add");  //js파일 add 를 불러와서 사용
const result = add2(3,5);  //함수 실행
console.log(result);

const stat = require('./stats');
console.log(stat.pi);
console.log(stat.mean([1,2,3,4,5]));  //배열함수

const fs = require('fs');
fs.writeFileSync("./hello.txt",`여기에 베틱치고 ${stat.mean([11,12,13,14,15])} 값 넣기`); //파일생성하고 데이터 넣기
fs.appendFileSync("./hello.txt","\n한칸띄우고 추가"+stat.pi+"한다")  //파일에 값 추가
console.log(fs.readFileSync("./hello.txt",{encoding:"utf-8"})); //파일을 utf-8로 읽기 

let startTime = Date.now();  //현재시각 밀리세컨드단위
console.log(startTime,"시작");
setTimeout(() => {
    console.log(Date.now(),"5초후");
}, 5000);

const express = require('express')
const server = express()

server.get('/', function (req, res) {
  res.send('Hello World')  //web페이지에 보임
})

server.listen(3000)  //localhost:3000 주소에서 실행

const readline = require('readline-sync');
const name = readline.question("What are your name?\n"); //콘솔에 문구나오고 입력값이 name이된다 
console.log(name);

//json파일불러오기(JavaScript Object Notation)
const data = fs.readFileSync("./vocab.json",{encoding:"utf-8"});
console.log(typeof data,data);
console.log(typeof data ,JSON.parse(data), typeof JSON.parse(data));  //string을 object형으로 변환 
let arr = JSON.parse(data); //json파일을 읽을때는 JSON.parse로 변경해줘야 한다 (string=>object)
 console.log(arr[2]); //배열 3번째 값

//json파일 만들기
const ob = {
    name: "Kim", age:36,description:"hansome&brillant"
};
fs.writeFileSync("test.json",JSON.stringify(ob,null,2)); //JSON파일은 string형으로 변황 해야 함 