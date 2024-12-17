module.exports = function createObject(proto) {
  if (proto === null) {
    const obj = {};
    obj.__proto__ = null;
    return obj;
  }
  if (typeof proto === "object") {
    function TempObject() {}
    TempObject.prototype = proto;
    return new TempObject();
  }
  throw TypeError("'proto' must be an object or null");
};
