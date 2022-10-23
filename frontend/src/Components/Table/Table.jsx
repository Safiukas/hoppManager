import "./Table.css";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCarReports } from "../../Features/carReport/carReportSlice";
import { useTable } from "react-table";
import tw from "twin.macro";

const Table = tw.table`
  table-fixed
  text-base
  text-gray-900
`;

const TableHead = tw.thead`
  p-2
`;

const TableRow = tw.tr`
border
border-green-500
`;

const TableHeader = tw.th`
border
border-green-500
p-2
`;

const TableBody = tw.tbody`
`;

const TableData = tw.td`
border
border-green-500
p-5
`;

const Button = tw.button`
  pl-4
  pr-4
  pt-2
  pb-2
  text-black
  rounded-md
  bg-green-300
  hover:bg-green-200
  transition-colors
`;

const CarReport = () => {
  const dispatch = useDispatch();

  const { carReports, isLoading, isError, message } = useSelector(
    (state) => state.carReport
  );

  const [carReport, setCarReport] = useState([]);

  useEffect(() => {
    dispatch(getCarReports());
  }, [dispatch]);

  const tableInstance = useTable({});

  return <div></div>;
};

export default CarReport;
