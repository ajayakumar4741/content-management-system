import React from 'react'
import Badge from './Badge'
import CardFooter from './CardFooter'
import { Link } from "react-router-dom";
import thumbnail from '../images/design_vii.jpg'
function BlogCard() {
  return (
    <div className="px-3 py-3 rounded-md w-[300px] h-auto flex flex-col gap-4 dark:border-gray-800 border shadow-lg">
      <Link to={''}>
      <div className="w-full h-[200px] border rounded-md overflow-hidden">
        <img
          src={thumbnail}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      </Link>

      <Badge blog={''} />

      <Link to='/detail'>
        <h3 className="font-semibold  leading-normal text-[#181A2A] mb-0 dark:text-white">
          {''}
        </h3>
      </Link>

      <CardFooter blog={''} />
    </div>
  )
}

export default BlogCard
