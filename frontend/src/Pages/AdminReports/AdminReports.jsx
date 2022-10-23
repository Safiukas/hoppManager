import React from "react";
import CarReport from "../../Components/Table/Table";
import Footer from "../../Layouts/Footer/Footer";
import AdminHeader from "../../Layouts/Header/AdminHeader";

const AdminReports = () => {
  return (
    <>
      <header>
        <AdminHeader />
      </header>
      <h3>All reports</h3>
      <CarReport />
      <Footer>
        <Footer />
      </Footer>
    </>
  );
};

export default AdminReports;
