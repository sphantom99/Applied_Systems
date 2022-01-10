import * as React from 'react';
import {
  Box, Typography, Container, Card, Link, Grid,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Image from 'next/image';
import Cookies from 'js-cookie';

export default function Index() {
  return (
    <Box
      style={{
        display: 'flex',
        paddingLeft: 100,
        'justify-content': 'space-between',
        'align-content': 'space-between',
        width: 1400,
      }}
    >
      <Grid container spacing={7}>
        <Grid item xs={7}>
          <Card style={{ height: 500 }}>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant="h6">
                  Welcome to One Stop Startup, a place where you can easily,
                  {' '}
                  <strong>build</strong>
                  ,
                  {' '}
                  <strong>administrate</strong>
                  {' '}
                  and
                  <strong> analyze</strong>
                  {' '}
                  your business. We offer a variaty of features to help
                  you and your business to thrive, while minimizing the overall risk. At any point
                  in time you are able to see statistics made to help you organize and plan your
                  next step.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Image src="/business.jpg" alt="Picture of the author" width={600} height={350} />
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Card style={{ height: 500 }}>
            <Container component="main" maxWidth="md">
              <CssBaseline />
              <Box
                style={{
                  display: 'flex',
                  'flex-direction': 'column',
                  'justify-content': 'center',
                  'align-items': 'center',
                }}
              >
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>

                <form method="post">
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Link
                    href="/confirmYMS"
                    passref
                    style={{ 'text-decoration': 'none', color: 'white' }}
                  >
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      style={{ backgroundColor: '#194b8c' }}
                      onClick={() => Cookies.set('sessionCookie', true)}
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Grid container alignItems="center" justifyContent="center">
                    <Grid item>
                      <br />
                      <Typography variant="subtitle1">
                        Don&apos;t have an account? Don&apos;t worry!
                        <br />
                        <br />
                        <Link
                          href="#"
                          passref
                          style={{ 'text-decoration': 'none', color: 'white' }}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            style={{ backgroundColor: '#194b8c', marginLeft: '80px' }}
                          >
                            Register
                          </Button>
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Container>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
