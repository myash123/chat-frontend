import { Outlet } from "@tanstack/react-router";
import Navigation from '../Navigation/Navigation';

const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <main className='p-6'>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout;