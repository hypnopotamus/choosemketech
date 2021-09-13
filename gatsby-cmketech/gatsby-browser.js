import "./src/assets/sass/main.scss"

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (window.MemberStack !== undefined) {
    window.MemberStack.reload()
  }
}
