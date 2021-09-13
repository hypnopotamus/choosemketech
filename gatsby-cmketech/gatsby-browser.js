import "./src/assets/sass/main.scss"

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (!window.MemberStack) {
    return
  } else {
    window.MemberStack.reload()
    console.log("test")
  }
}
