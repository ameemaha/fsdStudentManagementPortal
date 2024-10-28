import React from "react";
import { useSelector } from "react-redux";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Dashboard = () => {
  const students = useSelector((state) => state.students);
  console.log(students.length);
  console.log(students);

  const countedHash = students.reduce((acc, curr) => {
    if (!acc[curr.grade]) acc[curr.grade] = 1;
    else acc[curr.grade] += 1;
    return acc;
  }, {});

  /* print out the results */
  console.log(countedHash);
  let data = "";
  for (var key in countedHash) {
    //alert("User " + key + " is #" + countedHash[key]); // "User john is #234"
    //data += { label: `{key}`, y: countedHash[key] };
  }
  const count = 10;
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="card col-md-3 text-center text-bg-primary p-3">
          <div className="card-body">
            <h5 className="card-title">{students.length}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Total Students
            </h6>
          </div>
        </div>
        <div className="col-md-6">
          {(() => {
            const arr = [];
            for (var key in countedHash) {
              arr.push(
                <div className="card text-center text-bg-info mb-3">
                  <div className="card-body">
                    <h5 className="card-title">{countedHash[key]}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      {key}
                    </h6>
                  </div>
                </div>
              );
            }
            return arr;
          })()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
