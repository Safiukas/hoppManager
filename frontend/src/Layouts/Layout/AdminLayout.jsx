import { Outlet } from "react-router-dom";
import AdminHeader from "../Header/AdminHeader";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminLayout = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (user.role !== "Admin") {
    return <Navigate to="/home" replace />;
  }

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
