import React from 'react'

import pic from "../images/pic.jpg"

import { Link } from "react-router-dom"

function BlogWriter() {
  return (
    <div>
       <Link to={''}>
    <div className="flex items-center gap=4 ">

      
      <span className="flex items-center gap-2">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          <img
            src={pic}
            className="c rounded-full w-full h-full object-cover"
          />
        </div>

        <small className="text-[#696A75] text-[14px]">
          
        </small>
      </span>

      <small className="text-[#696A75] text-[14px] ml-3">
        
      </small>


    </div>
    </Link>
    </div>
  )
}

export default BlogWriter
