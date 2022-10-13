import Header from "../../Layouts/Header/Header";
import Footer from "../../Layouts/Footer/Footer";
import ShiftReportForm from "../../Components/ShiftReportForm/ShiftReportForm";

import React from "react";

const ShiftReport = () => {
  return (
    <>
      <main>
        <Header />
        <ShiftReportForm />
        <Footer />
      </main>
    </>
  );
};

export default ShiftReport;
