import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckboxLabel } from "@/components/CheckboxLabel";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="shadow-md">
      <section className="grid grid-cols-2">
        <div className="bg-gradient-to-b rounded-r from-black/90 via-gray-500 to-gray-200 text-white font-semibold justify-center text-center">
          <img className=" pt-12 h-auto" src="https://bcp.cdnchinhphu.vn/334894974524682240/2022/12/5/dhbkhn-6920-1658994052-1-16702134834751920701721.jpg"></img>
        </div>
        <form className="flex flex-col items-center justify-center p-4">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-semibold mb-4">SIGN IN</h1>
            <h2 className="text-lg font-semibold text-black/50">
              Welcome back you're been missed!
            </h2>
          </div>
          <div className="w-full max-w-md flex flex-col">
            <label className="font-semibold mb-2">Email:</label>
            <Input
              type="email"
              placeholder="John@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-2 py-3 border border-gray-300 focus:ring-white-500 focus:border-white-500 mb-4"
            />
            <label className="font-semibold mb-2">Password:</label>
            <Input
              type="password"
              placeholder="*****"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-2 py-3 border border-gray-300 focus:ring-white-500 focus:border-white-500 mb-6"
            />
            <div className="flex justify-between mb-2">
              <CheckboxLabel label="Remember me" />
              <Link
                to="/forgot-password"
                className="text-md text-gray-600 hover:underline"
              >
                Forgot your password?
              </Link>
            </div>
            <Button
              type="submit"
              onClick={handleSubmit}
              className="w-full text-white font-semibold py-3 px-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/50"
            >
              Sign In
            </Button>
            <div className="text-center justify-center p-4">
              <div className='flex justify-center text-center border-b-2 border-gray-300 relative mt-4'>
                <span className='absolute top-[-0.8rem] bg-white text-gray-500 px-2'>Or continue with</span>
              </div>
              <Button className="bg-white text-black hover:bg-slate-200 w-full hover:text-black mt-4">
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  className="w-3.5 h-3.5 mr-3 "
                  alt=""
                />
                Continue with Google
              </Button>
              <Button className="bg-blue-500 text-white hover:bg-blue-600 w-full hover:text-white mt-4">
                <img
                  src="https://www.svgrepo.com/show/448224/facebook.svg"
                  className="w-5 h-5 mr-3 "
                  alt=""
                />
                Continue with Facebook
              </Button>
              <div className="mt-2 text-white-300">
                Don't have an account
                <Link to="/signup" className="ml-4 text-sky-700 font-semibold">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signin;
