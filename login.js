

function loginDone() {
    let login = document.getElementById("log__in")
    login.addEventListener("click", () => {

        const userData = document.getElementById("userName").value.toUpperCase()
        const userDataWrite = document.getElementById("userData")
        userDataWrite.innerHTML = `NAME:${userData}`

        const dateTime = new Date();
        document.getElementById("dateTime").innerHTML = dateTime;

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

}
checkLogin()
function checkLogin() {
    if (userData != "") {
        loginDone()
    }
    else {
        alert("try again")
    }
}