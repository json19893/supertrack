import React, { useState } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import userService from '../../services/userService';

const { Option } = Select;

const AddUser = ({ onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await userService.addUser(values);
      message.success('User added successfully');
      onSuccess(); // Llama a onSuccess para refrescar la lista de usuarios
    } catch (error) {
      message.error('Failed to add user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      name="add-user"
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please input the name!' }]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input the email!' }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input the password!' }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item
        name="role"
        rules={[{ required: true, message: 'Please select a role!' }]}
      >
        <Select placeholder="Select a role">
          <Option value="admin">Admin</Option>
          <Option value="user">User</Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Add User
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddUser;
