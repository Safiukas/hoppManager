import React from "react";
import CarReportTable from "../../Components/Tables/CarReportTable/CarReportTable";
import Footer from "../../Layouts/Footer/Footer";
import AdminHeader from "../../Layouts/Header/AdminHeader";

const AdminReports = () => {
  return (
    <>
      <header>
        <AdminHeader />
      </header>
      <h3 className="title">All reports</h3>
      <CarReportTable />
      <Footer>
        <Footer />
      </Footer>
    </>
  );
};

export default AdminReports;
