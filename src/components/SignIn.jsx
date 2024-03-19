import React from "react";

function SignIn() {
  return (
    <div className="flex flex-col border-solid bg-slate-600  w-full justify-start h-screen gap-4 place-items-center ">
      <div className="flex flex-col boarder-2 border-2 bg-white ">
        <h1 className="text-5xl font-bold">Login</h1>
        <p className="my-5">Enter your deatails below</p>
        <input
          className="border-2 border-gray-500 text-3xl p-2"
          type="email"
          placeholder="email"
        />

        <input
          className="border-2 border-gray-500 text-3xl p-2"
          type="password"
          placeholder="password"
        />
        <button className="bg-red-600">login</button>
      </div>
    </div>
  );
}

export default SignIn;
