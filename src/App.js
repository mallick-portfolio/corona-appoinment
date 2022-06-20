import { useState } from 'react';
import './App.css';
import SideNavbar from './Components/SideNavbar/SideNavbar.jsx';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <SideNavbar setShow={setShow} show={show} />
    </div>
  );
}

export default App;
