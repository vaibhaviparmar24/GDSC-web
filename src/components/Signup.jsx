import React from "react";

function Signup() {
  return (
    <div className="flex flex-col border-solid bg-slate-600  w-full i justify-start h-screen grid grid-cols-3 gap-4 place-items-center h-1  ">
      <div className="flex flex-col boarder-2 border-2 bg-white ">
        <h1 className="text-5xl font-bold">Registration</h1>
        <p className="my-5">Enter your deatails below</p>

        <input
          className="border-2 border-gray-500 text-3xl p-2"
          type="name"
          placeholder="name"
        />
        <input
          className="border-2 border-gray-500 text-3xl p-2"
          type="email"
          placeholder="email"
        />

        <input
          className="border-2 border-gray-500 text-3xl p-2"
          type="Create password"
          placeholder="Create password"
        />

        <input
          className="border-2 border-gray-500 text-3xl p-2"
          type="Confirm password"
          placeholder="Confirm password"
        />
        <button className="bg-red-600">Register Now</button>
      </div>
    </div>
  );
}

export default Signup;
