/** Release in v2
const el = document.getElementsByClassName("template-drop-down")[0];
const optionsEl = document.querySelector("div#form-card div div.template-drop-down span.templates");

el.onclick = () => {
    el.classList.toggle("open");
    optionsEl.classList.toggle("open");
};

const options = optionsEl.querySelectorAll("div#form-card div div.template-drop-down span.templates .option");
const chosenText = document.createElement("b");
const templateInput = document.getElementsByClassName("template-input")[0];

options.forEach(option => {
    option.onclick = () => {
       chosenText.innerText = option.innerHTML;

       templateInput.appendChild(chosenText);
    };
});
*/

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