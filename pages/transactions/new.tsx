import { Close } from '@mui/icons-material'
import { AppBar, Button, Typography, Toolbar, IconButton } from '@mui/material'
import { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'
import NewTransactionForm from '../../components/transaction/new-transaction-form'
import Api from '../../lib/api/api'
import withAuthPage from '../../lib/auth/withAuthPage'

export const getServerSideProps = withAuthPage()

const NewTransaction: NextPage = () => {
  const router = useRouter()
  let api = Api.fromWeb()
  const [transaction, setTransaction] = useState(
    api.transactions.initialTransition()
  )
  const handleAddTransaction = async () => {
    await api.transactions.add({
      ...transaction,
      amount: parseInt(transaction.amount),
    })
    router.push('/transactions')
  }
  console.log(transaction)
  return (
    <>
      <AppBar position='sticky' sx={{ px: 2 }}>
        <Toolbar>
          <IconButton onClick={() => router.push('/home')}>
            <Close />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}>Add transaction</Typography>
          <Button variant='contained' onClick={() => handleAddTransaction()}>
            Save
          </Button>
        </Toolbar>
      </AppBar>
      <NewTransactionForm />
    </>
  )
}

export default NewTransaction
