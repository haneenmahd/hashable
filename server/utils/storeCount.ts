import fs from "fs";

/**
 * Stores the count aka number of times the server was pinged
 */
export default function storeCount(): void {
    const count = Number(fs.readFileSync("./count.txt"));
    fs.writeFileSync("./count.txt", String(count + 1));
}