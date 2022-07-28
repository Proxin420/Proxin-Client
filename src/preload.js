const path = require("path")
const fs = require("fs")


let main = () => {
    if (settings = () => {return JSON.parse(fs.readFileSync(path.join(__dirname, "setting.json")))}, settings().settingFile != "default") {
        let settings = () => {return JSON.parse(fs.readFileSync(path.join(settings().File)))}
    }
    
    try {
        let cssElement = document.createElement("link")
        cssElement.href = path.join("file://", __dirname, "/css/", settings().cssFile)
        cssElement.rel = "stylesheet"
        document.head.append(cssElement)
    } catch(err) {
        console.log("Couldnt load css: ", err)
    }

    if (settings().userScript != "none") {
        let scriptElement = document.createElement("script")
        scriptElement.src = path.join("file://", settings().userScript)
        document.body.append(scriptElement)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    main()
});

