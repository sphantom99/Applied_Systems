import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {
  Button,
  Card, Grid, InputLabel, MenuItem, Select, TextField,
} from '@material-ui/core';

export default function ForeasForm() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h3" component="h1">
        Ανάρτηση Νέας Χρηματοδότησης
      </Typography>
      <br />
      <Card
        sx={{
          '& .MuiTextField-root': { m: 5, width: '250ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <br />
        <Grid container spacing={1} style={{ marginLeft: 10 }}>
          <Grid item xs={3}>
            <TextField style={{ marginBottom: 20, width: '75%' }} id="title" label="Τίτλος Χρηματοδότησης" type="text" variant="outlined" />
          </Grid>
          <Grid item xs={3}>
            <TextField style={{ marginBottom: 20, width: '75%' }} id="money" label="Ποσό Χρηματοδότησης" type="number" variant="outlined" />
          </Grid>
          <Grid item xs={3} style={{ marginTop: 17 }}>
            <InputLabel id="typeLabel">Τύπος Εταιρείας</InputLabel>
            <Select
              style={{ marginBottom: 20, width: '75%' }}
              labelId="typeLabel"
              id="type"
              label="Τύπος Εταιρείας"
            >
              <MenuItem value={1}>I.T.</MenuItem>
              <MenuItem value={2}>Βιοτεχνολογία</MenuItem>
              <MenuItem value={3}>Φαρμακευτική</MenuItem>
              <MenuItem value={4}>Μηχανολογική</MenuItem>
              <MenuItem value={5}>Αεροναυπηγική</MenuItem>
              <MenuItem value={6}>Ιατρική</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="paragraph"
              multiline
              variant="outlined"
              rows={5}
              label="Περιγραφή Χρηματοδότησης"
              style={{ width: '100%' }}
            />
          </Grid>

        </Grid>
        <Button style={{ marginBottom: 10, marginLeft: 20 }} variant="contained">Αναρτηση Χρηματοδοτησης</Button>
      </Card>
    </Container>
  );
}
