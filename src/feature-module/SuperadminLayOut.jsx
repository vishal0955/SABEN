import React from 'react'
import SASidebar from './SuperAdminBPAV/Super Admin/Sidebar';
import { Outlet } from 'react-router';

const SuperadminLayOut = () => {
  return (
    <>
    <SASidebar />
   
     <Outlet />

    </>

  )
}

export default SuperadminLayOut;