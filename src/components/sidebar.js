import Image from "next/image";
import React from "react";

function Sidebar() {
  return (
    <div className="flex flex-col justify-center items-center gap-[20px] bg-yellow-400 font-[Arial]">
      <a href="/" className="text-[26px] rounded p-[5px] bg-white w-[120px] flex justify-center">
        Home
      </a>
      <a href="/user" className="text-[26px] rounded p-[5px] bg-white w-[120px] flex justify-center">
        User
      </a>
      <a href="/checkout" className="text-[26px] rounded p-[5px] w-[120px] bg-white flex justify-center">
        Checkout
      </a>
    </div>
  );
}

export default Sidebar;
