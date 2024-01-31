let sum = require('./sum');
let person = require('./person');

let fetchdata = require('./fetchData');

let fetchPromise = require('./fetchPromise');

test("sum positive testing",()=>{
    expect(sum(2,2)).toBe(4);
})

test("sum negative testing",()=>{
    expect(sum(2,2)).not.toBe(5);
})

test("Object test case",()=>{
    expect(person()).toEqual({name:"Vikas"});
})

test("callback test",done=>{
    function cb(data){

        try {
            expect(data).toBe("Hi callback")
            done();
        } catch (error) {
            done(error);
        }
       
    }

    fetchdata(cb);
})

test("Promise test case",()=>{
    fetchPromise().then((data)=>{
        expect(data).toBe("Hello promise");
    })
})

test("async/await test case",async ()=>{
    let data = await fetchPromise();

    expect(data).toBe("Hello promise");

})