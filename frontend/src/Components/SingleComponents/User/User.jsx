import Spinner from "../../Spinner/Spinner";
import Moment from "react-moment";
import { BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import UpdateUser from "./UpdateUser";

const User = () => {
  const { user, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <main className="flex justify-center items-center mt-3">
          <section className="flex flex-col items-center mx-20">
            <BiUser className="text-[#1ce5be] text-7xl mr-2 mt-1" />
            <span className="text-[#ececec] text-lg my-2">
              ID: #{user._id.slice(-5)}
            </span>
            <span className="text-[#ececec] text-lg my-2 ">
              Role: {user.role}
            </span>
          </section>
          <section className="flex flex-col items-start">
            <div className="flex flex-col">
              <span className="text-[#ff5783] text-lg font-semibold">
                First Name:
              </span>
              <span className="text-[#ececec] mb-3">{user.firstName}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[#ff5783] text-lg font-semibold">
                Last Name:
              </span>
              <span className="text-[#ececec] mb-3">{user.lastName}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-[#ff5783] text-lg font-semibold">
                Email:
              </span>
              <span className="text-[#ececec] mb-3">{user.email}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#ff5783] text-lg font-semibold">
                Phone number:
              </span>
              <span className="text-[#ececec] mb-3">
                {user.phoneNumber ? user.phoneNumber : "No phone number"}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-[#ff5783] text-lg font-semibold">
                User since:
              </span>
              <Moment className="text-[#ececec] mb-3" format="DD-MM-YYYY HH:mm">
                {user.createdAt}
              </Moment>
            </div>
          </section>
        </main>
      )}

      <UpdateUser />
    </>
  );
};

export default User;
