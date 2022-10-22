import "./ReportTable.css";

const ReportTable = (props) => {
  return (
    <div className="report-table-container">
      <div className="title">
        <h3>Report Table</h3>
      </div>
      <div className="table-container">
        <p>id</p>
        <p>First name, last name</p>
        <p>createdAt</p>
      </div>
    </div>
  );
};

export default ReportTable;
