import React from "react";
import ReactDOM from "react-dom"

export default class AllMembers extends React.Component {

    componentDidMount = () => {
        if(window.MemberStack.onReady){
            window.MemberStack.onReady.then(async function(member) {
                var metadata = await member.getMetaData()
            })
        }

    }

    render() {
        return (
            <>
                <h1>Test</h1>
            </>
        )
    }

}
  