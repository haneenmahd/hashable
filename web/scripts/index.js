const openUpLastProjectButton = document.getElementById("open-last-project");
const localStorageClearButton = document.getElementById("local-storage-clear-button");

function handleToast(message) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");

  toast.style.display = "flex";
  toastMessage.innerHTML = "Successfully " + message;

  setTimeout(async () => {
    toast.style.display = "none";
  }, 2000);
}

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
 * ⚠️ warning: use this with caution. This can cause to delete user data stored inside the browser.
 * This can only be executed when the user asks for it.
 */
// eslint-disable-next-line no-unused-vars
function clearLocalStorage() {
  localStorage.clear();
}

window.onload = () => {
  getServerPingedCount();
};

openUpLastProjectButton.onclick = () => {
  openLastProject();
};

localStorageClearButton.onclick = () => {
  clearLocalStorage();
  handleToast("Cleared ✔️");
};