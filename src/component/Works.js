import React from "react";
import close_btn from "./images/close_btn.png";
import warning_alert from "./images/warning_alert.png";
import danger_alert from "./images/danger_alert.png";
import info_alert from "./images/info_alert.png";
import success_alert from "./images/success_alert.png";
import manworking from "./images/m_w.png";

export default function Works(props) {
  const arr = JSON.parse(localStorage.getItem("todo")) || [];
  // console.log("tasks:", arr);

  const showToTable = () => {
    document.querySelector("tbody").innerHTML = "";
    arr.forEach((e, i) => {
      let row = document.createElement("tr");
      let id = document.createElement("td");
      id.innerText = `(${i + 1})`;
      let task = document.createElement("td");
      task.innerText = e.task;
      let priority = document.createElement("td");
      priority.innerText = e.priority;
      let date = document.createElement("td");
      date.innerText = e.date;
      let time = document.createElement("td");
      time.innerText = e.time;
      let remove = document.createElement("td");
      remove.innerHTML = `<button class="btn removebtn btn-danger ">Remove</button>`;
      remove.addEventListener("click", () => {
        // del(i);
        props.showAlert(
          `${warning_alert}`,
          "This action may delete your data !",
          "warning"
        );
        setTimeout(() => {
          openPending(i);
        }, 1600);
      });

      let modify = document.createElement("td");
      modify.innerHTML = `<button class="btn removebtn btn-info">Modify</button>`;
      modify.addEventListener("click", () => {
        props.showAlert(
          `${info_alert}`,
          "This action will allow you to edit or modify your data !",
          "info"
        );
        setTimeout(() => {
          openedit(i);
        }, 1600);
      });

      row.append(id, task, priority, date, time, remove, modify);
      document.querySelector("tbody").append(row);
    });
  };

  setTimeout(() => {
    showToTable();
  }, 10);

  function openedit(e) {
    document.querySelector(".modify").style.display = "flex";

    document.querySelector(".SaveModify").addEventListener("click", (event) => {
      event.preventDefault();
      // console.log(arr[e]);
      const myobj = {
        task: document.querySelector(".title_inp").value,
        priority: document.querySelector(".priority_inp").value,
        date: document.querySelector(".date_inp").value,
        time: document.querySelector(".time_inp").value,
      };
      console.log("obj:", myobj, "arr:", arr[e]);
      arr[e] = myobj;
      console.log("arr:", arr[e]);
      localStorage.setItem("todo", JSON.stringify(arr));
      console.log(arr);
      showToTable();
      // document.querySelector(".title_inp").value = "";
      // document.querySelector(".priority_inp").value = "High";
      // document.querySelector(".date_inp").value = "";
      // document.querySelector(".time_inp").value = "";
      props.showAlert(
        `${success_alert}`,
        "Data modified successfully !",
        "success"
      );
      document.querySelector(".modify").style.display = "none";
    });

    document
      .querySelector(".closeModify")
      .addEventListener("click", (event) => {
        event.preventDefault();
        // alert("op");
        document.querySelector(".modify").style.display = "none";
      });
  }

  function openPending(i) {
    document.querySelector(".pending").style.display = "flex";
    document.querySelector(".delete").addEventListener("click", (e) => {
      // alert(i)
      e.preventDefault();
      arr.splice(i, 1);
      localStorage.setItem("todo", JSON.stringify(arr));
      showToTable();
      document.querySelector(".pending").style.display = "none";
      props.showAlert(
        `${danger_alert}`,
        "Data deleted successfully !",
        "danger"
      );
    });
    document.querySelector(".cancel").addEventListener("click", (e) => {
      // alert(i)
      e.preventDefault();
      document.querySelector(".pending").style.display = "none";
    });
  }

  return (
    <>
      <h1 className="text-info my-4" style={{ textAlign: "center" }}>
        Your Todo List is Live Here !
      </h1>
      <div
        className="container text-info d-flex"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <h3>
          Nothing is more dangerous than a focused man building himself . Just
          don't stop until it's done..!{" "}
        </h3>
        <img
          className="img-fluid"
          alt="Responsive image"
          src={manworking}
          style={{ pointerEvents: "none" }}
        />
      </div>
      <div className="container my-5">
        <table className="table table-dark table-striped table-responsive-sm table-responsive-md">
          <thead>
            <tr>
              <th scope="col">Sl.no</th>
              <th scope="col">Task</th>
              <th scope="col">Priority</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Remove Task</th>
              <th scope="col">Modify Task</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>

      <div className="pending" style={{ display: "none" }}>
        <div className="container">
          <div className="btn_div" style={{ width: "400px" }}>
            <button
              onClick={() => {
                document.querySelector(".pending").style.display = "none";
              }}
              className="close_btn"
              style={{ background: "none", border: "none", color: "white" }}
            >
              <img src={close_btn} style={{ width: "30px" }} alt="" />
            </button>
          </div>
          <form style={{ width: "400px", height: "200px" }}>
            <h3>Are you sure ?</h3>

            <div
              className="container d-flex"
              style={{
                margin: "auto",
                justifyContent: "space-evenly",
              }}
            >
              <button
                className="btn btn-danger delete"
                style={{
                  display: "flex",
                  width: "150px",
                  height: "60px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Delete
              </button>

              <button
                className="btn btn-success cancel"
                style={{
                  display: "flex",
                  width: "150px",
                  height: "60px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Cancle
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="modify pending" style={{ display: "none" }}>
        <div className="container">
          <div className="btn_div" style={{ width: "600px" }}>
            <button
              onClick={() => {
                document.querySelector(".modify").style.display = "none";
              }}
              className="close_btn"
              style={{ background: "none", border: "none", color: "white" }}
            >
              <img src={close_btn} style={{ width: "30px" }} alt="" />
            </button>
          </div>
          <form style={{ width: "600px", height: "600px" }}>
            <h3>Edit your task here.. !</h3>
            <input
              className="title_inp"
              type="text"
              placeholder="Tittle..."
              style={{ borderRadius: "8px" }}
            ></input>
            <select
              className="priority_inp form-select"
              style={{ borderRadius: "8px", width: "80%" }}
            >
              <option value={"High"}>High</option>
              <option value={"Low"}>Low</option>
            </select>

            <input
              className="date_inp"
              type="date"
              style={{ borderRadius: "8px" }}
            ></input>
            <input
              className="time_inp"
              type="time"
              style={{ borderRadius: "8px" }}
            ></input>
            <div
              className="container d-flex"
              style={{
                margin: "auto",
                justifyContent: "space-evenly",
              }}
            >
              <button
                className="btn btn-danger closeModify"
                style={{
                  display: "flex",
                  width: "150px",
                  height: "60px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Cancle
              </button>

              <button
                className="btn btn-success SaveModify"
                style={{
                  display: "flex",
                  width: "150px",
                  height: "60px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
