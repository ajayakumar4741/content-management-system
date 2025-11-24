import React, { useState } from 'react'
import Badge from "@/ui_components/Badge";
import BlogWriter from "@/ui_components/BlogWriter";

import { HiPencilAlt } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import Spinner from '@/ui_components/Spinner';
import { getBlog } from '@/services/apiBlog';
import { BASE_URL } from '@/api';
import Modal from '@/ui_components/Modal';
import CreatePostPage from './CreatePostPage';



function DetailPage({username,isAuthenticated}) {
  const [showModal,setShowModal] = useState(false)
  function toggleModal(){
    setShowModal(curr => !curr)
  }
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

            {isAuthenticated && username === blog.author.full_name && <span className="flex justify-between items-center gap-2">
              <HiPencilAlt onClick={toggleModal}  className="dark:text-white text-3xl cursor-pointer" />

              <MdDelete  className="dark:text-white text-3xl cursor-pointer" />
            </span>}
          
        </div>

        <BlogWriter blog={blog} />
              <br />
        <div className="w-full aspect-video">
  <img
    className="w-full h-full object-fill rounded-sm"
    src={`${BASE_URL}${blog.featured_image}`}
  />
</div>
<br />
        <p className="text-[16px] leading-[2rem] text-justify text-[#3B3C4A] dark:text-[#BABABF]">
          {blog.content}
        </p>
      </div>

     {showModal && <Modal>
      <CreatePostPage blog={blog} />
     </Modal>}
    </>
  )
}

export default DetailPage
