import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Send } from '@material-ui/icons';

const useStyles = makeStyles({
  chat: {
    position: 'fixed',
    right: 20,
    bottom: 0,
    width: '25%',
  },
  textInput: {
    color: 'white',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#363f8f',
    marginTop: '2%',
  },
});
export default function Chat() {
  const classes = useStyles();
  return (
    <div className={classes.chat}>
      <Accordion
        disableGutters
        sx={{ backgroundColor: '#194b8c', borderRadius: '50px', color: 'white' }}
      >
        <AccordionSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Need Help?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ paddingLeft: '9px', paddingRight: '9px', paddingBottom: '0' }}>
          {/* <Container> */}
          <Box
            sx={{
              backgroundColor: 'white',
              height: '45vh',
              marginLeft: '0',
              paddingTop: '2%',
            }}
          >
            <Box
              sx={{
                backgroundColor: 'blueviolet',
                borderRadius: '20px',
                display: 'flex',
                textAlign: 'space-around',
                marginLeft: '2%',
                paddingLeft: '2%',
                paddingTop: '3%',
                paddingBottom: '3%',
                width: 'max-content',
              }}
            >
              <Avatar sx={{ height: '25px', width: '25px', marginRight: '2%' }} />
              <Typography>Hi, do you need help?</Typography>
            </Box>
            <Box
              sx={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '100%',
                paddingLeft: '9px',
                paddingRight: '9px',
                backgroundColor: '#3253ad',
                color: 'white',
              }}
            >
              <TextField
                size="small"
                fullWidth
                variant="filled"
                InputProps={{
                  className: classes.textInput,
                  endAdornment: (
                    <IconButton>
                      <Send sx={{ color: 'white' }} />
                    </IconButton>
                  ),
                }}
              />
            </Box>
          </Box>
          {/* </Container> */}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
