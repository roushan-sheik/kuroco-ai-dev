import React from "react";
import { Outlet } from "react-router";

const layout = () => {
  return (
    <div>
      <h2>EditorPageForFreeForm Layout header</h2>
      <div>{<Outlet />}</div>
      <h2>EditorPageForFreeForm Layout footer</h2>
    </div>
  );
};

export default layout;
