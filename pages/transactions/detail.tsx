import { AppBar, Box, Container, Grid, Tab, Tabs, Toolbar, Typography, Button, Avatar } from '@mui/material'
import { NextPage } from 'next'
import { Close } from '@mui/icons-material';
import TransactionDetail from '../../components/transaction-detail';

const Detail: NextPage = () => (
  <>
    <AppBar position='sticky' sx={{ px: 2 }}>
      <Grid container justifyContent='space-between' sx={{ my: 2 }}>
        <Grid container alignContent={'center'} item xs='auto'>
          <Close sx={{ fontSize: 35, margin: 'auto' }}></Close>
          <Typography sx={{ fontSize: 20, margin: 'auto' }}>Transaction Detail</Typography>
        </Grid>
        <Grid >
          <Button sx={{ marginLeft: '10px'}} color="success"> Edit </Button>
          <Button sx={{ marginLeft: '10px'}} color="error"> Delete  </Button>
        </Grid>
      </Grid>
    </AppBar>
    <Container>
      <TransactionDetail></TransactionDetail>
    </Container>
  </>
)

export default Detail