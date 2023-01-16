const pi = 3.14;
const mean = (arr)=>{  //배열함수
    if(arr.length===0){
        return 0;
    }
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum/arr.length;
}
module.exports = {  //여러개 모듈 공유
    pi,mean  //pi:pi  키:값 ,mean:mean  키:값 단축
}
//module.exports.pi=pi;
//module.exports.mean=mean;