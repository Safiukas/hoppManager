const inviteLogo = require("../../Assets/Images/inviteLogo.jpg");
const hoppLogo = require("../../Assets/Images/logo.jpg");

const GmailLayout = () => {
  return (
    <main className="bg-[#000000] ">
      <section className="h-screen w-screen flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <div className="w-1/2 mr-2 py-5 flex items-center flex-col  bg-transparent">
            <div className="">
              <img src={hoppLogo} className="h-16 rounded-md" alt="Hopp Logo" />
            </div>

            <h4 className="text-2xl text-[#ececec] py-5 font-bold uppercase">
              Welcome
              <span className="text-2xl text-[#ff5783] pl-2 font-bold uppercase">
                Will
              </span>
              ,
            </h4>

            <form>
              <div className="w-80 flex flex-col my-3">
                <p className="text-[#ececec] mb-2 text-xl text-center">
                  You have been invite to HOPP Manager application. Invitation
                  link will expire within{" "}
                  <span className="text-2xl text-[#ff5783] uppercase font-bold">
                    1 hour
                  </span>{" "}
                  since you received this email.
                </p>

                <span className="text-md text-[#ff5783] text-center py-3">
                  Please do not share this email !
                </span>
              </div>

              <div className="flex items-center justify-center my-4">
                <button className="border-1 px-5 py-2 rounded-full border-[#1ce5be] text-[#ececec] text-2xl hover:text-[#ff5783]">
                  Click here !
                </button>
              </div>
            </form>
          </div>
          <div className="mx-3 py-7 items-center justify-center ">
            <img
              src={inviteLogo}
              className="w-80 h-95 "
              alt="Hopp background"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default GmailLayout;
