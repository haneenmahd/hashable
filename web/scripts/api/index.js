const links = document.querySelectorAll("aside.api-nav .api-link");
const contentHeader = document.getElementById("content-header");
const contentSecondaryHeader = document.getElementById("content-secondary-header");
const contentDescription = document.getElementById("content-description");

contentHeader.innerText = links[0].getAttribute("data-header");
contentSecondaryHeader.innerText = links[0].getAttribute("data-secondary-header");
contentDescription.innerText = links[0].getAttribute("data-description");

links.forEach(link => {
    link.onclick = () => {
        document.querySelectorAll("aside.api-nav .api-link.active")[0].classList.remove("active");

        link.classList.add("active");

        contentHeader.innerText = link.getAttribute("data-header");
        contentSecondaryHeader.innerText = link.getAttribute("data-secondary-header");
        contentDescription.innerText = link.getAttribute("data-description");
    };
});