import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from './Dropdown';
import { Default, Desktop, Mobile } from '../utils/MediaQuery';
import { auth } from '../../firebase';

function Header() {
  const location = useLocation();

  const isPageActive = (pathname) => {
    return location.pathname === pathname ? 'font-bold' : '';
  };

  return (
    <div className='bg-[#0C132F] py-10'>
      <Default>
        <div className="flex rounded-full border-2 lg:mx-44 md:mx-16 mx-8 bg-navbar h-auto w-auto container items-center justify-between py-2">
          <div className='flex text-white gap-8 ml-8 item-center max-md:hidden'>
            <Link to="/" className={`font-bold text-xl hover:scale-110 transition-all ${isPageActive('/')}`}>Z-Sharp</Link>
            <Link to="/technologies" className={`mt-[3px] hover:underline ${isPageActive('/technologies')}`}>Technologies</Link>
            <Link to="/purchase" className={`mt-[3px] hover:underline ${isPageActive('/purchase')}`}>Purchase</Link>
            <Link to="/about-us" className={`mt-[3px] hover:underline ${isPageActive('/about-us')}`}>About</Link>
            {auth.currentUser && auth.currentUser.email === 'ryo@admin.com' && <Link to="/admin-dashboard" className={`hover:underline ${isPageActive('/admin-dashboard')}`}>Admin</Link>}
          </div>
          <div>
            <Dropdown />
          </div>
        </div>
      </Default>
      <Mobile>
        <div className='flex flex-col rounded-[30px] bg-navbar border-2 py-4 px-4 gap-4 mx-4 w-auto'>
          <div className='flex justify-between'>
            <Link to="/" className={`font-bold text-3xl hover:scale-110 transition-all ${isPageActive('/')}`}>Z-Sharp</Link>
            <Dropdown />
          </div>
          <div className='flex justify-evenly'>
            <Link to="/technologies" className={`hover:underline ${isPageActive('/technologies')}`}>Technologies</Link>
            <Link to="/purchase" className={`hover:underline ${isPageActive('/purchase')}`}>Purchase</Link>
            <Link to="/about-us" className={`hover:underline ${isPageActive('/about-us')}`}>About</Link>
            {auth.currentUser && auth.currentUser.email === 'ryo@admin.com' && <Link to="/admin-dashboard" className={`hover:underline ${isPageActive('/admin-dashboard')}`}>Admin</Link>}
          </div>
        </div>
      </Mobile>

    </div>
  );
}

export default Header;
