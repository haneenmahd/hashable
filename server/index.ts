import express from "express";
import open from "open";

const app = express();
const PORT: string | number = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello");
});

// opens and listens at a specific url
open(`http://localhost:${PORT}`);
console.log(`Listening and serving on PORT: ${PORT}`)
app.listen(PORT);