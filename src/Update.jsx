import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateStudent } from "./StudentReducer";

const Update = () => {
  const { id } = useParams();
  const students = useSelector((state) => state.students);
  const existingStudent = students.filter((f) => f.id == id);
  //console.log(existingStudent[0]);
  const { name, email, age, grade, phone, address } = existingStudent[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const [uage, setAge] = useState(age);
  const [ugrade, setGrade] = useState(grade);
  const [uphone, setphone] = useState(phone);
  const [uaddress, setaddress] = useState(address);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateStudent({
        id: id,
        name: uname,
        email: uemail,
        age: uage,
        grade: ugrade,
        phone: uphone,
        address: uaddress,
      })
    );
    navigate("/student-list");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border border-primary-subtle rounded p-5">
        <form onSubmit={handleUpdate}>
          <div>
            <h3>Update Student</h3>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id=""
              required
              className="form-control"
              value={uname}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id=""
              required
              className="form-control"
              value={uemail}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id=""
              required
              className="form-control"
              value={uage}
              onChange={(e) => setAge(e.target.value)}
            />
            <label htmlFor="class">Class</label>
            <input
              type="text"
              name="grade"
              id=""
              required
              className="form-control"
              value={ugrade}
              onChange={(e) => setGrade(e.target.value)}
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              name="phoneNo"
              id=""
              required
              className="form-control"
              value={uphone}
              onChange={(e) => setphone(e.target.value)}
            />
            <label htmlFor="address">Address</label>
            <textarea
              name="address"
              id=""
              required
              className="form-control"
              value={uaddress}
              onChange={(e) => setaddress(e.target.value)}
            />
            <button className="btn btn-primary mt-3">Submit</button>
            <button className="btn btn-secondary mt-3 mx-3">Back</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Update;
