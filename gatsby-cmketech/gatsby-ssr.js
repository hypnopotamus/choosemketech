import React from "react";

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
    setHeadComponents([
        <script key="ssr1" type="text/javascript" src="https://api.memberstack.io/static/memberstack.js?custom" data-memberstack-id="5fb7aa8ce9cc74cc2896c9ccc813d979" />,
        <noscript key="ssr2"><meta httpEquiv="refresh" content="0; url=https://dev.choosemketech.org/no-script/" /></noscript>
   ]);
   setPostBodyComponents([
        <div id="portal" key="ssr3"></div>
   ])
}
