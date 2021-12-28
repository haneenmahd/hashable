import crypto, { BinaryToTextEncoding } from "crypto";
import { Encoding, Algorithm } from "./types";

function getAlgorithmType(algorithm: Algorithm): string {
  const algo = algorithm;

  switch (algo) {
    case Algorithm.SHA256:
      return "sha256";

    case Algorithm.SHA512:
      return "sha512";

    case Algorithm.MD5:
      return "MD5";

    default:
      return "sha256";
  }
}

function getEncoding(encoding: Encoding): BinaryToTextEncoding {
  const enc = encoding;

  switch (enc) {
    case Encoding.HEX:
      return "hex";

    case Encoding.BASE64:
      return "base64";

    case Encoding.BASE64URL:
      return "base64url";

    default:
      return "hex";
  }
}

export default function Hash(
  algorithm: Algorithm,
  str: string,
  encoding: Encoding
) {
  // retrieving values from enums
  const algorithmType = getAlgorithmType(algorithm);
  const encodingType: BinaryToTextEncoding = getEncoding(encoding);

  const hash = crypto.createHash(algorithmType);

  hash.update(str).digest(encodingType);

  return hash;
}
