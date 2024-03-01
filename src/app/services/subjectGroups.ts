import { Pagination } from '../types'
import { api } from './api'

export interface SubjectGroup {
  code: number
  subjects: string[]
}

interface SubjectGroupsResponse extends Pagination {
  subjectGroups: SubjectGroup[],
}


export const subjectGroupsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSubjectGroups: build.query<SubjectGroupsResponse, void>({
      query: () => ({ url: '/api/v1/subject-group' }),
    }),
  }),
})

export const {
  useGetSubjectGroupsQuery
} = subjectGroupsApi
