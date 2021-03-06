/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
import {
  Button,
  Card,
  CardContent,
  Container,
  Box,
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Divider,
  TableHead,
  Autocomplete,
  TextField,
} from '@material-ui/core';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import getAdminStats from '../../src/lib/getAdminStatistics';

export async function getServerSideProps() {
  const adminBasicData = await getAdminStats();
  console.log(adminBasicData);
  return { props: { adminBasicData } };
}
export default function UserHome({ adminBasicData }) {
  const [dayFilter, setdayFilter] = useState([]);
  const [contentTypeFilter, setContentTypeFilter] = useState([]);
  const [methodFilter, setMethodFilter] = useState([]);
  const [ispFilter, setIspFilter] = useState([]);
  const [diagramData, setDiagramData] = useState();
  const [histogramData, setHistogramData] = useState();
  const [contentHistogramFilter, setContentHistogramFilter] = useState([]);
  const [ispHistogramFilter, setIspHistogramFilter] = useState([]);
  const [contentPieFilter, setContentPieFilter] = useState([]);
  const [ispPieFilter, setIspPieFilter] = useState([]);
  const [pieData, setPieData] = useState([]);

  useEffect(async () => {
    const dataReq = await axios.post('/api/getDiagramData', {
      dayFilter,
      contentTypeFilter,
      methodFilter,
      ispFilter,
    });
    console.log(dayFilter, contentTypeFilter, methodFilter, ispFilter);
    setDiagramData(dataReq.data);
  }, [dayFilter, contentTypeFilter, methodFilter, ispFilter]);

  useEffect(async () => {
    const result = await axios.post('/api/getHistogramData', {
      contentHistogramFilter,
      ispHistogramFilter,
    });
    setHistogramData(result.data);
  }, [contentHistogramFilter, ispHistogramFilter]);

  useEffect(async () => {
    const result = await axios.post('/api/getMinMax', {
      contentPieFilter,
      ispPieFilter,
    });
    setPieData(result.data);
    console.log(pieData);
  }, [contentPieFilter, ispPieFilter]);
  const daysOfTheWeek = [
    { label: 'Monday', value: 1 },
    { label: 'Tuesday', value: 2 },
    { label: 'Wednesday', value: 3 },
    { label: 'Thurday', value: 4 },
    { label: 'Friday', value: 5 },
    { label: 'Saturday', value: 6 },
    { label: 'Sunday', value: 7 },
  ];
  const contentTypes = adminBasicData.averageTiming.map((status) => status._id ?? 'unknown');

  const methods = adminBasicData.entryPerMethod.map((entry) => entry._id);
  const isps = adminBasicData.distinctIsps.unique;

  const data01 = [
    {
      name: 'Group A',
      value: 400,
    },
    {
      name: 'Group B',
      value: 300,
    },
    {
      name: 'Group C',
      value: 300,
    },
    {
      name: 'Group D',
      value: 200,
    },
    {
      name: 'Group E',
      value: 278,
    },
    {
      name: 'Group F',
      value: 189,
    },
  ];
  const COLORS = ['#4f2e8c', '#b438c7', '#2da1c4'];
  return (
    <div>
      <Container>
        <Card>
          <CardContent>
            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h4" style={{ marginBottom: '5%' }}>
                Welcome Admin
              </Typography>
            </Box>
            <Typography variant="h6" style={{ paddingLeft: '1%' }}>
              Overview
            </Typography>
            <Divider />
            <Table>
              <TableRow>
                <TableCell> Total Users</TableCell>
                <TableCell>{adminBasicData.usersCount}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell> Total Unique Isps&apos;</TableCell>
                <TableCell>{adminBasicData.distinctIsps.count}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell> Total Unique Domains</TableCell>
                <TableCell>{adminBasicData.distinctDomains}</TableCell>
              </TableRow>
            </Table>
            <Divider style={{ marginBottom: '5%' }} />
            <Typography variant="h6" style={{ paddingLeft: '1%' }}>
              Requests By Status
            </Typography>
            <Divider />
            <TableContainer>
              <Table>
                <TableHead>
                  <TableCell>Status:</TableCell>
                  {adminBasicData.entryPerStatus.map((status) => (
                    <TableCell>{status._id ?? 'unknown'}</TableCell>
                  ))}
                </TableHead>
                <TableBody>
                  <TableCell>Amount:</TableCell>
                  {adminBasicData.entryPerStatus.map((status) => (
                    <TableCell>{status.count}</TableCell>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Divider style={{ marginBottom: '5%' }} />

            <Typography variant="h6" style={{ paddingLeft: '1%' }}>
              Requests By Method
            </Typography>
            <Divider />
            <TableContainer>
              <Table>
                <TableHead>
                  <TableCell>Status:</TableCell>
                  {adminBasicData.entryPerMethod.map((status) => (
                    <TableCell>{status._id ?? 'unknown'}</TableCell>
                  ))}
                </TableHead>
                <TableBody>
                  <TableCell>Amount:</TableCell>
                  {adminBasicData.entryPerMethod.map((status) => (
                    <TableCell>{status.count}</TableCell>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Divider style={{ marginBottom: '5%' }} />

            <Typography variant="h6" style={{ paddingLeft: '1%' }}>
              Mean Age By Content-Type
            </Typography>
            <Divider />
            <TableContainer>
              <Table>
                <TableHead>
                  <TableCell>Status:</TableCell>
                  {adminBasicData.averageTiming.map((status) => (
                    <TableCell>{status._id ?? 'unknown'}</TableCell>
                  ))}
                </TableHead>
                <TableBody>
                  <TableCell>Amount:</TableCell>
                  {adminBasicData.averageTiming.map((status) => (
                    <TableCell>{status.averageTime}</TableCell>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Divider style={{ marginBottom: '5%' }} />
            {console.log(diagramData)}
            <Typography variant="h6" style={{ paddingLeft: '1%' }}>
              Average Timings Graph
            </Typography>
            <Divider style={{ marginBottom: '5%' }} />
            <ResponsiveContainer minWidth={200} minHeight={200}>
              <BarChart data={diagramData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="_id" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="averageTime" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Autocomplete
                multiple
                style={{ minWidth: '20%', marginBottom: '5%' }}
                disableCloseOnSelect
                id="daysDiag"
                options={daysOfTheWeek}
                onChange={(_, newValue) => setdayFilter(newValue.map((node) => node.label))}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => <TextField {...params} variant="standard" label="Day" />}
              />
              <Autocomplete
                multiple
                style={{ minWidth: '20%', marginBottom: '5%' }}
                disableCloseOnSelect
                id="contentDiag"
                options={contentTypes}
                onChange={(_, newValue) => setContentTypeFilter(newValue)}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" label="Content" />
                )}
              />
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Autocomplete
                multiple
                style={{ minWidth: '20%', marginBottom: '5%' }}
                disableCloseOnSelect
                id="methodsDiag"
                options={methods}
                onChange={(_, newValue) => setMethodFilter(newValue)}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" label="Method" />
                )}
              />
              <Autocomplete
                multiple
                style={{ minWidth: '20%', marginBottom: '5%' }}
                disableCloseOnSelect
                id="isp"
                options={isps}
                onChange={(_, newValue) => setIspFilter(newValue)}
                getOptionLabel={(option) => option}
                renderInput={(params) => <TextField {...params} variant="standard" label="Isp" />}
              />
            </Box>
            <Typography variant="h6" style={{ paddingLeft: '1%' }}>
              MaxAge Graph
            </Typography>
            <Divider style={{ marginBottom: '5%' }} />
            <ResponsiveContainer minWidth={200} minHeight={200}>
              <BarChart data={histogramData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Autocomplete
                multiple
                style={{ minWidth: '20%', marginBottom: '5%' }}
                disableCloseOnSelect
                id="contentHist"
                options={contentTypes}
                onChange={(_, newValue) => setContentHistogramFilter(newValue)}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" label="Content" />
                )}
              />
              <Autocomplete
                multiple
                style={{ minWidth: '20%', marginBottom: '5%' }}
                disableCloseOnSelect
                id="IspsHist"
                options={isps}
                onChange={(_, newValue) => setIspHistogramFilter(newValue)}
                getOptionLabel={(option) => option}
                renderInput={(params) => <TextField {...params} variant="standard" label="Isps" />}
              />
            </Box>
            <ResponsiveContainer minWidth={200} minHeight={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="count"
                  nameKey="label"
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Autocomplete
                multiple
                style={{ minWidth: '20%', marginBottom: '5%' }}
                disableCloseOnSelect
                id="ContentPie"
                options={contentTypes}
                onChange={(_, newValue) => setContentPieFilter(newValue)}
                getOptionLabel={(option) => option}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" label="Content" />
                )}
              />
              <Autocomplete
                multiple
                style={{ minWidth: '20%', marginBottom: '5%' }}
                disableCloseOnSelect
                id="IspsPie"
                options={isps}
                onChange={(_, newValue) => setIspPieFilter(newValue)}
                getOptionLabel={(option) => option}
                renderInput={(params) => <TextField {...params} variant="standard" label="Isps" />}
              />
            </Box>

            <Box style={{ display: 'flex', justifyItems: 'center', flexDirection: 'column' }}>
              <Button variant="contained" style={{ marginBottom: '5%' }}>
                {' '}
                Timings
                {' '}
              </Button>

              <Button variant="contained" style={{ marginBottom: '5%' }}>
                {' '}
                HTTP Headers
                {' '}
              </Button>

              <Button variant="contained" style={{ marginBottom: '5%' }}>
                {' '}
                Data Visualization
                {' '}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
