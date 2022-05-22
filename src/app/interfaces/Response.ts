/* o <T> faz que a interface seja generica */
export interface Response<T> {
    message?: string,
    data: T,
}