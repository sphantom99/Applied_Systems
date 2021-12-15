/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { FileUploader } from 'react-drag-drop-files';

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        borderRadius: 1,
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

export default function SignIn() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: 1,
          m: 1,
        }}
      >
        <Typography variant="h3" style={{ textAlign: 'center' }}>
          Sign Up
        </Typography>

        <form method="post">
          <Item>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </Item>
          <Item>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Username"
              label="Όνομα Χρήστη"
              type="text"
              id="Username"
            />
          </Item>
          <Item>
            <TextField
              // helperText={"}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Κωδικός Πρόσβασης"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Item>
          <Item>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="afm"
              label="ΑΦΜ"
              type="text"
              id="afm"
            />
          </Item>
          <Item>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="lasName"
              label="Αριθμος Ταυτότητας"
              type="text"
              id="lastName"
            />
          </Item>
          <Item>
            <Box style={{ display: 'flex', justifyContent: 'center' }}>
              <FileUploader
                name="user"
                style={{ color: 'red' }}
              />
            </Box>
          </Item>
          <Item>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ backgroundColor: '#194b8c' }}
            >
              Sign Up!
            </Button>
          </Item>
        </form>
      </Box>
    </Container>
  );
}
