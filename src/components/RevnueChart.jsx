import React from 'react';
import { Bar } from 'react-chartjs-2';
import { gql, useQuery } from '@apollo/client';

const GET_REVENUE_CHART_DATA = gql`
    query GlAdmin {
        glAdmin {
            RevenueChartData {
                ... on ChartDataResponseType {
                    status
                    datasets {
                        customerType
                        data {
                            month
                            amount
                        }
                    }
                    summary {
                        customerType
                        total
                        percentage
                    }
                }
                ... on ChartDataError {
                    message
                }
            }
        }
    }
`;

const RevenueChart = () => {
    const { loading, error, data } = useQuery(GET_REVENUE_CHART_DATA);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const datasets = data.glAdmin.RevenueChartData.datasets.map(dataset => ({
        label: dataset.customerType,
        data: dataset.data.map(item => item.amount),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }));

    const labels = data.glAdmin.RevenueChartData.datasets[0]?.data.map(item => item.month) || [];

    const chartData = {
        labels,
        datasets,
    };

    return (
        <div>
            <h2>Revenue Chart</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default RevenueChart;
