const hashableButton = document.getElementById("hashable-button");
const saveButton = document.getElementById("save-button");
const backToHome = document.getElementsByClassName("back-to-home")[0];
let hashStr = document.getElementById("hashable-string");
let algorithm = document.getElementById("hashable-method");
let encoding = document.getElementById("hashable-encoding");

function fetchHash(algorithm = "sha256", string, encoding = "md5") {
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

function fetchLocalData() {
  return {
    projectName: localStorage.getItem("playground-name"),
    hashEncoding: localStorage.getItem("hash-encoding"),
    hashMethod: localStorage.getItem("hash-method"),
    hashString: localStorage.getItem("hash-string"),
  };
}

function setLoadedData() {
  const fetchedData = fetchLocalData();

  hashStr.value = fetchedData.hashString || "ThisIsGoingToBeHashed";
  algorithm.value = fetchedData.hashMethod || "sha256";
  encoding.value = fetchedData.hashEncoding || "hex";
}

hashableButton.onclick = () => {
  fetchHash(algorithm.value, hashStr.value, encoding.value);
};

function saveData() {
  const hashableString = document.getElementById("hashable-string").value;
  const hashMethod = document.getElementById("hashable-method").value;
  const hashEncoding = document.getElementById("hashable-encoding").value;

  window.localStorage.setItem("hash-string", hashableString);
  window.localStorage.setItem("hash-method", hashMethod);
  window.localStorage.setItem("hash-encoding", hashEncoding);
}

saveButton.onclick = () => {
  saveData();
};

backToHome.onclick = () => {
  saveData();
};

window.onload = () => {
  setLoadedData();
};