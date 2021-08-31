// Example from gatsby-plugin-portal
// https://www.gatsbyjs.com/plugins/gatsby-plugin-portal/?=gatsby-plugin-portal#gatsby-gotcha---document-is-undefined

import { Component } from "react"
import ReactDOM from "react-dom"

// Use a ternary operator to make sure that the document object is defined
const portalRoot =
    typeof document !== `undefined` ? document.getElementById("portal") : null

export default class Portal extends Component {
    constructor() {
        super()
        // Use a ternary operator to make sure that the document object is defined
        this.el =
            typeof document !== `undefined`
                ? document.createElement("div")
                : null
    }

    componentDidMount = () => {
        portalRoot.appendChild(this.el)
        window.MemberStack.reload();

        let table = document.querySelector('.comparison-map--table');

        [].forEach.call(document.querySelectorAll('path.selectedState'), function(item) {
          item.addEventListener('mousemove', function(e) {
            // var sel = this,
      
            let x = e.clientX,
                y = e.clientY;
            
            table.style.display = 'block';
            table.style.top = (y + 20) + 'px';
            table.style.left = (x + 20) + 'px';
      
            // pos = sel.getBoundingClientRect()
            // table.style.display = 'block';
            // table.style.top = pos.top + 'px';
            // table.style.left = pos.left + 'px';
          });
      
          item.addEventListener('mouseleave', function(){
            table.style.display = 'none';
          });
        });        
    }

    componentWillUnmount = () => {
        portalRoot.removeChild(this.el)
    }

    render() {
        const { children } = this.props

        // Check that this.el is not null before using ReactDOM.createPortal
        if (this.el) {
            return ReactDOM.createPortal(children, this.el)
        } else {
            return null
        }
    }
}
