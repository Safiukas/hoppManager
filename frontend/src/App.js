import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// import PrivateRoutes from "./Components/PrivateRoutes/PrivateRoutes";
import CaptainHome from "./Pages/CaptainHome/CaptainHome";
import AccidentReport from "./Pages/AccidentReport/AccidentReport";
import ShiftReport from "./Pages/ShiftReport/ShiftReport";
import Login from "./Pages/Login/Login";
import Root from "./Pages/Root/Root";
import DailyCarReport from "./Pages/DailyCarReport/DailyCarReport";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import AdminReports from "./Pages/AdminReports/AdminReports";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Login />} />
      <Route path="/home">
        <Route index element={<CaptainHome />} />
        <Route path="accidentReport" element={<AccidentReport />} />
        <Route path="carReport" element={<DailyCarReport />} />
        <Route path="shiftReport" element={<ShiftReport />} />
      </Route>
      <Route path="/dashboard">
        <Route index element={<Dashboard />} />
        <Route path="allReports" element={<AdminReports />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
