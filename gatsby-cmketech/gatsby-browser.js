import "./src/assets/sass/main.scss"

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

// export const onInitialClientRender = () => {
//     console.log("ReactDOM.render has executed");    
// }

export const onRouteUpdate = ({ location, prevLocation }) => { 
    window.reload = () => {
        memberStackScript("https://api.memberstack.io/static/memberstack.js?custom")
    }
}
