import React from "react";
import DailyCarForm from "../../Components/DailyCarForm/DailyCarForm";
import { Header } from "../../Layouts/Header/Header";

const DailyCarReport = () => {
  return (
    <>
      <Header />
      <div>
        <DailyCarForm />
      </div>
    </>
  );
};

export default DailyCarReport;
