import React, { useEffect } from "react";
import LoginAuthIcon from "../assets/login-auth.svg";
import { Link } from "react-router-dom";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
const SignIn = () => {
  useEffect(() => {
    document.body.style.background = "none";
  }, []);
  return (
    <div className="flex h-screen">
      <div className="w-[50%] bg-[#C9AC8CED]">
        <div className="flex h-full justify-center">
          <img width={500} height={500} src={LoginAuthIcon} alt="" />
        </div>
      </div>
      <div className="w-[50%] flex flex-col items-center justify-center p-[75px_134px]">
        <div className="max-w-82.5 w-full">
          <h1 className="text-[34px] font-bold">Sign In</h1>
          <span className="text-sm font-semibold">
            Do not you have an account?{" "}
            <Link className="text-blue-400 mt-2.5 inline-block" to={"/sign-in"}>
              Sign Up
            </Link>
          </span>
          <form action="" className="flex flex-col gap-y-4 mt-6">
            <Input placeholder={"Email"} />
            <Input placeholder={"Password"} />
            <Button>Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
