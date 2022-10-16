import React from "react";
import DailyCarForm from "../../Components/DailyCarForm/DailyCarForm";
import { Footer } from "../../Layouts/Footer/Footer";
import { Header } from "../../Layouts/Header/Header";

const DailyCarReport = () => {
  return (
    <>
      <Header />
      <div>
        <DailyCarForm />
      </div>
      <Footer />
    </>
  );
};

export default DailyCarReport;
