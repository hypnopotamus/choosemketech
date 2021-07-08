
import "./src/assets/style.css"
// import "./src/assets/style-rtl.css"
import "./src/assets/print.css"
import "./src/assets/style-theme.css"

const memberStackScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.setAttribute('data-memberstack-id','5fb7aa8ce9cc74cc2896c9ccc813d979')
    script.async = true
    document.body.appendChild(script)
}

export const onClientEntry = () => {
    window.onload = () => {
        memberStackScript("https://api.memberstack.io/static/memberstack.js?custom")
    }
}