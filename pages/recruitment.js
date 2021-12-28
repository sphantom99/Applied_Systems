/* eslint-disable react/jsx-props-no-spreading */
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
import { GitHub, LinkedIn, SearchOutlined } from '@material-ui/icons';
import React, { useState } from 'react';

function Recruitment() {
  const [searched, setSearched] = useState(false);
  const employees = [
    {
      name: 'John Doe',
      roles: 'Software Engineer',
      tags: ['Software Engineer', 'DevOps'],
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis et tellus eu pellentesque. Curabitur nibh leo, vehicula at ante.',
    },
    {
      name: 'Jane Doe',
      roles: 'Software Engineer',
      tags: ['Software Engineer', 'Marketing'],
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis et tellus eu pellentesque. Curabitur nibh leo, vehicula at ante.',
    },
    {
      name: 'Jane Doe',
      roles: 'Software Engineer',
      tags: ['Software Engineer', 'HR'],
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis et tellus eu pellentesque. Curabitur nibh leo, vehicula at ante.',
    },
    {
      name: 'Jane Doe',
      roles: 'Software Engineer',
      tags: ['Software Engineer'],
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis et tellus eu pellentesque. Curabitur nibh leo, vehicula at ante.',
    },
    {
      name: 'John Doe',
      roles: 'Software Engineer',
      tags: ['Software Engineer'],
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis et tellus eu pellentesque. Curabitur nibh leo, vehicula at ante.',
    },
    {
      name: 'Jane Doe',
      roles: 'Software Engineer',
      tags: ['Software Engineer'],
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
            <Typography variant="h5">Look For Your Next Employee!</Typography>
          </Box>
          <Box display="flex" flexDirection="row" width="100%" justifyContent="center">
            <TextField placeholder="e.x. Jane Doe" style={{ width: '50%' }} />
            <IconButton onClick={() => setSearched(true)} size="large" color="primary">
              <SearchOutlined />
            </IconButton>
            <Button color="primary">Clear</Button>
          </Box>
        </Box>
        <Box paddingTop="2%" display="flex" flexDirection="column" justifyContent="center">
          <Paper>
            <Box display="flex" justifyContent="space-around" paddingBottom="2%" paddingTop="2%">
              <Autocomplete
                multiple
                style={{ width: '25%' }}
                disableCloseOnSelect
                options={[
                  { id: 1, descr: 'Φοιτητής Πανεπιστημιού' },
                  { id: 2, descr: 'Απόφοιτος' },
                  { id: 3, descr: 'Μεταπτυχιακός Φοιτητής' },
                  { id: 4, descr: 'Διδακτορικός Φοιτητής' },
                ]}
                getOptionLabel={(option) => option.descr}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" label="Ιδιότητα" />
                )}
              />
              <Autocomplete
                multiple
                disableCloseOnSelect
                style={{ width: '25%' }}
                options={[
                  { id: 1, descr: 'Καμία' },
                  { id: 2, descr: '1' },
                  { id: 3, descr: '2' },
                  { id: 4, descr: '3+' },
                ]}
                getOptionLabel={(option) => option.descr}
                renderInput={(params) => (
                  <TextField {...params} variant="outlined" label="Χρόνια Εμπειρίας" />
                )}
              />
            </Box>
            <Box display="flex" justifyContent="space-around" paddingBottom="2%">
              <Autocomplete
                style={{ width: '25%' }}
                multiple
                disableCloseOnSelect
                options={[
                  { id: 1, descr: 'Software Engineer' },
                  { id: 2, descr: 'Dev Ops' },
                  { id: 3, descr: 'Marketing' },
                  { id: 4, descr: 'HR' },
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
                  { id: 1, descr: 'Φοιτητής Πανεπιστημιού' },
                  { id: 2, descr: 'Απόφοιτος' },
                  { id: 3, descr: 'Μεταπτυχιακός Φοιτητής' },
                  { id: 4, descr: 'Διδακτορικός Φοιτητής' },
                ]}
                getOptionLabel={(option) => option.descr}
                renderInput={(params) => <TextField {...params} variant="outlined" label="Άλλο" />}
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
                            image={`/recruitment/${index + 1}.jfif`}
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
                            <Box display="flex" justifyContent="flex-end" width="65%">
                              <IconButton href="https://www.linkedin.com"><LinkedIn color="primary" /></IconButton>
                              <IconButton href="https://www.github.com"><GitHub color="primary" /></IconButton>
                            </Box>
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

export default Recruitment;
