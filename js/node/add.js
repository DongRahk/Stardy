const add1 = (a,b)=>{
    return a+b;
};
module.exports = add1;  //모듈로 공유한다

//module.exports = (a,b)=>a+b;  //단축코드 ,function 이름은 파일명으로 넘겨받는다