import { useEffect } from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const RootLayout = () => {
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
