import { Institution, Pagination } from '../types'
import { api } from './api'


export interface PageQuery {
  page: number,
  size: number,
  sort: 'name' | 'code'
  asc: 'asc' | 'desc'
}
interface InstitutionResponse extends Pagination{
  institutions: Institution[],
}


export const institutionApi = api.injectEndpoints({
  endpoints: (build) => ({
    getInstitutions: build.query<InstitutionResponse, PageQuery>({
      query: ({page = 0, size = 8, sort = 'name', asc = true}) => ({ url: `/api/v1/institutions?page=${page}&size=${size}&sort=${sort}%2C${asc}` }),
    }),
  }),
})

export const {
  useGetInstitutionsQuery
} = institutionApi
