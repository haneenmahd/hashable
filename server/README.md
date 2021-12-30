## Hashable server
Hashable server is hosted on heroku at the domain: https://hashable-server.herokuapp.com.

It is open to public to use.

See usage details [usage](https://github.com/haneenmahd/hashable/tree/master/server#Usage).

### Usage
These are the available routes of the server.

- **"/"** HomePage: Displaying a simple Text Message ![ServerHomePage](https://github.com/haneenmahd/hashable/blob/master/docs/server_home.png)

- **"/api/hash"**: This is the route to hash strings based on queries. It accepts three query paramteres. 
  - algorithm: The algorithm that should be used to hash the string.
    - Supported algorithms are
        - SHA256
        - SHA512
        - MD5
  - str: The string that should be hashed.
  - encoding: The type of encoding.
    - Supported encodings are 
        - HEX
        - BASE64
        - BASE64URL

- **"/api/hmac"**: This is the route to hash your strings in hmac way based on queries. It accepts four query paramteres. 
  - algorithm: The algorithm that should be used to hash the string.
    - Supported algorithms are
        - SHA256
        - SHA512
        - MD5
  - str: The string that should be hashed.
  - encoding: The type of encoding.
    - Supported encodings are 
        - HEX
        - BASE64
        - BASE64URL
  - key:  The secret key

These are all available to public for free.
> Warning this should be not used for unethical or bad purposes 🙂

For security issues, please text me on Twitter at [HaneenMahdin](https://twitter.com/HaneenMahdin).