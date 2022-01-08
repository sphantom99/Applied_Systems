/* eslint-disable react/jsx-props-no-spreading */
import {
  Container, Box, Typography, Tabs, Tab,
} from '@material-ui/core';
import React from 'react';
import CompanyInfo from '../components/CompanyInfo';
import Finance from '../components/Finance';
import Risk from '../components/Risk';

function TabPanel(props) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function financeRiskAssesment() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Container>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Company information" {...a11yProps(0)} />
              <Tab label="Finance" {...a11yProps(1)} />
              <Tab label="Risk Assesment" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <CompanyInfo />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Finance />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Risk />
          </TabPanel>
        </Box>
      </Container>
    </div>
  );
}
