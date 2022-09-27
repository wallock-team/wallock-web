import { Close } from "@mui/icons-material"
import { AppBar, Button, Grid, Typography } from "@mui/material"
import { NextPage } from "next"
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { useRouter } from "next/router"
import TransactionForm from "../../components/transaction/transactionForm"
import Api from '../../lib/api/api'

const NewTransaction: NextPage = () => {
  let api = Api.fromWeb()
  const [transaction, setTransaction] = useState(api.transactions.initialTransition())
  const router = useRouter()
  const handleAddTransaction = async () => {
    await api.transactions.add({...transaction, amount: parseInt(transaction.amount)})
    router.push('/transactions')
  }
  console.log(transaction);
  return (<>
    <AppBar position='sticky' sx={{ px: 2 }}>
      <Grid container justifyContent='space-between' sx={{ my: 2 }}>
        <Grid container alignContent={'center'} item xs='auto'>
          <Close sx={{ fontSize: 35, margin: 'auto' }}></Close>
          <Typography sx={{ fontSize: 20, margin: 'auto' }}>Transaction</Typography>
        </Grid>
        <Grid >
          <Button sx={{ marginLeft: '10px' }} color="success"> Edit </Button>
          <Button onClick={() => handleAddTransaction()} sx={{ marginLeft: '10px' }} color="error"> Add  </Button>
        </Grid>
      </Grid>
    </AppBar>
    <TransactionForm
      transaction={transaction}
      setTransaction={setTransaction}
    />
  </>)
}

export default NewTransaction
