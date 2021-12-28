import {
  Button,
  Container, Divider, Grid, Typography,
} from '@material-ui/core';
import { Box } from '@material-ui/system';
import Image from 'next/image';
import React from 'react';

function advertisementAgencies() {
  const advertisingAgencies = ['1', '2', '3', '4'];
  return (
    <div>
      <Container>
        {advertisingAgencies.map((_, index) => (
          <Box paddingBottom="5%">
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus risus at mi
                  porta, ut lacinia diam maximus. In eu dapibus ante. Donec vel rhoncus nunc, suscipit
                  varius lacus. Proin eget consequat dolor, sit amet sodales odio. Mauris sed lacus
                  lacus. Donec in turpis massa. Aenean dignissim augue condimentum arcu accumsan, sed
                  interdum dui sollicitudin. Suspendisse in mollis arcu, eu rhoncus nulla. Cras placerat
                  nulla nisi, vel dapibus justo feugiat eget.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Image width={500} height={200} src={`/advertisements/${index + 1}.png`} />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="center" paddingBottom="2%" paddingTop="2%"><Button variant="contained">Visit Now</Button></Box>
            {index !== advertisingAgencies.length - 1 && <Divider />}
          </Box>
        ))}
      </Container>
    </div>
  );
}

export default advertisementAgencies;
