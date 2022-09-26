import axios from 'axios';
import CategoriesApi from './categories-api';
import TransactionsApi from './transactions-api';

export default class Api {
    public static async fromServer(context: any) {
        return new Api(context)
    }

    public static async fromWeb() {
        return new Api()
    }

    public constructor(private readonly context?: any) {
        const configuredAxios = axios.create({
            baseURL: 'http://localhost:3000',
            withCredentials: true
        });

        if (this.context) {
            configuredAxios.defaults.headers.get.Cookie = String(context.req.headers.cookie)
        }
        this.transactions = new TransactionsApi(configuredAxios)
        this.categories = new CategoriesApi(configuredAxios)
    }

    public readonly transactions: any
    public readonly categories: any

}