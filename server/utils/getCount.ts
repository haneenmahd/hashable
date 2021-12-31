import fs from "fs";

/**
 * Returns the number of times the server was pinged
 */
export default function getCount(): number {
  try {
    const count = Number(fs.readFileSync("./count.txt"));

    return count;
  } catch (err) {
    return 0;
  }
}
