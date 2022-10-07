import AccidentReport from "./Pages/AccidentReport/AccidentReport";
import CaptainHome from "./Pages/CaptainHome/CaptainHome";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      {/* <Login /> TODO: Fix backend auth*/}
      {/* <CaptainHome /> TODO: 1. Fix routing 2.Fix backend(show username=logged in First Name) */}
      <AccidentReport />
    </div>
  );
}

export default App;
