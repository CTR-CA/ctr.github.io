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

let technicianInfo = document.getElementById("technician__sector__button")
technicianInfo.addEventListener("click", () => {
    const showTechInfo = document.getElementById("technician__sector")
    if (showTechInfo.style.display === "none") {
        showTechInfo.style.display = "block"
    }
    else {
        showTechInfo.style.display = "none"
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

let settingSector = document.getElementById("settingSector")
settingSector.addEventListener("click", () => {
    const showSettingSector = document.getElementById("onOff-settingsSector")

    if (showSettingSector.style.display === "none") {
        showSettingSector.style.display = "block"

    }
    else {
        showSettingSector.style.display = "none"
    }
})

let textAreaButton = document.getElementById("text__area__button")
textAreaButton.addEventListener("click", () => {
    const textArea = document.getElementById("text_area")

    if (textArea.style.display === "none") {
        textArea.style.display = "block"
    } else {
        textArea.style.display = "none"
    }
})