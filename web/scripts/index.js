const openUpLastProjectButton = document.getElementById("open-last-project");

function openLastProject() {
  window.location.pathname = "/pages/playground.html";
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

/**
 * Clears the Local Storage of the page
 * ⚠️ warning: use this with caution.
 * This can only be executed when the user asks for it.
 */
function clearLocalStorage() {
  localStorage.clear();
}

window.onload = () => {
  getServerPingedCount();
};

openUpLastProjectButton.onclick = () => {
  openLastProject();
};