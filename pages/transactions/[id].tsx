import { AppBar, Container, Grid, Typography, Button } from '@mui/material'
import { GetServerSideProps, NextPage } from 'next'
import { Close } from '@mui/icons-material';
import Link from 'next/link';
import TransactionDetail from '../../components/transaction/transaction-detail';
import withAuthPage from '../../lib/auth/withAuthPage';
import Api from '../../lib/api/api';

export const getServerSideProps: GetServerSideProps = withAuthPage(async (context) => {
  let apiServer = await Api.fromServer(context)
  console.log(context)
  let id = context.params.id
  let response = await apiServer.transactions.getById(id)
  return {
    props: {
     transaction: response.data,
     id: id
    }
  }
})
const index: NextPage = (props) => {
  
  return (
    <>
      <AppBar position='sticky' sx={{ px: 2 }}>
        <Grid container justifyContent='space-between' sx={{ my: 2 }}>
          <Grid container alignContent={'center'} item xs='auto'>
            <Close sx={{ fontSize: 35, margin: 'auto' }}></Close>
            <Typography sx={{ fontSize: 20, margin: 'auto' }}>Transaction Detail</Typography>
          </Grid>
          <Grid >
            <Link
              href={{
                pathname: 'edit/' + props.id,
              }}
            >
              <a>Edit</a>
            </Link>
            <Button onClick={() => remove(props.id)} sx={{ marginLeft: '10px' }} color="error"> Delete  </Button>
          </Grid>
        </Grid>
      </AppBar>
      <Container>
        <TransactionDetail transaction={props.transaction}/>
      </Container>
    </>
  )
}

export default index
