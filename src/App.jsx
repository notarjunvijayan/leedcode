import React from "react";
import CodeEditor from "./CodeEditor/CodeEditor";
import Navbar from "./NavBar/navbar";
import { Route, Routes } from "react-router-dom";
import StudentLogin from "./LoginForms/StudentLogin";
import EmployerLogin from "./LoginForms/EmployerLogin";
import LoginSelect from "./LoginForms/LoginSelect";
import HomePage from "./Homepage/HomePage";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question" element={<CodeEditor />} />
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/login/employer" element={<EmployerLogin />} />
        <Route path="/login" element={<LoginSelect />} />
      </Routes>
    </div>
  );
}
