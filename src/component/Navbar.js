import React from 'react';
import gear from './images/gear.png'
import logo from './images/logo.gif'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <Link className="navbar-brand text-light" to="/">
                <img src={logo} style={{ width: '50px' }} alt='' />
                    Todo App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div  className='container-fluid nav_div'>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/"> <i className="bi bi-house-fill"></i> Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/works"><i className="bi bi-menu-down"></i> Tasks</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Pricing</Link>
                        </li>

                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item active" >
                            <Link className="nav-link d-flex" to="/">
                                <img src={gear} style={{ width: '30px' }} alt='' />
                            </Link>
                        </li>
                    </ul>
                    </div>
                    
                </div>

            </nav>
        </>
    )
}

