import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import CaptainHome from "./Pages/CaptainHome/CaptainHome";
import AccidentReport from "./Pages/AccidentReport/AccidentReport";
import ShiftReport from "./Pages/ShiftReport/ShiftReport";
import Login from "./Pages/Login/Login";
import Root from "./Pages/Root/Root";
import DailyCarReport from "./Pages/DailyCarReport/DailyCarReport";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import AdminReports from "./Pages/AdminReports/AdminReports";
import Team from "./Pages/Team/Team";
import CreateEmployee from "./Pages/CreateEmployee/CreateEmployee";
import CarReportTable from "./Components/CarReportTable/CarReportTable";
import Hoppers from "./Components/Hoppers/Hoppers";
import Captains from "./Components/Captains/Captains";
import CarReport from "./Components/CarReport/CarReport";

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

        <Route path="/dashboard/allReports">
          <Route index element={<AdminReports />} />
        </Route>

        <Route path="/dashboard/dailyCarReports">
          <Route index element={<CarReportTable />} />
          {/* TODO: Create daily car profile component */}
          <Route path=":id" element={<CarReport />} />
        </Route>

        <Route path="/dashboard/accidentReports">
          {/* TODO: Create accident report table */}
          {/* TODO2: Create accident report profile component */}
          <Route index />
        </Route>

        <Route path="/dashboard/shiftReports">
          {/* TODO: Create shift report table */}
          {/* TODO2: Create shift report profile component */}
          <Route index />
        </Route>

        <Route path="/dashboard/team">
          <Route index element={<Team />} />
          <Route path="hoppers" element={<Hoppers />} />
          {/* TODO: Create hopper profile component */}
          <Route path="hoppers/:id" />
          <Route path="captains" element={<Captains />} />
          {/* TODO: Create captain profile component */}
          <Route path="createEmployee" element={<CreateEmployee />} />
        </Route>
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
