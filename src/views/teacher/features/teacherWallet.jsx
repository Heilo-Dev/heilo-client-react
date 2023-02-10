import React from "react";
import { Button } from "shared/components/button";

const TeacherWallet = () => {
const componets = [1,2,3,4,5,6,7,9]

  return (

    <div className="grid gap-2 p-4 grid-cols-3  overflow-hidden">

      {/* LEft Side  */}
      <div className=" xs:col-span-3  sm:col-span-3 md:col-span-3 lg:col-span-2 col-span-2 p-4">
        <div className="flex justify-center items-center  text-center w-72 h-44 border rounded-3xl  bg-purple-900"><span className="text-3xl font-semibold text-white">
            00.00 BDT</span></div>

          <h2 className="font-bold ">Transaction history</h2>
        <div className="overflow-hidden overflow-y-auto max-h-screen ">
          <div className="grid grid-cols-5 max-w-full min-w-xs mb-4 text-primaryDark">
            <h2 className="bg-inputBg border rounded-l-xl py-1 text-center  font-semibold">Serial</h2>
            <h2 className="bg-inputBg border  py-1 text-center  font-semibold ">Details</h2>
            <h2 className="bg-inputBg border  py-1 text-center  font-semibold ">Duraion</h2>
            <h2 className="bg-inputBg border  py-1 text-center  font-semibold ">Amount</h2>
            <h2 className="bg-inputBg border rounded-r-xl py-1 text-center  font-semibold">Total Balace</h2>
           
          </div>


          <div className="bg-bgAccent rounded-2xl p-1 text-muted">
           {componets.map((componet) => {
            return <div key={componet} className="grid grid-cols-5  min-w-xs ">
            <h2 className=" border-b-2   py-2 text-center font-medium">Serial</h2>
            <h2 className=" border-b-2   py-2 text-center font-medium ">Details</h2>
            <h2 className=" border-b-2   py-2 text-center font-medium ">Duraion</h2>
            <h2 className=" border-b-2   py-2 text-center font-medium ">Amount</h2>
            <h2 className=" border-b-2   py-2 text-center font-medium">Total Balace</h2>
             
          </div>
            
          })}
          </div>

        </div>      
      </div>

      {/* Right Side */}
      <div className=" xs:col-span-3  sm:col-span-3 md:col-span-3 lg:col-span-1  col-span-1 ">
        <div className="bg-bgAccent border-2 rounded-2xl ">
          <div className="flex p-2 flex-col justify-center items-center">
            <div className="flex justify-center items-center  text-center w-72 h-44 border rounded-3xl  bg-primaryLight"><span className="text-3xl font-semibold text-white">
            00.00 BDT</span></div>
          
          </div>
          
        <div className="flex justify-between p-2">
          <span>Total balance</span> <input className=" px-2 outline-primaryLight w-1/3 border rounded-xl bg-inputBg h-full" type="text" /></div>
        <div className="flex justify-between p-2 font-bold"><span>Total balance</span> <input className=" px-2 outline-primaryLight w-1/3 border-2 rounded-xl bg-inputBg " type="text" /></div>
        <div className="flex justify-between p-2"><span>Total balance</span> <input className=" px-2 outline-primaryLight w-1/3 border-2 rounded-xl bg-inputBg " type="text" /></div>
        <div className="flex justify-between p-2"><span>Total balance</span> <input className=" px-2 outline-primaryLight w-1/3 border-2 rounded-xl bg-inputBg " type="text" /></div>
        <div className="flex justify-end p-2"><Button label="Widthdraw" className="shadow-lg hover:bg-primaryDark text-center font-bold bg-primaryLight py-1 px-3 rounded-lg text-white active:bg-gray-500 active:shadow-lg transition duration-150 ease-in-out mb-4"></Button></div>
        </div>
      </div>
    </div>);
};

export default TeacherWallet;
