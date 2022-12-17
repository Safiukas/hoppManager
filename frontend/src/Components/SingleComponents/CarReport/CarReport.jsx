import { useState, useEffect } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCarReport } from "../../../Features/carReport/carReportSlice";
import Spinner from "../../Spinner/Spinner";
import AdminHeader from "../../../Layouts/Header/AdminHeader";
import { HiX, HiArrowLeft, HiArrowRight, HiCheck } from "react-icons/hi";

const CarReport = () => {
  const dispatch = useDispatch();

  const { singleReport, isError, message, isLoading } = useSelector(
    (state) => state.carReport
  );

  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(singleReport.images.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === singleReport.images.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  const { id } = useParams();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getCarReport(id));
  }, [dispatch, isError, message, id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {!openModal && (
        <header>
          <AdminHeader />
        </header>
      )}

      {openModal && (
        <div className="fixed flex items-center justify-center w-full h-full top-0 bottom-0 left-0 right-0 bg-black/40 border-[#ececec] z-40">
          <HiX
            className="absolute text-3xl text-[#ff5783]/30 hover:text-[#ff5783] top-3 right-3 cursor-pointer"
            onClick={handleCloseModal}
          />
          <HiArrowLeft
            className="absolute text-4xl text-[#ff5783]/30 hover:text-[#ff5783] inset-y-50 left-5 cursor-pointer"
            onClick={prevSlide}
          />
          <HiArrowRight
            className="absolute text-4xl text-[#ff5783]/30 hover:text-[#ff5783] inset-y-50 right-5 cursor-pointer"
            onClick={nextSlide}
          />
          <div className="flex items-start justify-center w-full h-full">
            <img
              alt="Deilibilar"
              className="h-auto w-auto"
              src={singleReport.images[slideNumber].url}
            />
          </div>
        </div>
      )}

      <main className="flex justify-center mt-3">
        <section className="flex flex-col items-center mr-10">
          <h2 className="text-[#ff5783] uppercase mb-3 font-bold">
            Hyundai Kona
          </h2>
          <img
            className="w-60 rounded-md object-cover"
            src="https://i.gaw.to/vehicles/photos/40/24/402482-2021-hyundai-kona.jpg?1024x640"
            alt="Huyndai Kona"
          />
          <span className="text-[#ececec] text-lg mt-2">
            {singleReport.licensePlate}
          </span>
          <span className="text-[#ececec] text-lg mt-2">
            QR: {singleReport.licensePlate}
          </span>
        </section>
        <section className="flex flex-col items-start">
          <div className="flex flex-col">
            <span className="text-[#ff5783] text-lg font-semibold">ID:</span>
            <span className="text-[#ececec] mb-3">{singleReport._id}</span>
          </div>

          <div className="flex flex-col">
            <span className="text-[#ff5783] text-lg font-semibold">
              Created at:
            </span>
            <Moment className="text-[#ececec] mb-3" format="DD-MM-YYYY HH:mm">
              {singleReport?.createdAt}
            </Moment>
          </div>

          <div className="flex flex-col">
            <span className="text-[#ff5783] text-lg font-semibold">
              Mileage:
            </span>
            <span className="text-[#ececec] mb-3">
              {singleReport.mileage} km
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[#ff5783] text-lg font-semibold">
              Captain:
            </span>
            <span className="text-[#ececec] mb-3">
              {singleReport.userId?.firstName}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-[#ff5783] text-lg font-semibold mb-2">
              General checklist:
            </span>
            {/* <div className="flex flex-col mb-3">
              <ul className="text-[#ececec]">
                {singleReport.generalCheck[0].checklist.map((check, index) => (
                  <li key={index} className="flex mb-1 text-lg items-center">
                    <HiCheck className="text-[#1ce5be] mr-2 mt-1" />
                    {check}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
          <div className="flex flex-col">
            <span className="text-[#ff5783] text-lg font-semibold mb-2">
              Service checklist:
            </span>
            {/* <div className="flex flex-col">
              <ul className="text-[#ececec]">
                {singleReport.serviceCheck[0].checklist.map((check, index) => (
                  <li key={index} className="flex mb-1 text-lg items-center">
                    <HiCheck className="text-[#1ce5be] mr-2" />
                    {check}
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
          <div className="flex flex-col ">
            <span className="text-[#ff5783] text-lg font-semibold mb-3">
              Images:
            </span>
            <div className="flex">
              {singleReport.images?.map((img, index) => {
                return (
                  <div
                    className="cursor-pointer flex flex-row"
                    key={index}
                    onClick={() => handleOpenModal(index)}
                  >
                    <img
                      className="w-28 mr-3 rounded-md"
                      src={img.url}
                      alt="report photos"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CarReport;
