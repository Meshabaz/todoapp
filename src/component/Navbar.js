import React from 'react';
import gear from './images/gear.png'



export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info">
                <a className="navbar-brand text-light" href="/">
                    <i className="bi bi-pen" ></i>
                    {/* <i className="bi-alarm" style={{fontSize: '1.5rem', color: "cornflowerblue"}}></i> */}
                    Todo App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className='container-fluid'>
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/"> Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Pricing</a>
                        </li>

                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item active" >
                            <a className="nav-link d-flex" href="/">
                                <img src={gear} style={{ width: '30px' }} alt='' />
                            </a>
                        </li>
                    </ul>
                    </div>
                    
                </div>

            </nav>
        </>
    )
}

