let login = document.getElementById("log__in")
login.addEventListener("click", () => {
    let showBody = document.getElementById('on__off__body__style')
    console.log("")

    if (showBody.style.display === "none") {
        showBody.style.display = "block"
    }
    else {
        showBody.style.display = "none"
    }
})