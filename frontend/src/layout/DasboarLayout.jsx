import React from 'react'

const DashboardLayout = () => {
    return (
      <>
        <Topbar />
        <div className="flex">
          <Sidebar />
          <Outlet />
        </div>
      </>
    );
  };

export default DasboarLayout