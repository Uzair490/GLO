
import React, { useEffect } from 'react';
import Layout from '../../components/Layout';
import Breadcrumbs from '../UserManagement/Breadcrumbs';
import { useNavigate } from 'react-router-dom';

const UserManagement = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to admin users by default when the component mounts
    navigate('/adminusers');
  }, [navigate]);

  return (
    <Layout>
      <h1>User management</h1>
      <Breadcrumbs />
    </Layout>
  );
};

export default UserManagement;
