import { useEffect, useState } from "react";
import "./App.css";
import RightSideBar from "./Components/RightSideBar/RightSideBar.jsx";
import SideNavbar from "./Components/SideNavbar/SideNavbar.jsx";

function App() {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const root = window.document.documentElement;
    console.log(root)
    const isDark = theme === "dark";
    

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);
    document.documentElement.setAttribute('data-theme', theme);

  }, [theme]);
  return (
    <div className="overflow-hidden">
      <SideNavbar setShow={setShow} show={show} theme={theme} />
      <RightSideBar
        setShow={setShow}
        show={show}
        theme={theme}
        setTheme={setTheme}
      />
    </div>
  );
}

export default App;
