function describe(text, cb){
    console.log(text);
    cb();
}

function test(text, cb){
    console.log(text);
    try{
        cb();
        console.log(`✅ Passed`);
    } catch(e){
        console.log(`❌ Failed`);
        console.trace(e);
    }
}

function expect(value){
    return {
        value,
        toBe: function(testValue){
            if(value !== testValue){
                throw new Error(`Expected ${value} to be ${testValue}`);
            }
        },
    }
}

module.exports = {describe, test, expect};

