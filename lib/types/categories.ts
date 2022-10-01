import { BaseEntity } from './base-entity'
import { User } from './users'

export type Category = BaseEntity & {
  name: string
  type: 'income' | 'expense'
  group: string
  icon?: string
  user: User
}
