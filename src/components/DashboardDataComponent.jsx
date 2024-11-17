
import React from 'react';
import { useQuery, gql } from '@apollo/client';


const GET_DASHBOARD_DATA = gql`
    query GlAdmin {
        glAdmin {
            DashboardData {
                ... on TotalCountsResponse {
                    totalIndividualCustomers
                    percentageIndividualCustomerChange
                    totalEnterpriseCustomers
                    percentageEntCustomerChange
                    totalAdvisorCustomers
                    percentageAdvisorChange
                    todaysTotalAmount
                    percentageTotalAmountChange
                    totalActiveCustomers
                    percentageChange
                    totalActiveCampaigns
                    activeCampaignsPercentageChange
                    totalPosts
                    postChangePercentage
                }
                ... on Error {
                    status
                    message
                }
            }
        }
    }
`;

const DashboardDataComponent = () => {
    const { loading, error, data } = useQuery(GET_DASHBOARD_DATA);

    if (loading) return <p className="text-blue-600">Loading...</p>;
    if (error) return <p className="text-red-500">Error: {error.message}</p>;

    const dashboardData = data?.glAdmin?.DashboardData;

    if (dashboardData.__typename === "Error") {
        return (
            <div className="bg-red-100 p-4 rounded-lg text-red-600">
                <h3>Error {dashboardData.status}</h3>
                <p>{dashboardData.message}</p>
            </div>
        );
    }

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Dashboard Data</h2>
            <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow">
                    <p>Total Individua {dashboardData.totalIndividualCustomers}</p>
                    <p>Change: {dashboardData.percentageIndividualCustomerChange}%</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <p>Total Enterprise Customers: {dashboardData.totalEnterpriseCustomers}</p>
                    <p>Change: {dashboardData.percentageEntCustomerChange}%</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <p>Total Advisor Customers: {dashboardData.totalAdvisorCustomers}</p>
                    <p>Change: {dashboardData.percentageAdvisorChange}%</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <p>Today's Total Amount: ${dashboardData.todaysTotalAmount}</p>
                    <p>Change: {dashboardData.percentageTotalAmountChange}%</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <p>Total Active Customers: {dashboardData.totalActiveCustomers}</p>
                    <p>Change: {dashboardData.percentageChange}%</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <p>Total Active Campaigns: {dashboardData.totalActiveCampaigns}</p>
                    <p>Change: {dashboardData.activeCampaignsPercentageChange}%</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow">
                    <p>Total Posts: {dashboardData.totalPosts}</p>
                    <p>Change: {dashboardData.postChangePercentage}%</p>
                </div>
            </div>
        </div>
    );
};

export default DashboardDataComponent;
