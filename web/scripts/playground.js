function loadLastSaved() {
    if (localStorage.getItem("playground-name" !== null) || localStorage.getItem("playground-name") !== undefined) {
        window.location.pathname = window.location.pathname.replace("playground", "editor");
    } else {
        const loaderElement = document.getElementsByClassName("loader-container")[0];

        loaderElement.style.display = "none";
    }
}

/**
 * Creates a playground and stores it in the localstorage
 * @param {string} name 
 */
function createPlayground() {
    const playgroundName = document.getElementById("playground-name").value;

    localStorage.setItem("playground-name", playgroundName);
}

const submitButton = document.getElementById("submit-button");

submitButton.onclick = () => {
    createPlayground();
    window.location.pathname = "pages/editor.html";
};

window.onload = () => {
    setTimeout(() => {
        loadLastSaved();
    }, 300);
};