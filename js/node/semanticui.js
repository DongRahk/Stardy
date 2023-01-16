
//익스프레스-핸들바 내 세멘틱ui 템플릿 적용
const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");
const server = express();
let words = require("./db/words.json");

//엔진사용
server.engine("hbs",hbs.engine({
    extname:"hbs", //확장자
   // defaultLayout:"layout.hbs", //layout폴더내 layout.hbs파일 사용
    defaultLayout:"layout1.hbs", //layout폴더내 layout.hbs파일 사용
    partialsDir:"partials", //hbs 세팅치
}));
server.set("view engine","hbs");  //뷰엔진을 hbs사용한다

server.use(express.static(__dirname+"/public"));
server.use(bodyParser.urlencoded({extended:false})); //바디파서사용선언
server.get("/",(req,res)=>{
//     res.render("home",{
//    message:"여기의 내용이 html본문으로 전달됨 /Hello from node.js"});  //home.hbs파일 실행해서 message변수의 내용을 전달한다
res.render("home",{words});
});
server.post("/",(req,res)=>{ //서버로 요청할때 기본값을 받는다
    const {query} = req.body;
    res.render("home",{words:words.filter( w=> w.word.toLowerCase().includes(query.toLowerCase()))
    });
});
server.delete("/",(req,res)=>{
   let {word} = req.body;
   words = words.filter((w)=>!(w.word===word))
});

server.get("/add",(req,res)=>{  //웹페이지에서 add요청이 오면 add파일을 실행
    res.render("add");
});
server.get("/quiz",(req,res)=>{  
    res.render("quiz");
});
server.use((req,res)=>{
    res.render("404");
});

server.listen(3000,(err)=>{
    if(err) return console.log(err);
    console.log("3000포트 서버 가동중");
});