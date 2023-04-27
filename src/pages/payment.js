import React from "react";
import { useRouter } from "next/router";

export default function Payment() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-[1560px] h-[900px] bg-yellow-400 justify-center items-center">
      <h1 className=" text-slate-50">Payment Successfully Done</h1>
      <h1>Thank you for shopping</h1>
      <button
        onClick={() => {
          router.push("/");
          localStorage.clear();
        }}
        className=" bg-indigo-400 text-white p-[10px] rounded mt-[20px]"
      >
        Back to shopping
      </button>
    </div>
  );
}
