
const handleClick = () => {
    document.querySelectorAll(".button").forEach(element => element.addEventListener("click", ()=> console.log(element.textContent)));
}
