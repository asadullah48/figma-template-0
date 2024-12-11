import React from "react";

function NewArrivals() {
  return (
    <>
      <div className=" h-[639px] flex flex-wrap items-center justify-center gap-[50px] bg-[#FFF9E5] text-black">
        <img src="/images/tp14.png" alt="" className="h-[700px] w-[900px]" />
        <div className="">
          <p className="text-[24px] text-center">New Arrivals</p>
          <p className="font-bold text-[48px]">Asgaard sofa</p>
          <div className="ml-[60px] flex justify-center border my-[15px] w-[200px] h-[44px] bottom-[7px] border-black ">
            <button className="">Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewArrivals;