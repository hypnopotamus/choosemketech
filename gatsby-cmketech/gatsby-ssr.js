import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        <script type="text/javascript" src="https://api.memberstack.io/static/memberstack.js?custom" data-memberstack-id="5fb7aa8ce9cc74cc2896c9ccc813d979" />,
        <noscript>
            <meta http-equiv="refresh" content="0; url=https://www.memberstack.io" />
        </noscript>
   ]);
}
