import React from "react";

function Login() {
  return (
    <>
     <div className=" h-screen ">
      <div className="flex flex-col justify-center relative top-20 items-center">
        <h1 className="font-thin mb-5 text-white text-4xl "> Business Login  </h1>
        <div className=" flex h-80 rounded-lg  justify-center pt-7 bg-white w-80 ">
          <form action="">
            
            <input type=" text" 
            placeholder="Email"
            className=" h-10 w-64 ml-10 mt-5 bg-gray-200  outline-none p-2 rounded-md "
            name="email"
            id="email" />

            <input type=" text" 
            placeholder="Password"
            className="h-10 w-64 ml-10 mt-5 bg-gray-200 outline-none p-2 rounded-md "
            name="password"
            id="password " />

              <div className="">
            <input type="checkbox" className=" shadow-md w-4 h-4  ml-10 mt-5 " name="check" id="check" />
            <label htmlFor="check" className="text-lg pl-1 "> Remember me </label>

              </div>
            <div className=" flex items-center justify-center ">
            <button className="bg-[#48276C] mt-5 w-56 rounded-full text-white text-xl font-semibold shadow-lg  p-2"> 
              Login
            </button>
            </div>
          </form>
        </div>
      </div>
 
      </div>
    </>
  );
}

export default Login;
