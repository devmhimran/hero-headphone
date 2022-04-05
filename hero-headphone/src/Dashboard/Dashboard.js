import React from 'react';
import { Container } from 'react-bootstrap';
// import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashboardChart from '../DashboardChart/DashboardChart';

const Dashboard = () => {
    
    return (
        <div className='Dashboard__main py-5'>
            <Container>
                <h1>Welcome To Dashboard</h1>
            </Container>
        <div className="all__charts">
        
        </div>
        {/* <DashboardChart></DashboardChart> */}
        </div>
    );
};


export default Dashboard;

