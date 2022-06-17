const { default: hash } = require("../API/dist/src/hash");

test("Check hash return type: \nalgo: sha512\nstr: HelloWorld\nencoding: hex", () => {
  expect(
    typeof hash({
      algorithm: "sha512",
      str: "HelloWorld",
      encoding: "hex",
    })
  ).toBe("string");
});

test("Check hash return type: \nalgo: sha256\nstr: HelloWorld\nencoding: hex", () => {
  expect(
    typeof hash({
      algorithm: "sha256",
      str: "HelloWorld",
      encoding: "hex",
    })
  ).toBe("string");
});

test("Check hash return type: \nalgo: md5\nstr: HelloWorld\nencoding: hex", () => {
  expect(
    typeof hash({
      algorithm: "md5",
      str: "HelloWorld",
      encoding: "hex",
    })
  ).toBe("string");
});

test("Check hash return type: \nalgo: sha512\nstr: HelloWorld\nencoding: base64", () => {
  expect(
    typeof hash({
      algorithm: "sha512",
      str: "HelloWorld",
      encoding: "base64",
    })
  ).toBe("string");
});

test("Check hash return type: \nalgo: sha256\nstr: HelloWorld\nencoding: base64url", () => {
  expect(
    typeof hash({
      algorithm: "sha256",
      str: "HelloWorld",
      encoding: "base64url",
    })
  ).toBe("string");
});

test("Check hash return type: \nalgo: sha512\nstr: HelloWorld\nencoding: base64", () => {
  expect(
    typeof hash({
      algorithm: "sha512",
      str: "HelloWorld",
      encoding: "base64",
    })
  ).toBe("string");
});

test("Check hash return type: \nalgo: sha256\nstr: HelloWorld\nencoding: base64url", () => {
  expect(
    typeof hash({
      algorithm: "sha256",
      str: "HelloWorld",
      encoding: "base64url",
    })
  ).toBe("string");
});

test("Check hash return type: \nalgo: md5\nstr: HelloWorld\nencoding: base64", () => {
  expect(
    typeof hash({
      algorithm: "md5",
      str: "HelloWorld",
      encoding: "base64",
    })
  ).toBe("string");
});

test("Check hash return type: \nalgo: md5\nstr: HelloWorld\nencoding: base64url", () => {
  expect(
    typeof hash({
      algorithm: "md5",
      str: "HelloWorld",
      encoding: "base64url",
    })
  ).toBe("string");
});
