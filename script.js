alert("hola")

const logIn = document.querySelector("[data-loginButton]")
logIn.addEventListener("click", () => {
    login()
})

function login() {
    const logInDataForm = document.querySelector("[data-inputLog]")
    const dataLogIn = logInDataForm.value

    const checkBox = document.querySelector("[data-checkBoxId]");
    const checkBoxClick = checkBox.checked

    if (!dataLogIn == `` && checkBoxClick === true) {

        const p = document.createElement("p");
        p.innerHTML = `Terms and conditions: ${checkBoxClick}<hr>`;
        document.body.appendChild(p)
    }

    const offScreen = document.querySelector("[data-displayOffAll]")
    offScreen.style.display = "block"
    const logInOff = document.querySelector("[data-containerLog]")
    logInOff.style.display = "none"
    alert("hola")
}
