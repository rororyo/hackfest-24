import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Signin from './app/signin/Main';
import Homepage from './app/Homepage/Main';
import Tech from './app/technologies/Main';
import Purchase from './app/purchase/Main';
import AboutUs from './app/about-us/Main';
import Signup from './app/signup/Main';
import UserDashboard from './app/user-dashboard/Main'
import UserBusinessIntelligence from './app/user-dashboard/business-intelligence/Main'
import UserMarketResearch from './app/user-dashboard/market-research/Main'
import UserBusinessConsultant from './app/user-dashboard/business-consultant/Main'
import AdminDashboard from './app/admin-dashboard/Main'
import AdminBusinessIntelligence from './app/admin-dashboard/business-intelligence/Main'
// import AdminMarketResearch from './app/admin-dashboard/market-research/Main'
// import AdminBusinessConsultant from './app/admin-dashboard/business-consultant/Main'
import AdminDashboardGetUser from './app/admin-dashboard-getuser/Main'
import CobaUpload from './app/coba-upload/Main'
import AdminDashboardGetData from './app/admin-dashboard-getdata/Main'
import { useState,useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
const AppRoutes = () => {


  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Homepage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/technologies" element={<Tech />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/about-us" element={<AboutUs />} />

      {/* user dashboard */}
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/user-dashboard/BI" element={<UserBusinessIntelligence />} />
      <Route path="/user-dashboard/MR" element={<UserMarketResearch />} />
      <Route path="/user-dashboard/BC" element={<UserBusinessConsultant />} />


      {/* admin dashboard */}
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin-dashboard/BI" element={<AdminBusinessIntelligence />} />
      {/* <Route path="/admin-dashboard/MR" element={<AdminDashboard />} />
      <Route path="/admin-dashboard/BC" element={<AdminDashboard />} /> */}
      <Route path="/coba-upload" element={<CobaUpload />} />
      <Route path="/admin-dashboard-getdata" element={<AdminDashboardGetData />} />
      <Route path="/admin-dashboard-getuser" element={<AdminDashboardGetData />} />
    </Routes>
  );
}

export default AppRoutes;
