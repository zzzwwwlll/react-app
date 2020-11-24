import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'


function Footer() {
    return (
        <div className="foot-div">
            <li><Link to="/home">  home</Link></li>
            <li><Link to="/my">  my</Link></li>
        </div>
    )
}
export default Footer