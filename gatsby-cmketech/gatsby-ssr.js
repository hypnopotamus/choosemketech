import React from "react"

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([<script key="ssr1" type="text/javascript" src="https://api.memberstack.io/static/memberstack.js?custom" data-memberstack-id="5fb7aa8ce9cc74cc2896c9ccc813d979" />])
  setPostBodyComponents([<div id="portal" key="ssr3"></div>, <div className="navigation-backdrop" key="ssr4"></div>])
}
