import { Department, Major, Pagination } from '../types'
import { api } from './api'

export interface PageQueryDepartmnet {
  page: number,
  sort: 'ASC' | 'DESC'
  search?: string
}

export interface PageQueryMajor {
  page: number,
  size: number,
  sortObj?: string,
  order?: "asc" | "desc"
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
      query: ({ page = 0, sort, search }) => ({ url: `http://18.140.72.139/api/v1/majors/departments?sort=${sort}&page=${page}` }),
    }),
    getMajors: build.query<MajorsResponse, PageQueryMajor>({
      query: ({ page = 0, size, sortObj, order }) => ({ url: `http://18.140.72.139/api/v1/majors?page=${page}&size=${size}&sort=${sortObj}%2C${order}` }),
    }),
  }),
})

export const {
  useGetDepartmentsQuery, useGetMajorsQuery
} = majorsApi
