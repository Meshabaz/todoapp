import React, { useState } from 'react'
import manworking from './images/m_s.png'
import add_btn from './images/add_btn.png'
import close_btn from './images/close_btn.png'


export default function Home() {
    let arr=JSON.parse(localStorage.getItem("todo")) ||[];

    const [taskName, setaskName] = useState('');

    return (
        <>
            <h1 className='text-info my-4' style={{ textAlign: 'center' }}>Add Some Task</h1>
            <div className='container text-info d-flex' style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <h3>What you will do taday will decide your tomorrow..! Make some priorities. </h3>
                <img src={manworking} alt='' style={{ pointerEvents: 'none' }} />
            </div>
            <div className='container my-5 ' >
                <div className='container my-5'>
                    <form className='d-flex'>
                        <input style={{ border: 'none', borderBottom: '4px solid #17a2b8', background: 'none', color: '#000' }} className="form-control form-control-lg my-3 taskname" type="text" placeholder="Add Task Here... !" aria-label=".form-control-lg example" />

                        <button style={{ background: 'none', border: 'none' }} onClick={(e) => {
                            e.preventDefault();
                            setaskName(document.querySelector(".taskname").value);
                            console.log(taskName);
                            document.querySelector(".taskname").value = "";
                            document.querySelector(".pending").style.display='flex'
                        }}>
                            <img src={add_btn} alt='' style={{ maxWidth: '70px', pointerEvents: 'none' }} />
                        </button>
                    </form>
                </div>
            </div>
            <div className='pending' style={{display:'none'}}>
                <div className='container'>
                <div className='btn_div'>
                    <button onClick={()=>{
                        document.querySelector(".pending").style.display='none'
                    }} className='close_btn' style={{ background: 'none', border: 'none', color: 'white' }}>
                    <img src={close_btn} style={{ width: '30px' }} alt='' />
                    </button>
                </div>
                <form>
                    <h3>Task: {taskName}</h3>
                    <h5>Priority
                        <span className='myspan' style={{display:'none'}}>dsfsdgds</span>
                        <button className='btn btn-danger' onClick={(e)=>{
                            e.preventDefault();
                            document.querySelector(".myspan").innerHTML='high';
                            console.log(document.querySelector(".myspan").innerHTML)
                        }}>High</button>
                        <button className='btn btn-success' onClick={(e)=>{
                            e.preventDefault();
                            document.querySelector(".myspan").innerHTML='low';
                            console.log(document.querySelector(".myspan").innerHTML)
                        }}>Low</button>
                    </h5>
                    <input className="form-control date" type={"date"} />
                    <input className="form-control time" type={"time"} />
                    <button className='btn submit btn-warning text-light' onClick={(e)=>{
                        e.preventDefault();
                        let obj={
                            task:taskName,
                            priority:document.querySelector(".myspan").innerHTML,
                            date:document.querySelector(".date").value,
                            time:document.querySelector(".time").value
                        }
                        arr.push(obj);
                        console.log(arr);
                        localStorage.setItem("todo",JSON.stringify(arr));

                        document.querySelector(".myspan").innerHTML='';
                        document.querySelector(".date").value='';
                        document.querySelector(".time").value=''
                        setaskName('');
                    }}>Submit</button>
                </form>
                </div>
            </div>
        </>
    )
}
