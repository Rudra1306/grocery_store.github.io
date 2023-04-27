import React from "react";
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";

export default function Home() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [total, setTotal] = React.useState(0);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setName(localStorage.getItem("name"));
      setEmail(localStorage.getItem("email"));
      setPhone(localStorage.getItem("phone"));
      setAddress(localStorage.getItem("address"));
      const storedItems = localStorage.getItem("items");
      setItems(storedItems ? JSON.parse(storedItems) : []);
    }
  }, []);

  React.useEffect(() => {
    if (items.length !== 0) {
      let total = 0;
      items.forEach((item) => {
        total += item.count * item.price;
      });
      setTotal(total);
    }
  }, [items]);

  return (
    <div className="flex">
      <div className="w-[150px] flex items-center justify-center">
        <Sidebar />
      </div>
      <div className="p-[20px] w-full flex flex-col justify-center items-center">
        <Topbar />
        <div className="flex w-full items-center justify-center p-[20px] text-[30px]">
          Checkout
        </div>
        <div className="w-[200px] flex flex-col gap-[5px] mb-[20px]">
          <div className="text-[25px]">User Details</div>
          <div className="flex flex-col">
            <div>
              Name:
              {name}
            </div>
            <div>
              Email:
              {email}
            </div>
            <div>
              Phone Number:
              {phone}
            </div>
            <div>
              Address:
              {address}
            </div>
          </div>
        </div>
        <div className="w-full justify-center items-center flex flex-col gap-[5px]">
          <div className="text-[25px]">Item Details</div>
          <div className="flex flex-col">
            <ol>
              {items.length !== 0 &&
                items.map((item, index) => (
                  <li key={index}>
                    {item.itemName +
                      " - " +
                      item.count +
                      " * " +
                      item.price +
                      " : " +
                      item.count * item.price +
                      "$"}
                  </li>
                ))}
            </ol>
          </div>
          <div>Total Amount: {total}$</div>
        </div>
        <a
          href="/payment"
          className=" bg-yellow-400 text-white p-[10px] rounded mt-[20px]"
        >
          proceed to Payment
        </a>
      </div>
    </div>
  );
}
