import { useEffect } from "react";
import Moment from "react-moment";
import { getDeilibilarProfile } from "../../../Features/newFleet/fleetSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

const Deilibilar = () => {
  const dispatch = useDispatch();

  const { fleetInfo, isError, message, isLoading } = useSelector(
    (state) => state.fleet
  );

  const { id } = useParams();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getDeilibilarProfile(id));
  }, [dispatch, isError, message, id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <main className="flex justify-center mt-3">
          <section className="flex flex-col items-center mr-5">
            <h2 className="text-[#ff5783] uppercase mb-3 font-bold">
              {fleetInfo.brand} {fleetInfo.model}
            </h2>
            <img
              className="w-60 rounded-md object-cover"
              src={fleetInfo.image ? fleetInfo.image[0].url : null}
              alt={fleetInfo.make}
            />

            <span className="text-[#ececec] text-lg mt-2">
              License plate: {fleetInfo.licensePlate}
            </span>
            <span className="text-[#ececec] text-lg mt-2">
              QR: #{fleetInfo.qrCode}
            </span>
          </section>
          <section className="flex flex-col items-start">
            <div className="flex flex-col">
              <span className="text-[#ff5783] text-lg font-semibold">ID:</span>
              <span className="text-[#ececec] mb-3">#{fleetInfo._id}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[#ff5783] text-lg font-semibold">
                Created at:
              </span>
              <Moment className="text-[#ececec] mb-3" format="DD-MM-YYYY HH:mm">
                {fleetInfo.createdAt}
              </Moment>
            </div>

            <div className="flex flex-col">
              <span className="text-[#ff5783] text-lg font-semibold">
                Mileage:
              </span>
              <span className="text-[#ececec] mb-3">
                {fleetInfo.mileage} km
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[#ff5783] text-lg font-semibold">
                User created:
              </span>
              <span className="text-[#ececec] mb-3"></span>
            </div>

            {fleetInfo.generalCheck?.checklist ? (
              <div className="flex flex-col">
                <span className="text-[#ff5783] text-lg font-semibold mb-2">
                  Comes with:
                </span>
                <div className="flex flex-col mb-3">
                  <ul className="text-[#ececec]">
                    {fleetInfo.generalCheck?.checklist
                      ? fleetInfo.generalCheck?.checklist?.map(
                          (check, index) => (
                            <li
                              key={index}
                              className="flex mb-1 text-lg items-center"
                            >
                              <p className="text-[#1ce5be] mr-2 mt-1"></p>
                              {check}
                            </li>
                          )
                        )
                      : null}
                  </ul>
                </div>
              </div>
            ) : null}
          </section>
        </main>
      )}
    </>
  );
};

export default Deilibilar;
