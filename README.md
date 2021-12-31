<div align="center">
  <h1>Hashable  <img src="https://github.com/haneenmahd/hashable/blob/master/docs/icon.png" alt="Hashable Icon" height="40px" /></h1>
  <img src="https://github.com/haneenmahd/hashable/actions/workflows/build-server.yml/badge.svg" alt="Build Server Status Badge" />
  <p>A Client-Side Gateway for users to interact with cryptography 🤩</p>
  <i>We also have a REST API for in use with Client-Side Applications.</i>
  <br/>
  <div align="center">
    <a href="https://hashable.space">👋 Website</a>
    <a href="https://github.com/haneenmahd/hashable/tree/master/server#readme">📜 API documentation</a>
  </div>
  <img width="1473" alt="Screenshot 2021-12-31 at 4 42 35 PM" src="https://user-images.githubusercontent.com/72091386/147820471-76a7bc66-42ff-4e27-946b-66e5ef574275.png">
</div>
<h2>What is Hashable?</h2>
<p><b>Hashable</b> is an open-source, client-side gateway for users to test out cryptographic functions and hashing methods.
We also support a REST API which users can use to hash strings in their own website on client-side Javascript Applications.</p>

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
// hashing method, see more details on /server directory.
const method = "sha256";
// encoding method
const encoding = "hex";

axios
  .get(`${reqUrl}/api/hash?algorithm=${method}&str=${str}&encoding=${encoding}`)
  .then((res) => res.data)
  .catch((err) => console.log(err));
```

See more about our server documentation at [`server`](https://github.com/haneenmahd/hashable/tree/master/server)

Get more examples [here 🙄](https://github.com/haneenmahd/hashable/tree/master/examples).

</p>

<h2>
Contact
</h2>

<h2>
License 📑
</h2>
<p>
We have licensed this project under <b>MIT</b>.
</p>
