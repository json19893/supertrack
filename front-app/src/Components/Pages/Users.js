import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, message } from 'antd';
import AddUser from '../Users/AddUser';
import EditUser from '../Users/EditUser';
import DeleteUser from '../Users/DeleteUser';
import userService from '../../services/userService';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isAddModalVisible, setAddModalVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await userService.getUsers();
      setUsers(response.data);
    } catch (error) {
      message.error('Failed to load users');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddSuccess = () => {
    fetchUsers();
    setAddModalVisible(false);
  };

  const handleEditSuccess = () => {
    fetchUsers();
    setEditModalVisible(false);
  };

  return (
    <div>
      <h1>Users</h1>
      <Button type="primary" onClick={() => setAddModalVisible(true)}>
        Add User
      </Button>
      <Table dataSource={users} rowKey="id">
        <Table.Column title="Name" dataIndex="name" key="name" />
        <Table.Column title="Email" dataIndex="email" key="email" />
        <Table.Column title="Role" dataIndex="role" key="role" />
        <Table.Column
          title="Actions"
          key="actions"
          render={(text, record) => (
            <span>
              <Button
                type="link"
                onClick={() => {
                  setSelectedUserId(record.id);
                  setEditModalVisible(true);
                }}
              >
                Edit
              </Button>
              <DeleteUser userId={record.id} onSuccess={fetchUsers} />
            </span>
          )}
        />
      </Table>

      <Modal
        title="Add User"
        visible={isAddModalVisible}
        footer={null}
        onCancel={() => setAddModalVisible(false)}
      >
        <AddUser onSuccess={handleAddSuccess} />
      </Modal>

      <Modal
        title="Edit User"
        visible={isEditModalVisible}
        footer={null}
        onCancel={() => setEditModalVisible(false)}
      >
        {selectedUserId && (
          <EditUser userId={selectedUserId} onSuccess={handleEditSuccess} />
        )}
      </Modal>
    </div>
  );
};

export default Users;
