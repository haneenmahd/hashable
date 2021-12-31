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

function saveData() {
  const hashableString = document.getElementById("hashable-string").value;
  const hashMethod = document.getElementById("hashable-method").value;
  const hashEncoding = document.getElementById("hashable-encoding").value;

  window.localStorage.setItem("hash-string", hashableString);
  window.localStorage.setItem("hash-method", hashMethod);
  window.localStorage.setItem("hash-encoding", hashEncoding);
}

// do not use this function as a callback, because this only generates the string, the `generateSampleCode` function should be used.
function sampleCode(algo, str, encoding) {
  return `
  fetch("https://hashable-server.herokuapp.com/api/hash?algorithm=${algo}&str=${str}&encoding=${encoding}")
  .then(res => console.log(res))
  .catch(err => console.log(err));
  `;
}

function generateSampleCode() {
  const codeElement = document.getElementById("sample-code-text");

  codeElement.innerText = sampleCode(algorithm.value, hashStr.value, encoding.value);
}

window.onload = () => {
  generateSampleCode();
};

hashStr.onchange = () => {
  generateSampleCode();
};

algorithm.onchange = () => {
  generateSampleCode();
};

encoding.onchange = () => {
  generateSampleCode();
};

hashableButton.onclick = () => {
  fetchHash(algorithm.value, hashStr.value, encoding.value);
};

saveButton.onclick = () => {
  saveData();
};

backToHome.onclick = () => {
  saveData();
};

window.onload = () => {
  setLoadedData();
};