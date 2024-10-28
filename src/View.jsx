import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();
  const students = useSelector((state) => state.students);
  const existingStudent = students.filter((f) => f.id == id);
  //console.log(existingStudent[0]);
  const { name, email, age, grade, phone, address } = existingStudent[0];
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();

    navigate("/student-list");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border border-primary-subtle rounded p-5">
        <div>
          <h3>View Student</h3>
          <p>
            <b>Name:</b>
            {name}
          </p>
          <p>
            <b>Email:</b>
            {email}
          </p>
          <p>
            <b>Age:</b>
            {age}
          </p>
          <p>
            <b>Phone No:</b>
            {phone}
          </p>
          <p>
            <b>Class:</b>
            {grade}
          </p>
          <p>
            <b>Address:</b>
            {address}
          </p>

          <button className="btn btn-primary mt-3" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
