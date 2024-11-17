import React from 'react';
import { useQuery, gql } from '@apollo/client';
import view from '../assets/view.svg';

const GET_RECENT_ACTIVITY = gql`
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

const Enter = () => {
  const { data, loading, error } = useQuery(GET_RECENT_ACTIVITY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const activities = data?.glAdmin?.RecentActivityData?.data || [];

  return (
    <section>
      {activities.map((activity, index) => (
        <section key={activity.contentId || index} className="flex-none w-[30%] bg-[#FFFFFF] p-4 rounded-lg shadow-md">
          <div className='flex gap-3 mt-5'>
            <img src={view} alt="error" />
            <div className='flex w-full justify-between'>
              <div>
                <h1 className='text-[13px] font-semibold'>{activity.customerType}</h1>
                <p className='text-[10px] mt-[-2px]'>{activity.logContent}</p>
              </div>
              <p className='text-[#F86624] mt-2 rounded h-6 text-[12px] font-semibold px-[10px] py-[4px] bg-[#F9731633]'>View</p>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default Enter;
