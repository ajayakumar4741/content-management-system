import React from 'react'
import Badge from "@/ui_components/Badge";
import BlogWriter from "@/ui_components/BlogWriter";

import { HiPencilAlt } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Spinner from '@/ui_components/Spinner';
import { getBlog } from '@/services/apiBlog';
import { BASE_URL } from '@/api';



function DetailPage() {
  const {slug} = useParams()
  const {isPending,isError,error,data:blog} = useQuery({
    queryKey: ['blogs',slug],
    queryFn:() => getBlog(slug), 
  })
  console.log(blog)

  if(isPending){
    return <Spinner/>
  }
  return (
    <>
      <div className="padding-dx max-container py-9">
        <Badge blog={blog} />

        <div className="flex justify-between items-center gap-4">
          <h2 className="py-6 leading-normal text-2xl md:text-3xl text-[#181A2A] tracking-wide font-semibold dark:text-[#FFFFFF]">
            {blog.title}
          </h2>

            <span className="flex justify-between items-center gap-2">
              <HiPencilAlt  className="dark:text-white text-3xl cursor-pointer" />

              <MdDelete  className="dark:text-white text-3xl cursor-pointer" />
            </span>
          
        </div>

        <BlogWriter blog={blog} />

        <div className="w-full h-[350px] my-9 overflow-hidden rounded-sm">
          <img
            className="w-full h-full object-cover rounded-sm"
            src={`${BASE_URL}${blog.featured_image}`}
          />
        </div>
        <p className="text-[16px] leading-[2rem] text-justify text-[#3B3C4A] dark:text-[#BABABF]">
          {blog.content}
        </p>
      </div>

     
    </>
  )
}

export default DetailPage
