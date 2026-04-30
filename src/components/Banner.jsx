import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={`bg-[url('@/assets/banner.jpg')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center mt-10 rounded-2xl`}>
      <div className="w-full h-full rounded-lg flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-6xl text-[#631a37] font-bold">
            Livestock Booking Platform
          </h1>
          <p className="text-[#631a37] text-xl text-center font-medium mb-20 pt-2">
            This platform connects farmers and traders through a seamless, modern interface.
          </p>
        <div className="text-center">
         <Link href={'/all-animals'}><button className="btn bg-[#631a37] text-white border-none">All Animals</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;