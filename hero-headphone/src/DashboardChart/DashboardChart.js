import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area} from 'recharts';

const DashboardChart = () => {
    const data = [
      
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    
      ];
    return (
      <div className="container">
        <div className='row'>

          <div className="col-lg-6">
          <h1 className='dashboard-tittle'>Month Wise </h1>
          <LineChart width={400} height={400} data={data}>
              <Line type="monotone" dataKey={'sell'}></Line>
              <XAxis dataKey={'month'}></XAxis>
              <YAxis dataKey={'sell'}></YAxis>
              <Tooltip></Tooltip>
              <Legend></Legend>
          </LineChart>
          </div>

          <div className="col-lg-6">
          <h1 className='dashboard-tittle' >Invesment</h1>
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend></Legend>
            <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
          </div>
      </div>
      </div>
    );
};

export default DashboardChart;
