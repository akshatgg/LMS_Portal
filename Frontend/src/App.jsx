import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

import Home from "./Components/Home/Home";
import OutletP from "./Outlet/OutletP";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to "/Home" route when the component mounts
    navigate("/Home");
  }, [navigate]);

  return (
    <>
      
        <Routes>
          <Route path="" element={<OutletP />} >
            <Route path="/Home" element={<Home/>}/>

            
          </Route>
        </Routes>
      
    </>
  );
}

export default App;
