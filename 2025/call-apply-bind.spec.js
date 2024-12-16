const { describe, test, expect } = require("./simple-testing");
const { custom_call, custom_apply, custom_bind } = require("./call-apply-bind");

describe("Test: [call-apply-bind]", ()=>{

    function sayHi(greetings, by){
        return `${greetings}! I am ${this.name}. ${by}`;
    }

    const callback = sayHi;
    const scope = { name: "Nick"};
    const args = ["Hello", "By!"];
    const testValue = "Hello! I am Nick. By!";

    test(`[call] it should set scope and arguments to the callback`, ()=>{
        const hello_call = custom_call(callback, scope, ...args);
        expect(hello_call).toBe(testValue);
    });

    test(`[apply] it should set scope and arguments to the callback`, ()=>{
        const hello_call = custom_apply(callback, scope, args);
        expect(hello_call).toBe(testValue);
    });

    test(`[bind] it should return a function`, ()=>{
        const hello_call_fn = custom_bind(callback, scope, ["Hello"]);
        expect(typeof hello_call_fn).toBe("function");
    });
    test(`[bind] it should set scope and arguments to the callback`, ()=>{
        const hello_call_fn = custom_bind(callback, scope, ["Hello"]);
        const result = hello_call_fn("By!");
        expect(result).toBe(testValue);
    });
});