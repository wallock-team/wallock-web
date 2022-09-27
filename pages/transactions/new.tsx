import { Close } from '@mui/icons-material'
import { AppBar, Button, Typography, Toolbar, IconButton } from '@mui/material'
import { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'
import TransactionForm from '../../components/transaction/transactionForm'
import Api from '../../lib/api/api'

const NewTransaction: NextPage = () => {
  let api = Api.fromWeb()
  const [transaction, setTransaction] = useState(
    api.transactions.initialTransition()
  )
  const router = useRouter()
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
          <IconButton>
            <Close />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}>Add transaction</Typography>
          <Button variant='contained' onClick={() => handleAddTransaction()}>
            Save
          </Button>
        </Toolbar>
      </AppBar>
      <TransactionForm
        transaction={transaction}
        setTransaction={setTransaction}
      />
    </>
  )
}

export default NewTransaction
