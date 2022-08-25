import { AppBar, Box, Container, Tab, Tabs, Toolbar } from '@mui/material'
import { NextPage } from 'next'
import TransactionList from '../components/transaction-list'
import WalletBalance from '../components/wallet-balance'

const Transactions: NextPage = () => (
  <>
    <AppBar position='sticky' sx={{ px: 2 }}>
      <WalletBalance balance={10_000_000} />
      <Tabs variant='scrollable'>
        <Tab label='08.01 - 08.07' />
        <Tab label='08.08 - 08.14' />
        <Tab label='Last week' />
        <Tab label='This week' />
        <Tab label='Next week' />
      </Tabs>
    </AppBar>
    <Container>
      <TransactionList
        transactions={Array.from(Array(20).keys()).map((_) => ({
          id: Math.random(),
          amount: Math.floor(Math.random() * (10_000_000 - 50_000) + 50_000),
          category: {
            name: `Category ${Math.floor(Math.random() * 10)}`,
          },
          note: `Note ${Math.random() * 100}`,
          timestamp: getRandomTimestampInCurrentMonth(),
        }))}
      />
    </Container>
  </>
)

export default Transactions

function getRandomTimestampInCurrentMonth() {
  const today = new Date(Date.now())
  const firstDateOfCurrentMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  )
  const lastDateOfCurrentMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  )

  return new Date(
    firstDateOfCurrentMonth.getTime() +
      Math.random() *
        (lastDateOfCurrentMonth.getTime() - firstDateOfCurrentMonth.getTime())
  )
}
