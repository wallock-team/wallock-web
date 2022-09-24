import axios from '../../lib/auth/config-axios';
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
        let instance = axios.create()

        if (context) {
            instance.defaults.headers.get.Cookie = String(context.req.headers.cookie)
        }
        this.transactions = new TransactionsApi(instance)
        this.categories = new CategoriesApi(instance)
    }

    public readonly transactions: any
    public readonly categories: any

}