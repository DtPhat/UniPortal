export interface Pagination {
  page: number,
  totalPages: number,
  totalElements: number,
  pageSize: number
}

export interface Account {
  id: number
  email: string,
  firstName: string,
  lastName: string,
  role: string,
  status: "ACTIVE" | "INACTIVE"
  avatarLink: string
}

export interface Institution {
  id: number,
  name: string,
  code: string,
  description: string,
}


export interface Department {
  id: number,
  name: string,
  code: string
  description: string
}

export interface Major {
  id: number,
  name: string,
  code: string
  description: string
}