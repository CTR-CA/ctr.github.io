let costumInform = document.getElementById("customerInformation")
costumInform.addEventListener("click", () => {
    const showInformation = document.getElementById("onOff-costumerInformation")
    if (showInformation.style.display === "none") {
        showInformation.style.display = "block"

    }
    else {
        showInformation.style.display = "none"
    }
})

let pdiSector = document.getElementById("pdiSector")
pdiSector.addEventListener("click", () => {
    const showPdiSector = document.getElementById("onOff-pdiSector")
    if (showPdiSector.style.display === "none") {
        showPdiSector.style.display = "block"

    }
    else {
        showPdiSector.style.display = "none"
    }
})
