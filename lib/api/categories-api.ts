import { Axios } from 'axios'
import { CreateCategoryDto } from '../types/categories'
import { Category } from '../types/categories'

export default class CategoriesApi {
  public constructor(private readonly axios: Axios) {}

  public async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const res = await this.axios.post<Category>(
      '/categories',
      createCategoryDto
    )
    return res.data
  }

  public async update(updateCategoryDto: any) {
    return await this.axios.patch('/categories', updateCategoryDto)
  }

  public async delete(id: number) {
    return await this.axios.delete(`/categories/${id}`)
  }

  public async getAll() {
    const categories = (await this.axios.get<Category[]>('/categories')).data
    console.log(categories)
    return categories
  }

  public async getById(id: number) {
    return (await this.axios.get<Category>(`/categories/${id}`)).data
  }
}
