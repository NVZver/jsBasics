
// Implement call, apply and bind functions




// ---------------- call -----------------
function custom_call(cb, scope, ...args){

    const cbName = Symbol("callbackName");
    scope[cbName] = cb;

    return scope[cbName](...args);

}
// ---------------------------------------

// ------------- apply -------------------
function custom_apply(cb, scope, args){
    const cbName = Symbol("callbackName");
    scope[cbName] = cb;
    return scope[cbName](...args);
}
// ---------------------------------------

// ------------ bind ---------------------
function custom_bind(cb, scope, presetArgs){
    const cbName = Symbol("callbackName");
    scope[cbName] = cb;

    return function(...args){
        return scope[cbName](...presetArgs, ...args);
    }
}
// ---------------------------------------

module.exports = {
    custom_call, custom_apply, custom_bind
}


