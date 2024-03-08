import { Department, Major, Pagination } from '../types'
import { api } from './api'

export interface PageQueryDepartmnet {
  page: number,
  sort: 'ASC' | 'DESC'
  search?: string
}

export interface PageQueryMajor {
  page: number,
  sort: 'ASC' | 'DESC'
  search?: string
}

interface MajorsResponse extends Pagination {
  majors: Major[],
  totalPage: number
}

interface DepartmentsResponse extends Pagination {
  departments: Department[],
  totalPage: number
}


export const majorsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDepartments: build.query<DepartmentsResponse, PageQueryDepartmnet>({
      query: ({ page = 1, sort, search }) => ({ url: `/api/v1/majors/departments?search=${search || ''}&sort=${sort}&page=${page}` }),
    }),
    getMajors: build.query<MajorsResponse, PageQueryMajor>({
      query: ({ page = 1, sort, search }) => ({ url: `/api/v1/majors?search=${search || ''}&sort=${sort}&page=${page}` }),
    }),
  }),
})

export const {
  useGetDepartmentsQuery, useGetMajorsQuery
} = majorsApi
