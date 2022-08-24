import { Container } from '@mui/material'
import { NextPage } from 'next'
import WalletBalance from '../components/wallet-balance'

const Transactions: NextPage = () => (
  <Container>
    <WalletBalance balance={10_000_000} />
  </Container>
)

export default Transactions
