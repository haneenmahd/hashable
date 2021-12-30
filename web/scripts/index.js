const openUpLastProjectButton = document.getElementById("open-last-project");

function getLastOpenedProject() {
  openUpLastProjectButton.innerText = `Open last created: ${
    localStorage.getItem("playground-name") || "+ New Project"
  }`;
}

function openLastProject() {
  window.location.pathname = "/pages/editor.html";
}

function getServerPingedCount() {
  const countEl = document.getElementById("hash-generated-count");

  // eslint-disable-next-line no-undef
  axios
    .get("https://hashable-server.herokuapp.com/api/ping-count")
    .then((res) => {
      countEl.innerText = String(res.data.count);
    })
    .catch(() => {
      countEl.innerText = "Failed to find";
    });
}

window.onload = () => {
  getLastOpenedProject();
  getServerPingedCount();
};

openUpLastProjectButton.onclick = () => {
  openLastProject();
};