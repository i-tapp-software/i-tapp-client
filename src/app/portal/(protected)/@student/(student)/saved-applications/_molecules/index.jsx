"use client";

import { React, useState } from "react";
import ApplicationTable from "./application-table";
import { Wrapper } from "@/components/wrapper";
import ApplicationSearch from "./application-search";
import { SitePagination } from "@/components/ui/site-pagination";
import studentApplications from "@/data/company";

import usePaginator from "@/lib/hooks/use-paginator";

export default function SavedApplication({ searchParams }) {
  const query = searchParams?.query || "";
  const { applications, setCurrentPage, postPerPage, currentPage, paginate } =
    usePaginator(6, studentApplications);

  return (
    <div>
      <Wrapper className=" sm:pb-10">
        <ApplicationSearch />
        {applications.length !== 0 ? (
          <>
            <ApplicationTable query={query} applications={applications} />
            <SitePagination
              totalPosts={studentApplications.length}
              postsPerPage={postPerPage}
              paginate={paginate}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        ) : (
          <p>No Application</p>
        )}
      </Wrapper>
    </div>
  );
}
