import { Container, Tab, Tabs } from '@mui/material'
import { NextPage } from 'next'
import WalletBalance from '../components/wallet-balance'

const Transactions: NextPage = () => (
  <Container>
    <WalletBalance balance={10_000_000} />
    <Tabs variant='scrollable'>
      <Tab label='08.01 - 08.07' />
      <Tab label='08.08 - 08.14' />
      <Tab label='Last week' />
      <Tab label='This week' />
      <Tab label='Next week' />
    </Tabs>
  </Container>
)

export default Transactions
