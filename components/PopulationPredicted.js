import React from 'react';
import {
  Card, CardContent, Chip, Box,
} from '@material-ui/core';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    pv: 70,
    amt: 2400,
  },
  {
    name: 'Feb',
    pv: 65,
    amt: 2210,
  },
  {
    name: 'Mar',
    pv: 63,
    amt: 2290,
  },
  {
    name: 'Apr',
    pv: 65,
    amt: 2000,
  },
];

export default function PopulationPredicted() {
  return (
    <Card sx={{ width: 600, height: 500 }}>
      <CardContent>
        <h4>Number of Startups being established in Greece in 2021</h4>
        <Box style={{ direction: 'row' }}>
          <h4>
            Situation:
            {' '}
            <Chip label="Neutral" color="primary" />
          </h4>
        </Box>

        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 50,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </CardContent>
    </Card>
  );
}
