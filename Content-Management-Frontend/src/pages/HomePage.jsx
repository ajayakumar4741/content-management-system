import { getBlogs } from '@/services/apiBlog'
import BlogContainer from '@/ui_components/BlogContainer'
import Header from '@/ui_components/Header'
import React, { useState } from 'react'
import { useQuery,keepPreviousData } from '@tanstack/react-query'
import PagePagination from '@/ui_components/PagePagination'

function HomePage() {
  const [page,setPage] = useState(1)
  const numOfBlogPages = 3

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['blogs',page],
    queryFn:() =>  getBlogs(page),
    placeholderData: keepPreviousData,
  })
 
  console.log(data)
  const blogs = data || []
  const numOfBlog = Math.ceil(data?.count/numOfBlogPages)
  console.log(numOfBlog)
  return (
    <>
      <Header />
      <BlogContainer isPending={isPending} blogs={blogs} />
      <PagePagination page={page} />
    </>
  )
}

export default HomePage
