import React from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/authService';
import { Button } from 'antd';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default Logout;
