export default class Retryable<T> {

    private readonly maxRetries: number

    constructor(private action: (retry: () => Promise<T>, lastRetry: boolean) => Promise<T>, options: { count: number }) {
        this.maxRetries = options.count
    }

    run(): Promise<T> {
        return this.try(this.maxRetries)
    }

    private try(retriesLeft: number): Promise<T> {
        return this.action(() => this.try(retriesLeft - 1), retriesLeft == 0)
    }

}