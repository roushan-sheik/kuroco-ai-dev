import React from "react";
import { Outlet } from "react-router";

const layout = () => {
  return (
    <div className=" mt-20 ">
      <h2>EditorPageForAiAssistedGeneration Header</h2>
      <div>{<Outlet />}</div>
      <h2>EditorPageForAiAssistedGeneration Footer</h2>
    </div>
  );
};

export default layout;
