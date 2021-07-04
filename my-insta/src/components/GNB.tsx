import React from "react"
import {Link} from "react-router-dom";

const GNB = () => {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='mountain'>Mountain</Link></li>
            <li><Link to='sea'>Sea</Link></li>
        </ul>
    )
}
export default GNB