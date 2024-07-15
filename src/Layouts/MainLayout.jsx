import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div 
      className='relative px-5 min-h-screen bg-cover bg-center bg-fixed text-white' 
      style={{
        backgroundImage: "url('/guide.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-100"></div>
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
