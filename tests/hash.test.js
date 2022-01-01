const { default: serverHash } = require("../server/dist/src/hash");

test("Check hash return type: \nalgo: sha512\nstr: HelloWorld\nencoding: hex", () => {
    expect(typeof serverHash({
        algorithm: "sha512",
        str: "HelloWorld",
        encoding: "hex"
    })).toBe("string");
});

test("Check hash return type: \nalgo: sha256\nstr: HelloWorld\nencoding: hex", () => {
  expect(
    typeof serverHash({
      algorithm: "sha256",
      str: "HelloWorld",
      encoding: "hex",
    })
  ).toBe("string");
});

test("Check hash return type: \nalgo: md5\nstr: HelloWorld\nencoding: hex", () => {
  expect(
    typeof serverHash({
      algorithm: "md5",
      str: "HelloWorld",
      encoding: "hex",
    })
  ).toBe("string");
});

test("Check hash return type: \nalgo: sha512\nstr: HelloWorld\nencoding: base64", () => {
  expect(
    typeof serverHash({
      algorithm: "sha512",
      str: "HelloWorld",
      encoding: "base64",
    })
  ).toBe("string");
});

test("Check hash return type: \nalgo: sha256\nstr: HelloWorld\nencoding: base64url", () => {
  expect(
    typeof serverHash({
      algorithm: "sha256",
      str: "HelloWorld",
      encoding: "base64url",
    })
  ).toBe("string");
});

test("Check hash return type: \nalgo: sha512\nstr: HelloWorld\nencoding: base64", () => {
  expect(
    typeof serverHash({
      algorithm: "sha512",
      str: "HelloWorld",
      encoding: "base64",
    })
  ).toBe("string");
});

test("Check hash return type: \nalgo: sha256\nstr: HelloWorld\nencoding: base64url", () => {
  expect(
    typeof serverHash({
      algorithm: "sha256",
      str: "HelloWorld",
      encoding: "base64url",
    })
  ).toBe("string");
});

test("Check hash return type: \nalgo: md5\nstr: HelloWorld\nencoding: base64", () => {
  expect(
    typeof serverHash({
      algorithm: "md5",
      str: "HelloWorld",
      encoding: "base64",
    })
  ).toBe("string");
});

test("Check hash return type: \nalgo: md5\nstr: HelloWorld\nencoding: base64url", () => {
  expect(
    typeof serverHash({
      algorithm: "md5",
      str: "HelloWorld",
      encoding: "base64url",
    })
  ).toBe("string");
});