
import "./src/assets/style.css"
// import "./src/assets/style-rtl.css"
import "./src/assets/print.css"
import "./src/assets/style-theme.css"

window.MemberStack.reload();

const memberStackScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.setAttribute('data-memberstack-id','b3a96bc0b7fb2bfeb080a0ad91819570')
    script.async = true
    document.body.appendChild(script)
}

export const onClientEntry = () => {
    window.onload = () => {
        memberStackScript("https://api.memberstack.io/static/memberstack.js?custom")
    }
}