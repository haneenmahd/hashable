import crypto from "crypto";

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

interface HmacRequest extends Request {
  key: crypto.BinaryLike | crypto.KeyObject;
}

export { Request, HmacRequest, Algorithm, Encoding };
