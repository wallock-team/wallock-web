import axios from '../../lib/auth/config-axios';

export default class Api {
    public static async fromServer(context: any) {
        return new Api(context)
    }

    public static async fromWeb() {
        return new Api()
    }

    public constructor(private readonly context?: any) {
        let defaultsOption = ({
            withCredentials: true,
        })
        let instance = axios.create(defaultsOption)

        if (context) {
            instance.defaults.headers.get.Cookie = String(context.req.headers.cookie)
        }
        this.transactions = transactionsApi(instance)
    }

    public readonly transactions: any
    public readonly categories: any

}