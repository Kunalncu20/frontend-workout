// import ReactDOM from "react-dom/client";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComp/Navbar";
import Home from './Components/pages/Home';
import UpdateForm from "./Components/UpdateForm/UpdateForm";


function App() {
  const [Record,setRecord] = useState({title: "",reps: "",load : ""});
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/updateForm" element={<UpdateForm Record={Record} setRecord={setRecord}/>}/>
          <Route path="/" element={<Home Record={Record} setRecord={setRecord}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
