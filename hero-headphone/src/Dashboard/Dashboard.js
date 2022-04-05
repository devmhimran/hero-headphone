import React from 'react';
import { Container } from 'react-bootstrap';
// import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashboardChart from '../DashboardChart/DashboardChart';

const Dashboard = () => {
    
    return (
        <div className='Dashboard__main py-5'>
        <div className="all__charts">
        </div>
        <DashboardChart></DashboardChart>
        </div>
    );
};


export default Dashboard;

