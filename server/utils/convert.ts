// This is a utility file to convert string values back to enums
import { Algorithm, Encoding } from "../src/types";

export function convertAlgo(algorithm: string): Algorithm {
    const algo = algorithm;

    switch (algo) {
        case "sha256":
            return Algorithm.SHA256;

        case "sha512":
            return Algorithm.SHA512;

        case "md5":
            return Algorithm.MD5;
    
        default:
            return Algorithm.SHA256;
    }
}

export function convertEncoding(encoding: string): Encoding {
  const enc = encoding;

  switch (enc) {
    case "hex":
      return Encoding.HEX;

    case "base64":
      return Encoding.BASE64;

    case "base64url":
      return Encoding.BASE64URL;

    default:
      return Encoding.HEX;
  }
}