import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import React, { useState } from 'react';

function serviceSearch() {
  const [searched, setSearched] = useState(false);
  const employees = [
    {
      name: 'Loremium',
      field: 'Software Development',
      tags: ['New', 'Top Rated'],
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis et tellus eu pellentesque. Curabitur nibh leo, vehicula at ante.',
    },
    {
      name: 'Ipsumium',
      roles: 'Software Development',
      tags: ['New', 'Top Rated'],
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis et tellus eu pellentesque. Curabitur nibh leo, vehicula at ante.',
    },
    {
      name: 'Company Name',
      roles: 'Logistics',
      tags: ['Experienced', 'Top Rated'],
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis et tellus eu pellentesque. Curabitur nibh leo, vehicula at ante.',
    },
    {
      name: 'Company Name',
      roles: 'Catering',
      tags: ['Experienced', 'Top Rated'],
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis et tellus eu pellentesque. Curabitur nibh leo, vehicula at ante.',
    },
    {
      name: 'Company Name',
      roles: 'Traveling',
      tags: ['New', 'Top Rated'],
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis et tellus eu pellentesque. Curabitur nibh leo, vehicula at ante.',
    },
    {
      name: 'Company Name',
      roles: 'Tourism',
      tags: ['New', 'Top Rated'],
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis et tellus eu pellentesque. Curabitur nibh leo, vehicula at ante.',
    },
  ];
  return (
    <div>
      <Container>
        <Box
          display="flex"
          alignItems="center"
          alignText="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Box display="flex" paddingBottom="2%">
            <Typography variant="h5">Look For A Service You Need!</Typography>
          </Box>
          <Box display="flex" flexDirection="row" width="100%" justifyContent="center">
            <TextField placeholder="e.x. Website Creation" style={{ width: '50%' }} />
            <IconButton onClick={() => setSearched(true)} size="large" color="primary">
              <SearchOutlined />
            </IconButton>
            <Button color="primary">Clear</Button>
          </Box>
        </Box>
        <Box paddingTop="2%" display="flex" flexDirection="column" justifyContent="center">
          <Paper elevation={4}>
            <Box display="flex" justifyContent="space-around" paddingBottom="2%" paddingTop="2%">
              <Autocomplete
                multiple
                style={{ width: '25%' }}
                disableCloseOnSelect
                options={[
                  { id: 1, descr: 'Τεχνολογία' },
                  { id: 2, descr: 'Διαφήμιση' },
                  { id: 3, descr: 'Χονδρικό Εμπόριο' },
                  { id: 4, descr: 'Ταξιδιωτικός' },
                  { id: 5, descr: 'Διασκέδασης & Αναψυχής' },
                  { id: 6, descr: 'Εστίασης' },
                ]}
                getOptionLabel={(option) => option.descr}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" label="Τομέας" />
                )}
              />
              <Autocomplete
                multiple
                disableCloseOnSelect
                style={{ width: '25%' }}
                options={[
                  { id: 1, descr: 'Καμία' },
                  { id: 2, descr: '10-50' },
                  { id: 3, descr: '50-100' },
                  { id: 4, descr: '100+' },
                ]}
                getOptionLabel={(option) => option.descr}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" label="Μέγεθος Εταιρείας" />
                )}
              />
            </Box>
            <Box display="flex" justifyContent="space-around" paddingBottom="2%">
              <Autocomplete
                style={{ width: '25%' }}
                multiple
                disableCloseOnSelect
                options={[
                  { id: 1, descr: 'Καινούρια' },
                  { id: 2, descr: 'Έμπειρη' },
                  { id: 3, descr: 'Top Rated' },
                ]}
                getOptionLabel={(option) => option.descr}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" color="primary" label="Tags" />
                )}
              />
              <Autocomplete
                multiple
                disableCloseOnSelect
                style={{ width: '25%' }}
                options={[
                  { id: 1, descr: 'Μικροπρόθεσμη' },
                  { id: 2, descr: 'Μακροπρόθεσμη' },
                  { id: 3, descr: 'Ημερήσια' },
                  { id: 4, descr: 'Μηνιαία' },
                ]}
                getOptionLabel={(option) => option.descr}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" label="Συνεργασία" />
                )}
              />
            </Box>
          </Paper>
          {searched && (
            <Box paddingTop="5%">
              <Paper>
                <Box
                  display="flex"
                  justifyContent="space-around"
                  paddingTop="2%"
                  paddingBottom="2%"
                  paddingLeft="2%"
                  paddingRight="2%"
                >
                  <Grid container justifyContent="space-around" spacing={5}>
                    {employees.map((employee, index) => (
                      <Grid item xs={12} md={6} lg={4}>
                        <Card
                          style={{
                            borderRadius: '10px',
                            borderColor: '#6abaf7',
                            borderWidth: '2px',
                          }}
                          variant="outlined"
                        >
                          <CardHeader title={employee.name} />
                          <CardMedia
                            height={250}
                            component="img"
                            image={`/services/${index + 1}.jpg`}
                          />
                          <CardContent>
                            {employee.tags.map((tag) => (
                              <Chip label={tag} />
                            ))}
                            <Divider />
                            <br />
                            {employee.bio}
                          </CardContent>
                          <CardActions>
                            <Button>Learn More</Button>
                            {/* <Box display="flex" justifyContent="flex-end" width="65%">
                              <IconButton href="https://www.linkedin.com">
                                <LinkedIn color="primary" />
                              </IconButton>
                              <IconButton href="https://www.github.com">
                                <GitHub color="primary" />
                              </IconButton>
                            </Box> */}
                          </CardActions>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Paper>
            </Box>
          )}
        </Box>
      </Container>
    </div>
  );
}

export default serviceSearch;
