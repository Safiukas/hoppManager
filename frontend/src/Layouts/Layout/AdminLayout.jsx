import { Outlet } from "react-router-dom";
import AdminHeader from "../Header/AdminHeader";
import { logout } from "../../Features/Auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

const AdminLayout = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      dispatch(logout());
      <Navigate to="/" replace />;
    }
  }, [dispatch]);

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
