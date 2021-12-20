import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Launch } from '@material-ui/icons';
import {
  Button,
  Card, FormControlLabel, Grid,
} from '@material-ui/core';
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from 'next/router';

const columns = [
  { field: 'funding', headerName: 'Χρηματοδότηση', width: 700 },
  { field: 'fundingType', headerName: 'Τύπος Χρηματοδότησης', width: 300 },
  {
    field: 'releaseDate', headerName: 'Ημερομηνία Έκδοσης', width: 300, type: 'date',
  },
  {
    field: 'submitDate', headerName: 'Ημερομηνία Τελικής Υποβολής', width: 300, type: 'date',
  },
  {
    field: 'linkTo',
    headerName: 'Link',
    width: 100,
    renderCell: (params) => {
      if (params.getValue(params.id, 'linkTo') !== 'false') {
        return (
          <IconButton
            size="small"
            color="primary"
            style={{ marginLeft: 16 }}
            href={params.getValue(params.id, 'linkTo') || ''}
            target="_blank"
          >
            <Launch fontSize="large" />
          </IconButton>
        );
      }

      return '';
    },
  },
];

const rows = [
  {
    id: 1, funding: 'Απόκτηση ακαδημαϊκής διδακτικής εμπειρίας σε νέους επιστήμονες κατόχους διδακτορικού 2021-2022 στα Εκπαιδευτικά Ιδρύματα - Προσκλήσεις', fundingType: 'Επιδοτήσεις ΕΣΠΑ', releaseDate: '20/11/21', submitDate: '20/1/22', linkTo: 'https://www.espa.gr/el/Pages/ProclamationsFS.aspx?item=5298',
  },
  {
    id: 2, funding: 'Χρηματικό Δάνειο Μέσω Τράπεζας', fundingType: 'Τραπεζικός Δανεισμός', releaseDate: '', submitDate: '', linkTo: 'false',
  },

];

export default function CompanyMenu() {
  const router = useRouter();
  const [selectedRows, setSelectionModel] = useState([]);
  const handleSubmit = (value) => {
    if (value[0] === 2) {
      router.push('fundingForm');
    }
  };
  return (
    <Container maxWidth="xl">

      <Typography variant="h3" component="h1">
        Προγράμματα Χρηματοδότησης
      </Typography>
      <br />
      <Card style={{ height: 1000 }}>
        <br />
        <Grid container spacing={1} style={{ marginLeft: 10 }}>

          <Grid item xs={4}>
            <FormControlLabel control={<Checkbox />} label="Τραπεζικός Δανεισμός" />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={<Checkbox />}
              label="Εθνικό Ταμείο Επιχειρηματικότητας και
                            Ανάπτυξης (ΕΤΕΑΝ)"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel control={<Checkbox />} label="Επιχειρηματικά Κεφάλαια (Venture Capital)" />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel control={<Checkbox />} label="Ιδιώτες Επενδυτές (Business Angels)" />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel control={<Checkbox />} label="Πρακτόρευση Απαιτήσεων (Factoring)" />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel
              control={<Checkbox />}
              label="Θερμοκοιτίδες Επιχειρήσεων (Business
                  Incubators)"
            />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel control={<Checkbox />} label="Χρηματοδοτική Μίσθωση (Leasing)" />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel control={<Checkbox />} label="Επιδοτήσεις ΕΣΠΑ" />
          </Grid>
          <Grid item xs={4}>
            <FormControlLabel control={<Checkbox />} label="Microfinance-Χρηματοδοτικό εργαλείο JEREMIE " />
          </Grid>

        </Grid>
        <Button style={{ marginTop: 50, marginLeft: 1300 }} variant="contained">Αναζήτηση</Button>
        <div style={{ height: 400, width: '100%', marginTop: 20 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            isRowSelectable={((params) => params.row.id !== 1)}
            checkboxSelection
            onSelectionModelChange={(newSelectionModel) => {
              setSelectionModel(newSelectionModel);
              console.log(newSelectionModel);
            }}
          />
        </div>
        <Button style={{ marginTop: 50, marginLeft: 1300 }} variant="contained" onClick={() => handleSubmit(selectedRows)}>Υποβολη Αιτησης για την επιλεγμενη χρηματοδοτηση</Button>
      </Card>
    </Container>
  );
}
