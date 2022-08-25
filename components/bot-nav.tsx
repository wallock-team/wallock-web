import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material'
import {
  Home,
  AccountBalanceWallet,
  AddBox,
  Savings,
  Person,
} from '@mui/icons-material'

const BotNav = () => (
  <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
    <BottomNavigation showLabels>
      <BottomNavigationAction label='Home' icon={<Home />} />
      <BottomNavigationAction
        label='Transactions'
        icon={<AccountBalanceWallet />}
      />
      <BottomNavigationAction icon={<AddBox />} />
      <BottomNavigationAction label='Planning' icon={<Savings />} />
      <BottomNavigationAction label='Account' icon={<Person />} />
    </BottomNavigation>
  </Paper>
)

export default BotNav
