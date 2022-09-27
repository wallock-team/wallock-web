type BaseEntity = {
  id: number
  createdAt: Date
  lastUpdatedAt: Date
  deletedAt?: Date
  version: number
}

export type Transaction = BaseEntity & {
  amount: number
  note?: string
  date: Date
  categories: Category
  user: User
}

export type Category = BaseEntity & {
  name: string
  type: 'income' | 'expense'
  group: string
  icon?: string
  user: User
}

export type User = BaseEntity & {
  iss: string
  sub: string
  name: string
}
