import { Outlet } from "react-router";
import Header from "./Header";
import Sidebar from "~/container/sidebar/Sidebar";

export default function MainLayout() {
  return (
    <div>
      <div className="flex flex-col max-w-[1920px] w-full mx-auto h-svh">
        <Header />

        <div className="flex flex-[1] overflow-hidden">
          <Sidebar />

          <main className="flex-1 p-6 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
