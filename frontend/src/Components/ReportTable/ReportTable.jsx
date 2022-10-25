import "./ReportTable.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAccidents } from "../../Features/accidentReport/accidentSlice";

const ReportTable = () => {
  const dispatch = useDispatch();

  const { accidents, isLoading, isError, message } = useSelector(
    (state) => state.accident
  );

  useEffect(() => {
    dispatch(getAccidents());
  }, [dispatch, getAccidents]);

  // console.log(accidents.length);
  return (
    <>
      <p>{accidents && accidents.employee}</p>
      <section>
        {accidents.length > 0 ? (
          <div>
            {accidents.map((accident) => (
              <p key={accident._id}>{accident.employee}</p>
            ))}
          </div>
        ) : (
          <h3>You have no accidents </h3>
        )}
      </section>
    </>
  );
};

export default ReportTable;
