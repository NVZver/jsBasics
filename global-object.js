// start globalObject is { f: function, a: undefined, g: undefined }

var a = 5;

// start globalObject is { f: function, a: 5, g: undefined }

function f(arg) {}

var g = function (arg) {}

// start globalObject is { f: function, a: 5, g: function }