import {
  Avatar,
  Card,
  CardContent,
  Container,
  Typography,
  Box,
  Table,
  TableRow,
  Button,
  TableCell,
  Grid,
} from '@material-ui/core';
import {
  CardActions,
  CardHeader,
  CardMedia,
  Chip,
  Divider,
  IconButton,
  Paper,
} from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';
import React from 'react';
import Link from 'next/link';
import Map from '../../../components/Map';

const employees = [
  {
    roles: 'Software Engineer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis et tellus eu pellentesque. Curabitur nibh leo, vehicula at ante.',
  },
  {
    roles: 'Software Engineer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis et tellus eu pellentesque. Curabitur nibh leo, vehicula at ante.',
  },
  {
    roles: 'Software Engineer',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis et tellus eu pellentesque. Curabitur nibh leo, vehicula at ante.',
  },
];

export default function profile() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Container>
          <Card>
            <CardContent>
              <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Avatar style={{ width: '20%', height: '20%' }} />
                <br />
                <Typography variant="h3">John Smith</Typography>
                <br />
                <br />
                <br />
                <Typography variant="h4" style={{ display: 'flex', alignSelf: 'flex-start' }}>
                  Info
                </Typography>
                <Table>
                  <TableRow>
                    <TableCell>Email</TableCell>
                    <TableCell>johnsmith@example.com</TableCell>
                    <TableCell>
                      <Button variant="contained">Change</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ borderBottom: 'none' }}>Username</TableCell>
                    <TableCell style={{ borderBottom: 'none' }}>johnSmith</TableCell>
                    <TableCell style={{ borderBottom: 'none' }}>
                      <Link href="/user/updateUsername">
                        <Button variant="contained">Change</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell style={{ borderBottom: 'none' }}>AFM</TableCell>
                    <TableCell style={{ borderBottom: 'none' }}>123456789</TableCell>
                  </TableRow>
                </Table>
              </Box>
              <br />
              <Typography variant="h4" style={{ display: 'flex', alignSelf: 'flex-start' }}>
                Subscriptions
              </Typography>
              <Table>
                <TableRow>
                  <TableCell>Subscription Type:</TableCell>
                  <TableCell>Standard(statistics included)</TableCell>
                  <TableCell>
                    <Button variant="contained">Change</Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ borderBottom: 'none' }}>Next Payment due: </TableCell>
                  <TableCell style={{ borderBottom: 'none' }}>14/2/2022</TableCell>
                </TableRow>
              </Table>
            </CardContent>
          </Card>
        </Container>
      </Grid>
      <Grid item xs={6}>
        <Map />
      </Grid>
      <Grid item xs={12}>
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
                      <CardMedia height={300} component="img" image={`/plans/${index + 1}.png`} />
                      <CardContent>{employee.bio}</CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}
