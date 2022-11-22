import { Outlet } from "react-router-dom";
import AdminHeader from "../Header/AdminHeader";

const AdminLayout = () => {
  return (
    <>
      <header>
        <AdminHeader />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
