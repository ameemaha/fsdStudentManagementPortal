import React, { useState } from "react";
import { addStudent } from "./StudentReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const students = useSelector((state) => state.students);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addStudent({
        id: students[students.length - 1].id + 1,
        name,
        email,
        age,
        grade,
        phone,
        address,
      })
    );
    navigate("/student-list");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border border-primary-subtle rounded p-5">
        <form onSubmit={handleSubmit}>
          <div>
            <h3>Add New Student</h3>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id=""
              required
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id=""
              required
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id=""
              required
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
            />
            <label htmlFor="class">Class</label>
            <input
              type="text"
              name="grade"
              id=""
              required
              className="form-control"
              onChange={(e) => setGrade(e.target.value)}
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phoneNo"
              id=""
              required
              className="form-control"
              onChange={(e) => setphone(e.target.value)}
            />
            <label htmlFor="address">Address</label>
            <textarea
              name="address"
              id=""
              required
              className="form-control"
              onChange={(e) => setaddress(e.target.value)}
            />
            <button className="btn btn-primary mt-3">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
