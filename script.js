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

