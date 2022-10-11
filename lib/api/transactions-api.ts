import { Axios } from 'axios'

export default class TransactionsApi {
  public constructor(private readonly configuredAxios: Axios) {}

  async getCurrentMonth() {
    return await this.configuredAxios.get('/transactions/current-month')
  }
  async getById(id: any) {
    return (await this.configuredAxios.get(`/transactions/${id}`)).data
  }

  async add(transaction: any) {
    return await this.configuredAxios.post('/transactions', transaction)
  }
  async update(transaction: any) {
    return await this.configuredAxios.patch(`/transactions`, transaction)
  }
  async remove(id: number) {
    return await this.configuredAxios.delete(`/transactions/${id}`)
  }
}