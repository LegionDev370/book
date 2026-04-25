import { useEffect } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useGetProfile } from "../hooks/api/useGetProfile";
import { useUserStore } from "../store/user.store";
const RootLayout = () => {
  const [data, isLoading, isSuccess, error] = useGetProfile();
  const store = useUserStore();
  useEffect(() => {
    if (isSuccess) {
      const user = data?.data;
      store.setUser(user);
    }
  }, [isSuccess]);
  useEffect(() => {
    document.body.style.background = "#191919";
  }, []);
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  );
};
export default RootLayout;
