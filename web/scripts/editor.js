function fetchHash(algorithm="sha256", string, encoding="md5") {
   const outputEl = document.getElementById("hash-output");

  // eslint-disable-next-line no-undef
  axios
    .get(
      `https://hashable-server.herokuapp.com/api/hash?algorithm=${algorithm}&str=${string}&encoding=${encoding}`
    )
    .then((res) => {
      outputEl.innerText = String(res.data);
    })
    .catch((err) => console.log(err));
}

const hashableButton = document.getElementById("hashable-button");

hashableButton.onclick = () => {
    const value = document.getElementById("hashable-string").value;
    const algorithm = document.getElementById("hashable-method").value;
    const encoding = document.getElementById("hashable-encoding").value;

    fetchHash(algorithm, value, encoding);
};