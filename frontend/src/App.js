import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// import PrivateRoutes from "./Components/PrivateRoutes/PrivateRoutes";
import CaptainHome from "./Pages/CaptainHome/CaptainHome";
import AccidentReport from "./Pages/AccidentReport/AccidentReport";
import Login from "./Pages/Login/Login";
import Root from "./Pages/Root/Root";
import DailyCarReport from "./Pages/DailyCarReport/DailyCarReport";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Login />} />
      <Route path="/home">
        <Route index element={<CaptainHome />} />
        <Route path="accidentReport" element={<AccidentReport />} />
        <Route path="carReport" element={<DailyCarReport />} />
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
