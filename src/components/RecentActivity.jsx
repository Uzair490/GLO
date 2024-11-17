import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GL_ADMIN_QUERY = gql`
  query GlAdmin {
    glAdmin {
      RecentActivityData {
        ... on RecentActivityResponseType {
          status
          message
          data {
            contentId
            contentType
            logContent
            customerType
            customerId
            customerName
            createdAt
          }
        }
        ... on Error {
          status
          message
        }
      }
    }
  }
`;

const RecentActivity = () => {
  const { loading, error, data } = useQuery(GL_ADMIN_QUERY);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-600">{error.message}</p>;

  console.log(data); 

  
  const recentActivityData = data.glAdmin.RecentActivityData;

  if (recentActivityData.status === 'success') {
    return (
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        {recentActivityData.data.length > 0 ? (
          recentActivityData.data.map((activity) => (
            <div key={activity.contentId} className="border rounded-lg p-4 mb-4 shadow">
              <h3 className="text-xl font-semibold">{activity.logContent}</h3>
              <p className="text-gray-600">Customer: {activity.customerName}</p>
              <p className="text-gray-600">Type: {activity.customerType}</p>
              <p className="text-gray-600">Created At: {new Date(activity.createdAt).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>No activities found.</p>
        )}
      </div>
    );
  } else {
    return (
      <div className="border rounded-lg p-4 mb-4 shadow">
        <p className="text-red-600">{recentActivityData.message}</p>
      </div>
    );
  }
};

export default RecentActivity;
