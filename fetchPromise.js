function fetchPromise(back){
    return new Promise((res,rej)=>{
        res("Hello promise");
    });
} 

module.exports = fetchPromise;