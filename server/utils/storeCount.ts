import fs from "fs";

/**
 * Stores the count aka number of times the server was pinged
 */
export default function storeCount(): void {
    try {
        const count = Number(fs.readFileSync("./count.txt"));

        fs.writeFileSync("./count.txt", String(count + 1));
    } catch(err) {
        fs.writeFileSync("./count.txt", String(1));
    }
}