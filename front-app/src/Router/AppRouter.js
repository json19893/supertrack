import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from '../Components/Layout/MainLayout';
import Home from '../Components/Pages/Home';
import Users from '../Components/Pages/Users';
import Login from '../Components/Auth/Login';

const AppRouter = () => (
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </MainLayout>
  </Router>
);

export default AppRouter;
