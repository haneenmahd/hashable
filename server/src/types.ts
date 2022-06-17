enum Algorithm {
  SHA256,
  SHA512,
  MD5,
}

enum Encoding {
  HEX,
  BASE64,
  BASE64URL,
}

interface Request {
  str: string;
  algorithm: Algorithm;
  encoding: Encoding;
}

export { Request, Algorithm, Encoding };
