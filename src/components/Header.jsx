import { Link, useLocation, useNavigate } from "react-router-dom";
import Icon from "./shared/icon.jsx";
import ProfileDropdown from "./ui/profile-dropdown.jsx";
import { useUserStore } from "../store/user.store.js";
import Button from "./ui/button.jsx";

const navs = [
  { id: 1, title: "Bosh sahifa", link: "/" },
  { id: 2, title: "Nasr", link: "/nasr" },
  { id: 3, title: "Nazm", link: "/nazm" },
  { id: 4, title: "Maqolalar", link: "/maqolalar" },
  { id: 5, title: "Forum", link: "/forum" },
];

const Header = () => {
  const { pathname } = useLocation();
  const store = useUserStore();
  const navigate = useNavigate();
  const login = () => {
    navigate("/sign-in");
  };
  const register = () => {
    navigate("/sign-up");
  };
  return (
    <header className="py-6 border-[rgb(255,255,255,0.1)] border-b-2">
      <div className="container">
        <div className="navbar flex justify-between items-center">
          <a href="">
            <Icon.logo />
          </a>
          <nav className="flex items-center w-full justify-between">
            <ul className="flex gap-x-6 mx-auto">
              {navs.map((nav) => {
                return (
                  <li
                    key={nav.id}
                    className={`${pathname === nav.link ? "border-white transition-all border-b-2" : ""}`}
                  >
                    <Link
                      to={nav.link}
                      className="text-white text-[16px] font-light"
                    >
                      {nav.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {store.user ? (
              <ProfileDropdown />
            ) : (
              <div className="flex gap-x-5">
                <Button onClick={login} className={"px-5 !bg-[#796a58]"}>
                  Kirish
                </Button>
                <Button onClick={register} className={"px-5 !bg-[#796a58]"}>
                  Ro'yxatdan o'tish
                </Button>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
