import { Outlet } from "@tanstack/react-router";
import Navigation from '../Navigation/Navigation';

const MainLayout = () => {
  return (
    <div className="flex flex-col p-2 bg-cyan-600 w-screen h-screen">
      <Navigation />
      <main className="flex w-full flex-1 border border-zinc-900">
        <div className="flex-1">
          <Outlet/>
        </div>
      </main>
    </div>
  )
}

export default MainLayout;