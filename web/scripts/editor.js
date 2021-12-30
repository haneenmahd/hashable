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

function saveData() {
    const hashableString = document.getElementById("hashable-string").value;
    const hashMethod = document.getElementById("hashable-method").value;
    const hashEncoding = document.getElementById("hashable-encoding").value;

    window.localStorage.setItem("hash-string", hashableString);
    window.localStorage.setItem("hash-method", hashMethod);
    window.localStorage.setItem("hash-encoding", hashEncoding);
}

const saveButton = document.getElementById("save-button");
const backToHome = document.getElementsByClassName("back-to-home")[0];

saveButton.onclick = () => {
  saveData();
};

backToHome.onclick = () => {
  saveData();
};