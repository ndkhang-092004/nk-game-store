import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-800'>
      <Outlet />
    </div>
  );
}
