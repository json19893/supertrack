import React from 'react';
import { Button, Popconfirm, message } from 'antd';
import userService from '../../services/userService';

const DeleteUser = ({ userId, onSuccess }) => {
  const handleDelete = async () => {
    try {
      await userService.deleteUser(userId);
      message.success('User deleted successfully');
      onSuccess(); // Llama a onSuccess para refrescar la lista de usuarios
    } catch (error) {
      message.error('Failed to delete user');
    }
  };

  return (
    <Popconfirm
      title="Are you sure you want to delete this user?"
      onConfirm={handleDelete}
      okText="Yes"
      cancelText="No"
    >
      <Button type="primary" danger>
        Delete
      </Button>
    </Popconfirm>
  );
};

export default DeleteUser;
