import express from "express";
import open from "open";
import cors from "cors";

// data types ⦂
import { HmacRequest, Request } from "./src/types";

// utility functions to convert string values to enums
import { convertAlgo, convertEncoding } from "./utils/convert";

// cryptographic functions
import hash from "./src/hash";
import hmac from "./src/hmac";
import storeCount from "./utils/storeCount";

const app = express();
const PORT: string | number = process.env.PORT || 3000;

// allowing all origings
const corsOptions: cors.CorsOptions = {
  origin: "*",
  methods: ["GET"]
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/hash", (req, res, next) => {
  // store the count
  storeCount();
  next();
});

app.use("/api/hmac", (req, res, next) => {
  // store the count
  storeCount();
  next();
});

app.get("/", (req, res) => {
    res.send("Listening and watching out for crypto functions 👀");
});

app.get("/api/hash", (req, res) => {
    const reqObj: Request = {
      algorithm: convertAlgo(String(req.query.algorithm)),
      str: String(req.query.str),
      encoding: convertEncoding(String(req.query.encoding)),
    };

    res.send(hash(reqObj));
});

app.get("/api/hmac", (req, res) => {
  const reqObj: HmacRequest = {
    algorithm: convertAlgo(String(req.query.algorithm)),
    str: String(req.query.str),
    encoding: convertEncoding(String(req.query.encoding)),
    key: String(req.query.key)
  };

  res.send(hmac(reqObj));
});

// opens and listens at a specific url
open(`http://localhost:${PORT}`);
console.log(`Listening and serving on PORT: ${PORT}`);
app.listen(PORT);