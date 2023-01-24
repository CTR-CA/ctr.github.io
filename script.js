let costumInform = document.getElementById("data-button-customerInformation")
costumInform.addEventListener("click", () => {
    const showInformation = document.getElementById("data-onOff-costumerInformation")
    if (showInformation.style.display === "none") {
        showInformation.style.display = "block"

    }
    else {
        showInformation.style.display = "none"
    }
})
