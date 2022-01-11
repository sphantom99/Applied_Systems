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
    pv: 30,
    amt: 2400,
  },
  {
    name: 'Feb',
    pv: 30,
    amt: 2210,
  },
  {
    name: 'Mar',
    pv: 50,
    amt: 2290,
  },
  {
    name: 'Apr',
    pv: 70,
    amt: 2000,
  },
  {
    name: 'May',
    pv: 79,
    amt: 2181,
  },
  {
    name: 'Jun',
    pv: 84,
    amt: 2500,
  },
  {
    name: 'Jul',
    pv: 100,
    amt: 2100,
  },
  {
    name: 'Aug',
    pv: 60,
    uv: 60,
    amt: 2210,
  },
  {
    name: 'Sep',
    pv: 50,
    uv: 67,
    amt: 2290,
  },
  {
    name: 'Oct',
    pv: 60,
    uv: 69,
    amt: 2000,
  },
  {
    name: 'Nov',
    pv: 63,
    uv: 70,
    amt: 2181,
  },
  {
    name: 'Dec',
    pv: 67,
    uv: 73,
    amt: 2500,
  },
];

export default function Population() {
  return (
    <Card sx={{ width: 600, height: 500 }}>
      <CardContent>
        <h4>Number of Startups being established in Greece in 2021</h4>
        <Box style={{ direction: 'row' }}>
          <h4>
            Situation:
            {' '}
            <Chip label="Good" color="success" />
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
