import { Link } from "react-router";
import useAppStore from "../store/useAppStore";
import { Input } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";

export default function Header() {
  const user = useAppStore((state) => state.user);

  return (
    <header className='bg-gray-800 text-white shadow-lg'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16 w-full'>
          <Link to='/' className='flex items-center space-x-2'>
            <span className='text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>
              NK Games Store
            </span>
          </Link>

          <div className='flex-1 max-w-2xl mx-8'>
            <Input
              prefix={<SearchOutlined className='text-gray-400' />}
              placeholder='Search games...'
              className='w-full rounded-full bg-gray-700 border-gray-600 hover:border-gray-500 focus:border-purple-500'
              size='large'
            />
          </div>

          <div className='flex items-center space-x-4'>
            {user ? (
              <div className='flex items-center space-x-3'>
                <span className='text-sm'>{user.name}</span>
                <div className='w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center'>
                  <UserOutlined />
                </div>
              </div>
            ) : (
              <Link
                to='/login'
                className='px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors'
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
