const isPageActive = (pathname) => {
  return location.pathname === pathname ? 'font-bold border bg-[#121212] w-fit mx-auto rounded-xl p-1' : '';
};

export default function Sidebar() {
  return <div className='flex flex-col w-1/6 h-full py-8 gap-1 border-r bg-[#0C132F]'>
    <a href="/admin-dashboard" className='hover:scale-110'>
      <div className='text-3xl font-bold text-center mt-10`'>Z-Sharp</div>
      <div className='text-xl font-bold text-center mt-10`'>Admin Dashboard</div>
    </a>
    <a href="/admin-dashboard" className='mt-8'>
      <div className={`hover:underline text-md text-center ${isPageActive('/user-dashboard')}`}>Business Assistant</div>
    </a>
    <a href="/admin-dashboard/BI" className='mt-4'>
      <div className={`hover:underline text-md text-center ${isPageActive('/admin-dashboard/BI')}`}>Business Intelligence</div>
    </a>
    <a href="/admin-dashboard/MR" className='mt-4'>
      <div className={`hover:underline text-md text-center ${isPageActive('/admin-dashboard/MR')}`}>Market Research</div>
    </a>
    <a href="/admin-dashboard/BC" className='mt-4'>
      <div className={`hover:underline text-md text-center ${isPageActive('/admin-dashboard/BC')}`}>Business Consultant</div>
    </a>
  </div>
}