import Footer from "../../Layouts/Footer/Footer";
import AdminHeader from "../../Layouts/Header/AdminHeader";
import EmployeeComponent from "../../Components/Forms/EmployeeForm/EmployeeComponent";

const CreateEmployee = () => {
  return (
    <>
      <header>
        <AdminHeader />
      </header>
      <div className="main">
        <EmployeeComponent />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default CreateEmployee;
