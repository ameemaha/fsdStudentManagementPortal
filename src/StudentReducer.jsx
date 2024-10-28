import { createSlice } from "@reduxjs/toolkit";
import { studentList } from "./Data";

const studentSlice = createSlice({
  name: "students",
  initialState: studentList,
  reducers: {
    addStudent: (state, action) => {
      //console.log(action);
      state.push(action.payload);
    },
    updateStudent: (state, action) => {
      const { id, name, email, age, grade, phone, address } = action.payload;
      const updateStud = state.find((student) => student.id == id);
      if (updateStud) {
        updateStud.name = name;
        updateStud.email = email;
        updateStud.age = age;
        updateStud.grade = grade;
        updateStud.phone = phone;
        updateStud.address = address;
      }
    },
    deleteStudent: (state, action) => {
      const { id, name, email, age, grade, phone, address } = action.payload;
      const delStud = state.find((student) => student.id == id);
      if (delStud) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addStudent, updateStudent, deleteStudent } =
  studentSlice.actions;
export default studentSlice.reducer;
