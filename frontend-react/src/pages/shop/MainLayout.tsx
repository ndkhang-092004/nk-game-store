import { Outlet } from "react-router";
import Header from "../../components/Header";

export default function MainLayout() {
  return (
    <div className='min-h-screen bg-gray-100 bg-gradient-to-b from-gray-600 to-gray-700'>
      <Header />
      <main className='container mx-auto px-4 py-8'>
        <Outlet />
      </main>
    </div>
  );
}
