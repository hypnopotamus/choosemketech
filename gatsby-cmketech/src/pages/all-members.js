import React from "react";
import ReactDOM from "react-dom"

export default class AllMembers extends React.Component {

    componentDidMount = () => {
        // fetch(`https://api.memberstack.com/v1/members`, {
        //     method: 'GET',
        //     mode: "no-cors",
        //     header : {
        //         'X-API-Key': "9c0edd1de32645317650110ea3668fc2",
        //         'Access-Control-Allow-Origin': 'https://api.memberstack.com'
        //     }
        // }).then(res => {
        //     console.log(res)
        // })


        fetch('https://api.memberstack.com/v1/members', {
            mode: "no-cors",
            headers: {
                'X-API-Key': "9c0edd1de32645317650110ea3668fc2",
                "Content-Type" : "application/json",
            }
          }).then(function (response) { 
            console.log(response)
            
          })
          .catch(function (error) { console.log(error) });

    }

    render() {
        return (
            <>
                <h1>Test</h1>
            </>
        )
    }

}
  