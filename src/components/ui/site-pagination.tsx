import React, { Dispatch, SetStateAction, useState } from "react";
import { ClassValue } from "clsx";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils/tw";

interface SitePaginationProps {
  totalPosts: number;
  postsPerPage: number;
  paginate: (pageNum: number) => void;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  className?: ClassValue;
}

export function SitePagination({
  totalPosts,
  postsPerPage,
  paginate,
  currentPage,
  setCurrentPage,
  className,
}: SitePaginationProps) {
  const [pageRange, setPageRange] = useState({ a: 0, b: 3 });

  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination className={cn(className, totalPages <= 1 && "hidden")}>
      <PaginationContent>
        <PaginationItem
          onClick={() => {
            if (currentPage > 1) {
              setCurrentPage((n) => n - 1);
              if (pageRange.b > 3) {
                const a = pageRange.a - 1;
                const b = pageRange.b - 1;
                setPageRange({ a: a, b: b });
              }
            }
          }}
        >
          <PaginationPrevious href="#" />
        </PaginationItem>
        {pageNumbers.slice(pageRange.a, pageRange.b).map((pageNum) => (
          <PaginationItem key={pageNum} onClick={() => paginate(pageNum)}>
            <PaginationLink isActive={pageNum === currentPage} href="#">
              {pageNum}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {pageNumbers.slice(totalPages - 1).map((pageNum) => (
          <PaginationItem key={pageNum} onClick={() => paginate(pageNum)}>
            <PaginationLink isActive={pageNum === currentPage} href="#">
              {pageNum}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem
          onClick={() => {
            if (currentPage < totalPages) {
              setCurrentPage((n) => n + 1);
              if (currentPage > 2) {
                const a = pageRange.a + 1;
                const b = pageRange.b + 1;
                setPageRange({ a: a, b: b });
              }
            }
          }}
        >
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
