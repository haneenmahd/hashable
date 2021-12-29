function getServerPingedCount() {
    const countEl = document.getElementById("hash-generated-count");

    // eslint-disable-next-line no-undef
    axios.get("http://localhost:3000/api/ping-count")
    .then(res => {
        countEl.innerText = String(res.data.count);
    })
    .catch(() => {
        countEl.innerText = "Failed to find";
    });
}

window.onload = () => {
    getServerPingedCount();
};