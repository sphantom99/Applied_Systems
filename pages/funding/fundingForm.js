import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import {
  Button,
  Card, Grid, InputLabel, MenuItem, Select, TextField,
} from '@material-ui/core';

export default function FundingForm() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h3" component="h1">
        Χρηματικό Δάνειο Μέσω Τράπεζας
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
            <TextField style={{ marginBottom: 20, width: '75%' }} id="money" label="Χρηματικό ποσό Δανείου" type="number" variant="standard" />
          </Grid>
          <Grid item xs={3}>
            <TextField style={{ marginBottom: 20, width: '75%' }} id="duration" label="Διάρκεια Μίσθωσης (Σε Χρόνια)" variant="standard" />
          </Grid>
          <Grid item xs={3}>
            <InputLabel id="misthoma-label">Καταβολή Μισθώματος</InputLabel>
            <Select
              style={{ marginBottom: 20, width: '75%' }}
              labelId="misthoma-label"
              id="misthoma"
              label="Καταβολή Μισθώματος"
            >
              <MenuItem value={1}>Μηνιαία</MenuItem>
              <MenuItem value={2}>Τριμηνιαία</MenuItem>
              <MenuItem value={3}>Ετήσια</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3}>
            <InputLabel id="charging-label">Τρόπος Καταβολής</InputLabel>
            <Select
              style={{ marginBottom: 20, width: '75%' }}
              labelId="charging-label"
              id="charging"
              label="Τρόπος Καταβολής"
            >
              <MenuItem value={1}>Κατάθεση</MenuItem>
              <MenuItem value={2}>Χρέωση Κάρτας</MenuItem>
              <MenuItem value={3}>Πληρωμή σε Κατάστημα</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3}>
            <InputLabel id="usage-label">Χρήση Δανείου για:</InputLabel>
            <Select
              style={{ marginBottom: 20, width: '75%' }}
              labelId="usage-label"
              id="usage"
              label="Χρήση Δανείου για:"
            >
              <MenuItem value={1}>Οχήματα</MenuItem>
              <MenuItem value={2}>Επαγγελματικό Εξοπλισμό</MenuItem>
              <MenuItem value={3}>Ακίνητο</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3}>
            <InputLabel id="bank-label">Τράπεζα</InputLabel>
            <Select
              style={{ marginBottom: 20, width: '75%' }}
              labelId="bank-label"
              id="bank"
              label="Τράπεζα"
            >
              <MenuItem value={1}>Τράπεζα Πειραιώς</MenuItem>
              <MenuItem value={2}>Alpha Bank</MenuItem>
              <MenuItem value={3}>Eurobank</MenuItem>
              <MenuItem value={4}>Εθνική Τράπεζα</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="paragraph"
              multiline
              variant="standard"
              rows={1}
              maxRows={8}
              label="Γράψτε λίγα λόγια για τους λόγους που θα θέλατε το δάνειο"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={3}>
            <Button style={{ marginLeft: 60 }} variant="contained">Υποβολη Αιτησης</Button>
          </Grid>
        </Grid>

      </Card>
    </Container>
  );
}
