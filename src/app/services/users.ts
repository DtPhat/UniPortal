import { Account, Pagination } from '../types'
import { api } from './api'
interface AccountsResponse extends Pagination {
  accounts: Account[],
}
export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `/api/v1/auth/login`,
        method: 'POST',
        body: data
      })
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `/api/v1/accounts`,
        method: 'POST',
        body: data
      })
    }),
    getAccounts: builder.query<AccountsResponse, void>({
      query: () => ({
        url: `/api/v1/accounts`,
        method: 'GET',
      })
    })
  })
})

export const { useLoginMutation, useRegisterMutation, useGetAccountsQuery } = usersApi