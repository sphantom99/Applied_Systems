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
import { useRouter } from 'next/router';
import getUserStatistics from '../../../src/lib/getUserStatistics';
import Link from 'next/link'
export async function getServerSideProps(context) {
  let result;
  try {
    result = await getUserStatistics(context.params.username);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
  return { props: { result } };
}
export default function profile({ result }) {
  const router = useRouter();
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
          <br />
          <br />
          <Typography variant="h4" style={{ display: 'flex', alignSelf: 'flex-start' }}>
            Statistics
          </Typography>
          <Table>
            <TableRow>
              <TableCell>Last Upload: </TableCell>
              <TableCell>{result.lastUploadDate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ borderBottom: 'none' }}>Total HARs Uploaded: </TableCell>
              <TableCell style={{ borderBottom: 'none' }}>{result.totalUploads}</TableCell>
            </TableRow>
          </Table>
        </CardContent>
      </Card>
    </Container>
  );
}
