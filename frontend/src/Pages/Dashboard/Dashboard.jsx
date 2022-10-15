import ReportTable from "../../Components/ReportTable/ReportTable";
import { Footer } from "../../Layouts/Footer/Footer";
import { Header } from "../../Layouts/Header/Header";
import Sidenav from "../../Layouts/Sidenav/Sidenav";
import "./Dashboard.css";

export const Dashboard = () => {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="main-container">
        <Sidenav />
        <ReportTable />
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};
