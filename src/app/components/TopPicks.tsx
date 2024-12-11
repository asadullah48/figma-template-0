import React from "react";

function TopPicks() {
  return (
    <>
      <div className="h-[777] text-black">
        <div>
          <p className="text-[36px] text-center py-[30px]">Top Picks For You</p>
          <p className="text-[16px] text-[#9F9F9F] text-center py-[6px]">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </div>
        <div className="flex flex-wrap justify-center bg-[#ffffff] gap-[20px]">
          <div className="w-[287px] h-[372]">
            <img src="/images/mask-group3.png" alt="" className="h-[287px]" />
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <img src="/images/mask-group4.png" alt="" className="h-[287px]" />
            <p className="text-[16px]">
              Granite dining table with dining chair
            </p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <img src="/images/mask-group5.png" alt="" className="h-[287px]" />
            <p className="text-[16px]">Outdoor bar table and stool</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <img src="/images/mask-group6.png" alt="" className="h-[287px]" />
            <p className="text-[16px]">Plain console with teak mirror</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
        </div>
        <p className="text-center py-[60px] underline text-[20px] text-white">
          View More
        </p>
      </div>
    </>
  );
}

export default TopPicks;