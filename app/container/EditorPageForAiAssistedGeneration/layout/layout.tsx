import React from "react";
import { Outlet } from "react-router";
import DocumentStructure from "../components/DocumentStructure";

const layout = () => {
  return (
    <div className=" mt-20 bg-white flex border-l h-screen">
      <div>
        <DocumentStructure />
      </div>
      <div className=" h-full w-full">
        {/* Header  */}
        <div className="p-6 ">
          <h2>Header</h2>
        </div>
        <div className="flex justify-between w-full p-6 bg-gray-200">
          <div className=" basis-[70%]">{<Outlet />}</div>
          {/* Ai Sidebar  */}
          <div className="basis-[30%] bg-blue-300">
            <h2>Ai Right Sidebar</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
