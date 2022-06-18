<div align="center">
  <h1>Hashable  <img src="https://github.com/haneenmahd/hashable/blob/master/docs/logo.svg" alt="Hashable Icon" height="40px" />
  </h1>
  <img src="https://github.com/haneenmahd/hashable/actions/workflows/build-server.yml/badge.svg" alt="Build Server Status Badge" />
  <img src="https://github.com/haneenmahd/hashable/actions/workflows/test-server.yml/badge.svg" alt="Test Server Badge" />
  <img src="https://badgen.net/github/release/haneenmahd/hashable" alt="Hashable Latest Release" />
  <img src="https://badgen.net/github/last-commit/haneenmahd/hashable" alt="Hashable Latest Release" />
  <img src="https://badgen.net/github/license/haneenmahd/hashable" alt="Hashable Latest Release" />
  
  <br />

  <p>Browser Playground & Interactive way to learn cryptography 🤩. <i>Also supports a client side hashing API.</i> </p>
  
  <div align="center">
    <a href="https://hashable.space">👋 Website</a>
    <a href="https://github.com/haneenmahd/hashable/tree/master/server#readme">📜 API documentation</a>
  </div>
  <img width="1097" alt="Screenshot 2022-01-02 at 11 46 01 PM" src="https://user-images.githubusercontent.com/72091386/147885348-cf935ab9-f485-47e1-b4d7-059960607e51.png">
</div>
<h2>What is Hashable?</h2>
<p><b>Hashable</b> is an in-browser playground to experiment and play around with different cryptographic methods and functions.</p>

<h2>
 REST API 🛠
</h2>
<p>
Our Rest API is a simple implementation of generating hashes through a get request.

Here is on example using **Javascript**, which represents a simple program that hashes a string in sha256.

```js
const axios = require("axios");

const reqUrl = "https://hashable-server.herokuapp.com";

// string going to be hashed
const str = "HelloWorld";
// hashing method like "md5"
const method = "sha256";
// encoding method like "base64", "base64url"
const encoding = "hex";

axios
  .get(`${reqUrl}/hash?algorithm=${method}&str=${str}&encoding=${encoding}`)
  .then((res) => res.data)
  .catch((err) => console.log(err));
```

See more about our API documentation at [`/api`](https://github.com/haneenmahd/hashable/tree/master/api).

Get Examples for:

- [Ruby 💎](https://github.com/haneenmahd/hashable/tree/master/examples/ruby)
- [Swift 🦅](https://github.com/haneenmahd/hashable/tree/master/examples/swift)
- [ReactJS 😅](https://github.com/haneenmahd/hashable/tree/master/examples/react-js)
- [VanillaJS 🍦](https://github.com/haneenmahd/hashable/tree/master/examples/client-side-js)

Get complete examples [here 🤓](https://github.com/haneenmahd/hashable/tree/master/examples).

</p>

<h2>
Support ❤️
</h2>
<p>
Show your love, give our repo a star 🌟 .
</p>

<h2>
Building our Project 🏗
</h2>
<p>
Follow these steps to build and development our project.

First of all, we recommend having Node.js of version 14 or higher.
Download Node.js <a target="_blank" href="https://nodejs.org/en/download/">Here 📑</a>

</p>

- Node.js
- Typescript (using [npm](https://npmjs.org))
- Git

Clone the repo using `Git`:

```sh
git clone https://github.com/haneenmahd/hashable.git
```

Create and set a branch name:

```sh
git branch <your-branch-name>
git checkout <your-branch-name>
```

Install Packages 📦

```sh
sh scripts/install.sh
```

Continue working with our repo 😄.

For ease of development purposes, you can use this command to open up development server and build according to changes.

```
cd api
npm run dev
```

Run this script to build the API:

```sh
cd api
npm run build
```

Linting the API's codebase:

```sh
cd api
npm run lint
```

If you wanna build and start the server from scratch, run this instead:

```sh
cd api
npm run build:start
```

To start the server from the current built folder.

```sh
cd api
npm run start
```

Cleaning build files:

```sh
cd api
npm run clean
```

Running server tests

```sh
npm run test
```

Linting Code inside web

```sh
cd web
npm run lint
```

<h2>
Contact💬
</h2>
<p>
You can contact the Developer using my Mail <a target="_blank" href="mailto:haneenmahdin@gmail.com">📧</a>
</p>

<h2>
License 📑
</h2>
<p>
We have licensed this project under <b>MIT</b>.
</p>
