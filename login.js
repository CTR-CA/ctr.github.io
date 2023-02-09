
let login = document.getElementById("log__in")
login.addEventListener("click", () => {

    const userData = document.getElementById("userName").value.toUpperCase()
    const userDataWrite = document.getElementById("userData")
    userDataWrite.innerHTML = `NAME:${userData}`

    if (userData === "") {
        alert("WRITE DATA")
    }

    let showBody = document.getElementById('on__off__body__style')
    console.log("")

    if (showBody.style.display === "none") {
        showBody.style.display = "block"
    }
    if (showBody.style.display = "block") {
        let logInOff = document.getElementById('logInscreenDiv')
        logInOff.style.display = "none"

    }
    else {
        showBody.style.display = "none"
    }
})