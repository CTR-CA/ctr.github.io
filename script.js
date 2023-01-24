let costumInform = document.querySelector("[data-onOff-costumerInformation]")
costumInform.addEventListener("click", () => {
    let showCostumerInformation = document.querySelector(["data-onOff-costumerInformation"])
    if (showCostumerInformation.style.display === "none") {
        showCostumerInformation.style.display = "block"
    }
    else {
        showCostumerInformation.style.display = "none"
    }
})