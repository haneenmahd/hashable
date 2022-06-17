import express from "express";
import cors from "cors";

// data types
import { Request } from "./src/types";

// utility functions to convert string values to enums
import { convertAlgo, convertEncoding } from "./utils/convert";

// cryptographic functions
import hash from "./src/hash";

const app = express();
const PORT: string | number = process.env.PORT || 3000;

// allowing all origings
const corsOptions: cors.CorsOptions = {
  origin: "*",
  methods: ["GET"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_, res) => {
  res.send("Listening and watching out for crypto functions 👀");
});

app.get("/api/hash", (req, res) => {
  const requestBody: Request = {
    algorithm: convertAlgo(String(req.query.algorithm)),
    str: String(req.query.str),
    encoding: convertEncoding(String(req.query.encoding)),
  };

  res.end(hash(requestBody));
});

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`Listening and serving on PORT: ${PORT}`);
  }
});
