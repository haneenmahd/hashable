import crypto, { BinaryToTextEncoding } from "crypto";
import { Encoding, Algorithm, Request } from "./types";

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

export default function hash(
  req: Request
) {
  // retrieving values from enums
  const algorithmType = getAlgorithmType(req.algorithm);
  const encodingType: BinaryToTextEncoding = getEncoding(req.encoding);

  const hash = crypto.createHash(algorithmType);

  hash.update(req.str).digest(encodingType);

  return hash;
}
