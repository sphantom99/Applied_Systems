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
} from '@material-ui/core';
import React from 'react';
import Link from 'next/link';

export default function profile() {
  return (
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
                <TableCell>someone@example.com</TableCell>
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
  );
}
