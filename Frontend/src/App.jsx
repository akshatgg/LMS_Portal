import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Components/Home/Home";
import OutletP from "./Outlet/OutletP";

function App() {
  return (
    <>
    
        <Routes>
          <Route path="" element={<OutletP />} >
          <Route path="" element={<Home/>}/>
          {/* <Route path="*" element={<Navigate to="/Home" />} /> */}
          </Route>
        </Routes>
    </>
  );
}

export default App;
