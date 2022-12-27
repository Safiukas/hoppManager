import { useEffect } from "react";
import Moment from "react-moment";
import { getCargoProfile } from "../../../Features/newFleet/cargoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

const CargoCar = () => {
  const dispatch = useDispatch();

  const { cargoInfo, isError, message, isLoading } = useSelector(
    (state) => state.cargo
  );

  const { id } = useParams();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getCargoProfile(id));
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
              {cargoInfo.model}
            </h2>
            <img
              className="w-60 rounded-md object-cover"
              src={cargoInfo.image ? cargoInfo.image[0].url : null}
              alt={cargoInfo.model}
            />
            <span className="text-[#ececec] text-lg mt-2">
              License plate: {cargoInfo.licensePlate}
            </span>
            <span className="text-[#ececec] text-lg mt-2">
              QR: #{cargoInfo.qrCode}
            </span>
          </section>
          <section className="flex flex-col items-start">
            <div className="flex flex-col">
              <span className="text-[#ff5783] text-lg font-semibold">ID:</span>
              <span className="text-[#ececec] mb-3">#{cargoInfo._id}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[#ff5783] text-lg font-semibold">
                Created at:
              </span>
              <Moment className="text-[#ececec] mb-3" format="DD-MM-YYYY HH:mm">
                {cargoInfo.createdAt}
              </Moment>
            </div>

            <div className="flex flex-col">
              <span className="text-[#ff5783] text-lg font-semibold">
                Mileage:
              </span>
              <span className="text-[#ececec] mb-3">
                {cargoInfo.mileage} km
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[#ff5783] text-lg font-semibold">
                User created:
              </span>
              <span className="text-[#ececec] mb-3"></span>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default CargoCar;
