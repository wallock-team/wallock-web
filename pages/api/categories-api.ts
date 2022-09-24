import { Axios } from 'axios'

export default class CategoriesApi {
  public constructor(private readonly axios: Axios) {}

  public async create(createCategoryDto: any) {
    return await this.axios.post('/categories', createCategoryDto)
  }

  public async update(updateCategoryDto: any) {
    return await this.axios.patch('/categories', updateCategoryDto)
  }

  public async delete(id: number) {
    return await this.axios.delete(`/categories/${id}`);
  }

  public async getById(id: number) {
    return await this.axios.get(`/categories/${id}`);
  }
}
