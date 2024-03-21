import {
  useGetSubjectGroupsQuery,
} from '../../../app/services/subjects'

import React from 'react'

const SubjecGroup = () => {
  const { data: posts, isLoading } = useGetSubjectGroupsQuery({all: true})

  if (isLoading) {
    return <div>Loading</div>
  }

  if (!posts) {
    return <div>No posts</div>
  }

  return (
    <div>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  )
}

export default SubjecGroup