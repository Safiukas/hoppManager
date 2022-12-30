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
import DailyCarReport from "./Pages/DailyCarReport/DailyCarReport";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AdminReports from "./Pages/AdminReports/AdminReports";
import Team from "./Pages/Team/Team";
import CarReportTable from "./Components/Tables/CarReportTable/CarReportTable";
import Hoppers from "./Components/Team/Hoppers/Hoppers";
import Captains from "./Components/Team/Captains/Captains";
import CarReport from "./Components/SingleComponents/CarReport/CarReport";
import Fleet from "./Pages/Fleet/Fleet";
import CreateEmployee from "./Pages/CreateEmployee/CreateEmployee";
import Layout from "./Layouts/Layout/Layout";
import AdminLayout from "./Layouts/Layout/AdminLayout";
import NewFleet from "./Components/Fleet/NewFleet/NewFleet";
import NewCargo from "./Components/Fleet/NewFleet/NewCargo";
import Deilibilar from "./Components/SingleComponents/DailyCar/Deilibilar";
import CargoCar from "./Components/SingleComponents/CargoCar/CargoCar";
import User from "./Components/SingleComponents/User/User";
import GmailLayout from "./Layouts/GmailLayout/GmailLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<Login />} />
      {/* !!!!!! TEMP component !!!! */}
      <Route path="/gmail" element={<GmailLayout />} />
      <Route path="/home" element={<Layout />}>
        <Route index element={<CaptainHome />} />
        <Route path="accidentReport" element={<AccidentReport />} />
        <Route path="carReport" element={<DailyCarReport />} />
        <Route path="shiftReport" element={<ShiftReport />} />
        <Route path="profile" element={<User />} />
      </Route>

      <Route path="/dashboard/*" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="allReports" element={<AdminReports />} />
        <Route path="dailyCarReports/*">
          <Route index element={<CarReportTable />} />
          <Route path=":id" element={<CarReport />} />
        </Route>
        <Route path="accidentReports/*">
          {/* TODO: Create accident report table */}
          {/* TODO2: Create accident report profile component */}
          <Route index />
        </Route>
        <Route path="shiftReports/*">
          {/* TODO: Create shift report table */}
          {/* TODO2: Create shift report profile component */}
          <Route index />
        </Route>
        <Route path="allFleet/*">
          <Route index element={<Fleet />} />
          <Route path="deilibilar/*" />
          <Route
            path="deilibilar/createNew"
            element={<NewFleet title={"New Deilibilar"} />}
          />
          <Route path="deilibilar/:id" element={<Deilibilar />} />
          <Route path="cargoVehicles/*" />
          <Route
            path="cargoVehicles/createNew"
            element={<NewCargo title={"New cargo vehicle"} />}
          />
          <Route path="cargoVehicles/:id" element={<CargoCar />} />
        </Route>
        <Route path="team/*">
          <Route index element={<Team />} />
          <Route path="hoppers" element={<Hoppers />} />
          <Route path="captains" element={<Captains />} />
          <Route path="create" element={<CreateEmployee />} />
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
