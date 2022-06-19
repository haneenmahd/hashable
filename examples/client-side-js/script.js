async function fetchHash(str, algo, encoding) {
    const returnObj = {};

    const reqUrl = "https://hashable-api.herokuapp.com";
    await fetch(`${reqUrl}/api/hash?algorithm=${algo}&str=${str}&encoding=${encoding}`)
    .then(res => {
        returnObj = res;
    })
    .catch(err => {
        console.log(err);
    });

    return returnObj;
}

fetchHash("HelloWorld", "sha256", "hex");