import * as React from 'react';
import {
  Box, Typography, Container, Card, Link, Grid,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

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
      <Grid container>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <Card style={{ height: 700 }}>
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
                  Confirm YMS information
                </Typography>

                <form method="post">
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Full Name(Latin)"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="AFM"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Social Security Number"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Κλειδάριθμος"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="GEMH Number"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                  <Link href="#" passref style={{ 'text-decoration': 'none', color: 'white' }}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      style={{ backgroundColor: '#194b8c' }}
                    >
                      Submit
                    </Button>
                  </Link>
                  <Grid container alignItems="center" justifyContent="center">
                    <Grid item>
                      <br />
                      <Typography variant="subtitle1">
                        Please make sure that your information is correct.
                      </Typography>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Container>
          </Card>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </Box>
  );
}
