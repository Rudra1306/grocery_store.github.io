import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";
import React from "react";

export default function Home() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");

  function saveDetails() {
    if (typeof window !== "undefined") {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("phone", phone);
      localStorage.setItem("address", address);
    }
  }
  return (
    <div className="flex">
      <div className="w-[150px] flex items-center justify-center">
        <Sidebar />
      </div>
      <div className="p-[20px] w-full flex flex-col justify-center items-center">
        <Topbar />
        <div className="flex w-full items-center justify-center p-[20px] text-[30px]">
          User Info
        </div>
        <div className="h-auto w-[400px] p-[20px] flex flex-col gap-[20px] overflow-scroll border-[1px] border-solid rounded">
          <div className="flex gap-[20px]">
            <span className="w-[120px]">Enter Name:</span>
            <input
              className="w-full"
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder=" eg. John "
            />
          </div>
          <div className="flex gap-[20px]">
            <span className="w-[120px]">Enter Email:</span>
            <input
              className="w-full"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" eg. abcd@pqrs.com"
            />
          </div>
          <div className="flex gap-[20px]">
            <span className="w-[120px]">Enter Phone:</span>
            <input
              className="w-full"
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              placeholder=" eg. +{contry code}1234567890"
            />
          </div>
          <div className="flex gap-[20px]">
            <span className="w-[120px]"> Enter Address:</span>
            <textarea
              className="w-full"
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              placeholder=" Your current address"
            />
          </div>
        </div>
        <button
          className=" bg-yellow-400 text-slate-950 p-[10px] rounded mt-[20px]"
          onClick={() => {
            alert("Details Saved Successfully !! 😊");
            saveDetails();
          }}
        >
          Save Details
        </button>
      </div>
    </div>
  );
}
