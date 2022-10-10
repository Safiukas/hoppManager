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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<CaptainHome />}>
        <Route path="/home/accidentReport" element={<AccidentReport />} />
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
