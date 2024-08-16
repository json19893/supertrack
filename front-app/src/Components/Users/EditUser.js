import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, message } from 'antd';
import userService from '../../services/userService';

const { Option } = Select;

const EditUser = ({ userId, onSuccess }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await userService.getUserById(userId);
        form.setFieldsValue(data);  // Set the form values with the fetched user data
      } catch (error) {
        message.error('Failed to load user data');
      }
    };

    fetchUser();
  }, [userId, form]);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await userService.updateUser(userId, values);
      message.success('User updated successfully');
      onSuccess(); // Llama a onSuccess para refrescar la lista de usuarios
    } catch (error) {
      message.error('Failed to update user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      form={form}
      name="edit-user"
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
          Update User
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditUser;
