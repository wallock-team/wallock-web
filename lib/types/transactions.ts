export type CreateTransactionDto = {
  amount: number
  categoryId?: number
  note?: string
  date?: Date
}
