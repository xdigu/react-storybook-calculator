import cssHandler from "../cssHandler";

test("Should return just a class", () => {
  const className = cssHandler("ClassName");

  expect(className).toBe("classname");
});

test("Should return a class and one modifier", () => {
  const className = cssHandler("ClassName", "MODIFIER");

  expect(className).toBe("classname classname--modifier");
});

test("Should return a class and two modifier", () => {
  const className = cssHandler("ClassName", ["MODIFIER1", "MODIFIER2"]);

  expect(className).toBe("classname classname--modifier1 classname--modifier2");
});

test("Should return a class and more than two modifier", () => {
  const className = cssHandler("ClassName", [
    "MODIFIER1",
    "MODIFIER2",
    "MODIFIER3",
  ]);

  expect(className).toBe(
    "classname classname--modifier1 classname--modifier2 classname--modifier3"
  );
});
