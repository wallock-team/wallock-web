import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import { Work } from '@mui/icons-material'

type Props = {
  transactions: Transaction[]
}

type Transaction = {
  id: number
  amount: number
  category: {
    name: string
  }
  timestamp: Date
  note?: string
}

const TransactionList = (props: Props) => (
  <List>
    {props.transactions.map((t) => (
      <ListItem
        key={t.id}
        secondaryAction={
          <Typography variant='body1'>{t.amount.toLocaleString()}</Typography>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <Work />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={t.category.name} secondary={t.note} />
      </ListItem>
    ))}
  </List>
)

export default TransactionList
