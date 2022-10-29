import React from 'react'
import manworking from './images/m_s.png'
import add_btn from './images/add_btn.png'

export default function Home() {
    return (
        <>
            <h1 className='text-info my-4' style={{ textAlign: 'center' }}>Add Some Task</h1>
                <div className='container text-info d-flex' style={{ justifyContent:'space-between' ,alignItems:'center'}}>
                    <h3>What you will do taday will decide your tomorrow..! Make some priorities. </h3>
                    <img src={manworking} alt='' style={{ pointerEvents: 'none' }} />
                </div>
            <div className='container my-5 ' >
                <div className='container my-5'>
                    <form className='d-flex'>
                        <input style={{border:'none', borderBottom: '4px solid #17a2b8', background: 'none', color:'#000'}} className="form-control form-control-lg my-3" type="text" placeholder="Add Task Here... !" aria-label=".form-control-lg example" />

                        <button style={{ background: 'none', border: 'none' }}>
                            <img src={add_btn} alt='' style={{maxWidth:'70px', pointerEvents: 'none' }} />
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
