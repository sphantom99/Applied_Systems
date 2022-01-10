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

const fire = [
  {
    name: 'Jan',
    pv: 800,
    amt: 2400,
  },
  {
    name: 'Feb',
    pv: 900,
    amt: 2210,
  },
  {
    name: 'Mar',
    pv: 1000,
    amt: 2290,
  },
  {
    name: 'Apr',
    pv: 1000,
    amt: 2000,
  },
  {
    name: 'May',
    pv: 1500,
    amt: 2181,
  },
  {
    name: 'Jun',
    pv: 1700,
    amt: 2500,
  },
  {
    name: 'Jul',
    pv: 2000,
    amt: 2100,
  },
  {
    name: 'Aug',
    pv: 2500,
    amt: 2210,
  },
  {
    name: 'Sep',
    pv: 1900,
    amt: 2290,
  },
  {
    name: 'Oct',
    pv: 1000,
    amt: 2000,
  },
  {
    name: 'Nov',
    pv: 1000,
    amt: 2181,
  },
  {
    name: 'Dec',
    pv: 1000,
    amt: 2500,
  },
];

const behavior = [
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
    pv: 100,
    amt: 2210,
  },
  {
    name: 'Sep',
    pv: 96,
    amt: 2290,
  },
  {
    name: 'Oct',
    pv: 60,
    amt: 2000,
  },
  {
    name: 'Nov',
    pv: 70,
    amt: 2181,
  },
  {
    name: 'Dec',
    pv: 100,
    amt: 2500,
  },
];

const dict = {
  1: behavior,
  2: fire,
};

export default function Risk() {
  const [sector, setSector] = useState('');

  const handleChange = (event) => {
    setSector(event.target.value);
  };
  return (
    <Box sx={{ minWidth: 150 }}>
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
            <Card sx={{ width: 600, height: 400 }}>
              <CardHeader>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  General Income
                </Typography>
              </CardHeader>
              <CardContent>
                <LineChart
                  width={600}
                  height={300}
                  data={dict[sector]}
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
                  <ReferenceLine x="Mar" stroke="red" label="First Incident" />
                  <ReferenceLine x="Sep" stroke="red" label="Predicted" />
                  <ReferenceLine y={1764} stroke="red" label="High Fire Risk" />
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
