import React from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

function PagePagination() {
  return (
    <div>
      <Pagination className='my-6 dark:text-white'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>

        

        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>

      </PaginationContent>
    </Pagination>
    </div>
  )
}

export default PagePagination
