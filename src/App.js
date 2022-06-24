import { useState } from "react";
import "./App.css";
import RightSideBar from "./Components/RightSideBar/RightSideBar.jsx";
import SideNavbar from "./Components/SideNavbar/SideNavbar.jsx";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="overflow-hidden">
      <SideNavbar setShow={setShow} show={show} />
      <RightSideBar setShow={setShow} show={show} />
    </div>
  );
}

export default App;
