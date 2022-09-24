export const transactionsApi = (configedAxios) => ({
    configedAxios,
    async getCurrentMonth() {
        return await this.configedAxios.get('/transactions/current')
    },
    async getById(id: any) {
        return await this.configedAxios.get(`/transactions/${id}`)
    },
    initialTransition () {
        return { 
            amount: 0,
            date: new Date(),
            note: '',
            cateId: 1,
        }
    },
    async add (transaction: any) {
        return this.configedAxios.post(`/transactions`, transaction);
    },
    async update(transaction: any) {
        return await this.configedAxios.patch(`/transactions`, transaction);
    },
    async remove(id: number) {
        return await this.configedAxios.delete(`/transactions/${id}`);
    }
})