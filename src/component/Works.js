import React from 'react';
import close_btn from './images/close_btn.png'


export default function Works() {
  const arr = JSON.parse(localStorage.getItem("todo")) || [];
  console.log("tasks:", arr);


  const showToTable = () => {

    document.querySelector("tbody").innerHTML = ''
    arr.forEach((e, i) => {

      let row = document.createElement("tr");
      let id = document.createElement("td");
      id.innerText = `(${i + 1})`
      let task = document.createElement("td");
      task.innerText = e.task;
      let priority = document.createElement("td");
      priority.innerText = e.priority;
      let date = document.createElement("td");
      date.innerText = e.date;
      let time = document.createElement("td");
      time.innerText = e.time;
      let remove = document.createElement("td");
      remove.innerHTML = `<button class="btn removebtn btn-warning">Remove</button>`;
      remove.addEventListener('click', () => {
        // del(i);
        openPending(i);
      })

      row.append(id, task, priority, date, time, remove);
      document.querySelector("tbody").append(row);

    })

  }

  setTimeout(() => {
    showToTable();
  }, 10);
  
  function openPending(i){
    document.querySelector(".pending").style.display = 'flex';              
    document.querySelector(".delete").addEventListener('click',(e)=>{
      // alert(i)
      e.preventDefault();
      arr.splice(i,1);
      localStorage.setItem('todo',JSON.stringify(arr));
      showToTable();
    document.querySelector(".pending").style.display = 'none';              
    })
    document.querySelector(".cancel").addEventListener('click',(e)=>{
      // alert(i)
      e.preventDefault();
    document.querySelector(".pending").style.display = 'none';              
    })
  }


  // function del(e) {
  //   if (cnfrmdel===true) {
  //     arr.splice(e, 1);
  //     localStorage.setItem("todo", JSON.stringify(arr));
  //     showToTable();      
  //   }
  // }

  // function confirmdel() {
  //   return Confirm("Are you sure?")
  // }


  return (
    <>
      <div className='container my-5'>


        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Sl.no</th>
              <th scope="col">Task</th>
              <th scope="col">Priority</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Remove Task</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>

      <div className='pending' style={{ display: 'none' }}>
        <div className='container'>
          <div className='btn_div' style={{ width:'400px'  }}>
            <button onClick={() => {
              document.querySelector(".pending").style.display = 'none'
            }} className='close_btn' style={{ background: 'none', border: 'none', color: 'white' }}>
              <img src={close_btn} style={{ width: '30px' }} alt='' />
            </button>
          </div>
          <form style={{ width:'400px' ,height:'200px' }}>
            <h3>Are you sure ?</h3>
            
              <div className='container d-flex' style={{ justifyContent:'space-evenly',padding:'0px',marginTop:'50px'}}>
              <button className='btn btn-danger delete' style={{ display:'flex', width:'150px' , height: '60px' , alignItems:'center', justifyContent:'center'}}>Delete</button>
              
              
              
              <button className='btn btn-success cancel' style={{ display:'flex', width:'150px' , height: '60px' , alignItems:'center', justifyContent:'center'}} >Cancle</button>

              </div>
            
            {/* <h5>Deadline: </h5>
            <input className="form-control date" type={"date"} />
            <input className="form-control time" type={"time"} />
            <button className='btn submit btn-warning text-light' onClick={submitTask}>Submit</button> */}
          </form>
        </div>
      </div>
    </>
  )
}
