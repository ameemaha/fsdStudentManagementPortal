import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudent } from "./StudentReducer";
import DataTable from "datatables.net-react";
import DT from "datatables.net-bs5";

DataTable.use(DT);

const Home = () => {
  const students = useSelector((state) => state.students);
  console.log(students);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteStudent({ id: id }));
  };
  return (
    <div className="container">
      <h2>Student List</h2>
      <DataTable className="table table-bordered table-hover table-primary table-responsive">
        <thead class="table-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Grade</th>
            <th>Mobile</th>
            <th style={{ width: "20%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.email}</td>
              <td>{student.grade}</td>
              <td>{student.phone}</td>
              <td>
                <Link
                  to={`/view/${student.id}`}
                  className="btn btn-sm btn-warning mx-1"
                >
                  View
                </Link>
                <Link
                  to={`/edit/${student.id}`}
                  className="btn btn-sm btn-success mx-1"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </DataTable>
    </div>
  );
};

export default Home;
