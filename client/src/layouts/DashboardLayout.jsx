import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

const DashboardLayout = ({ role, menuItems }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear your auth tokens here
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* 1. Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-slate-900 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-6 text-xl font-bold border-b border-slate-700">
          {isSidebarOpen ? 'FYP Portal' : 'FP'}
        </div>
        
        <nav className="flex-1 mt-6">
          {menuItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.path} 
              className="flex items-center px-6 py-3 hover:bg-slate-800 transition-colors"
            >
              <span className="text-lg">{item.icon}</span>
              {isSidebarOpen && <span className="ml-4">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="w-full bg-slate-800 py-2 rounded text-sm"
          >
            {isSidebarOpen ? 'Collapse' : '>>'}
          </button>
        </div>
      </aside>

      {/* 2. Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Navbar */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8">
          <div className="text-gray-600 font-medium capitalize">
            {role} Panel / Dashboard
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 italic">Connected as {role}</span>
            <button 
              onClick={handleLogout}
              className="bg-red-50 text-red-600 px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-100 transition"
            >
              Logout
            </button>
          </div>
        </header>

        {/* 3. Page Content (The Outlet) */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-8">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;