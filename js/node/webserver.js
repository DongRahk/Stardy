//http서버만들기
/* const http = require("http");
const server = http.createServer((req,res)=>{
    console.log(req.url); //서버로 주는 정보표시
    if(req.url === "/"){
    res.write("<h1>Hello</h1><h2>-----</h2>");}
    else{
        res.write(`${req.url} is wrong url`);
    }
    res.end();
});
server.listen(3000,()=>{
    console.log("서버가동");
}); */
/*
//express서버만들기,url에 따른 html파일 실행
const express = require("express");
const server = express();

//Middle ware생성 ,css파일을 읽어들리는 경로 지정
server.use(express.static(__dirname+"/public"));

// server.get("/",(req,res)=>{
//     res.render("home");
// });


server.get("/",(req,res)=>{  //web페이지에서 / 값이 넘어오면 res실행
   // res.send("<h1>hellow nodejs</h1>")
   res.sendFile(__dirname+"/index.html");
});  //get post(생성)  delete(삭제)  put(수정)

server.get("/about",(req,res)=>{  //web에서 /about페이지가 입력되면 현재경로의 about.html 실행
    res.sendFile(__dirname+"/about.html");
});
server.use((req,res)=>{
    res.sendFile(__dirname+"/404.html");  //없는 url 적용
});
//서버중지없이 실행=> nodemon install--save-dev => 실행 : npm run dev (json파일에 설정딘 nodemon으로 실행)

server.listen(3000,(err)=>{
    if(err) return console.log(err);
    console.log("서버가동");
});
*/ 
//익스프레스-핸들바 템플릿 적용 => js파일만 바꿔서 웹페이지 내용 변경하는 템플릿
const express = require("express");
const hbs = require("express-handlebars");

const server = express();

//엔진사용
server.engine("hbs",hbs.engine({
    extname:"hbs", //확장자
    defaultLayout:"layout.hbs", //layout폴더내 layout.hbs파일 사용
    partialsDir:"partials", //hbs 세팅치
}));
server.set("view engine","hbs");  //뷰엔진을 hbs사용한다

server.use(express.static(__dirname+"/public"));
server.get("/",(req,res)=>{
    res.render("home",{
   message:"여기의 내용이 html본문으로 전달됨 /Hello from node.js"});  //home.hbs파일 실행해서 message변수의 내용을 전달한다
});

server.listen(3000,(err)=>{
    if(err) return console.log(err);
    console.log("3000포트 서버 가동중");
});