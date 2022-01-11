/* eslint-disable react/jsx-props-no-spreading */
import {
  Container, Box, Typography, Tabs, Tab, Grid, TextField, Button,
} from '@material-ui/core';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import CompanyInfo from '../components/CompanyInfo';
import Finance from '../components/Finance';
import Finance1 from '../components/Finance1';
import FinancePie from '../components/FinancePie';
import Risk from '../components/Risk';
import Population from '../components/Population';
import PopulationPredicted from '../components/PopulationPredicted';

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
              <Tab label="Startup Population Greece" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid container>
              <Grid item xs={5}>
                <CompanyInfo />
              </Grid>
              <Grid item xs={7}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                  }}
                >
                  <Typography>Add information about your company</Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                  }}
                >
                  <TextField id="outlined-basic" label="Name" variant="outlined" />
                  <TextField id="outlined-basic" label="Value" variant="outlined" />
                  <Button type="submit">
                    <AddIcon />
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container>
              <Grid item xs={6}>
                <Finance />
                <FinancePie />
              </Grid>
              <Grid item xs={6}>
                <Finance1 />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Risk />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Grid container>
              <Grid item xs={7}>
                <Population />
              </Grid>
              <Grid item xs={5}>
                <PopulationPredicted />
              </Grid>
            </Grid>
          </TabPanel>
        </Box>
      </Container>
    </div>
  );
}
