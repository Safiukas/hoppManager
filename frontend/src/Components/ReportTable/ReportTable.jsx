import "./ReportTable.css";

const ReportTable = (props) => {
  return (
    <div className="report-table-container">
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="table-container"></div>
    </div>
  );
};

export default ReportTable;
