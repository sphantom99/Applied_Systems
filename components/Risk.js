import React, { useState } from 'react';

import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@material-ui/core';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts';

const data = [
  {
    name: 'Jan',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Apr',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default function Risk() {
  const [sector, setSector] = useState('');

  const handleChange = (event) => {
    setSector(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sector</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sector}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={1}>Behavior Based Safety</MenuItem>
              <MenuItem value={2}>Fire</MenuItem>
              <MenuItem value={3}>Health and Wellness</MenuItem>
              <MenuItem value={4}>Human Resources and Employment</MenuItem>
              <MenuItem value={5}>IT / Cyber Security</MenuItem>
              <MenuItem value={6}>Job Safety Analysis Templates</MenuItem>
              <MenuItem value={6}>Workzone Safety</MenuItem>
              <MenuItem value="">nothing</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={8}>
          {sector !== '' && (
            <Card sx={{ width: 550, height: 400 }}>
              <CardHeader>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  General Income
                </Typography>
              </CardHeader>
              <CardContent>
                <LineChart
                  width={500}
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
                  <ReferenceLine x="Mar" stroke="red" label="Max Income" />
                  <ReferenceLine y={9800} label="Max" stroke="red" />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </CardContent>
            </Card>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
