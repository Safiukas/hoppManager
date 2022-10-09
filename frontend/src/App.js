import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./Components/PrivateRoutes/PrivateRoutes";
import CaptainHome from "./Pages/CaptainHome/CaptainHome";
import AccidentReport from "./Pages/AccidentReport/AccidentReport";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="/home" element={<CaptainHome />} />
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/accidentReport" element={<AccidentReport />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
