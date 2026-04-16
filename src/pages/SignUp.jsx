import React, { useEffect } from "react";
import AuthIcon from "../assets/auth.svg";
import { Link } from "react-router-dom";
import Input from "../components/ui/input";
import Button from "../components/ui/button";
const SignUp = () => {
  useEffect(() => {
    document.body.style.background = "none";
  }, []);
  return (
    <div className="flex h-screen">
      <div className="w-[50%] bg-[#C9AC8CED]">
        <div className="flex h-full justify-center">
          <img width={500} height={500} src={AuthIcon} alt="" />
        </div>
      </div>
      <div className="w-[50%] p-[75px_134px]">
        <div className="max-w-82.5">
          <h1 className="text-[34px] font-bold">Sign up</h1>
          <span className="text-sm font-semibold">
            Already have an account?{" "}
            <Link className="text-blue-400 mt-2.5 inline-block" to={"/sign-in"}>
              Sign in
            </Link>
          </span>
          <form action="" className="flex flex-col gap-y-4 mt-6">
            <Input placeholder={"First name"} />
            <Input placeholder={"Last name"} />
            <Input placeholder={"Phone"} />
            <Input placeholder={"Email"} />
            <Input placeholder={"Password"} />
            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
