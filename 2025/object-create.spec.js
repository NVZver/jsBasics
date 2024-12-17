const { describe, test, expect } = require("./simple-testing");
const createObject = require("./object-create"); // Ensure this is correctly implemented

describe("createObject function tests", () => {
  test("creates an object with the correct prototype", () => {
    const proto = { type: "Animal" };
    const obj = createObject(proto);
    expect(Object.getPrototypeOf(obj)).toBe(proto);
    expect(obj.type).toBe("Animal");
  });

  test("creates an object with null prototype", () => {
    const obj = createObject(null);
    expect(Object.getPrototypeOf(obj)).toBe(null);
    expect(Object.hasOwnProperty.call(obj, "type")).toBe(false); // Ensure no inherited properties
  });

  test("throws TypeError for non-object prototypes", () => {
    try {
      createObject(42);
    } catch (error) {
      expect(error instanceof TypeError).toBe(true);
    }
  });

  test("allows adding new properties to the created object", () => {
    const proto = { category: "Tech" };
    const obj = createObject(proto);
    obj.name = "Gadget";
    expect(obj.name).toBe("Gadget");
    expect(obj.category).toBe("Tech");
  });

  test("creates objects with nested prototype chains", () => {
    const baseProto = { base: "BaseProto" };
    const derivedProto = createObject(baseProto);
    derivedProto.middle = "MiddleProto";
    const finalObj = createObject(derivedProto);
    finalObj.top = "TopProto";

    expect(finalObj.base).toBe("BaseProto");
    expect(finalObj.middle).toBe("MiddleProto");
    expect(finalObj.top).toBe("TopProto");
    expect(Object.getPrototypeOf(finalObj)).toBe(derivedProto);
  });
});
