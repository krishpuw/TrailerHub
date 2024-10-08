import React from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
const Title = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video absolute text-white pt-[18%] p-12">
      <h1 className="text-3xl font-bold text-">{title}</h1>
      <p className="w-1/3 mt-4">{overview}</p>
      <div className="mt-8 flex">
        <button className="flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80">
         <FaPlay className="size-4"/>
         <span className="ml-1">Play</span>
        </button>
        <button className=" mx-2 flex items-center px-6 py-2 bg-gray-500 text-black rounded-md hover:bg-opacity-50">
            <IoIosInformationCircleOutline />
            <span className="ml-1">Watch More</span>

            </button>
      </div>
    </div> 
  );
};

export default Title;
