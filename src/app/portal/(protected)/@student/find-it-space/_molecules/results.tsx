import React from "react";
import AvailableCompany from "./available-company";
import Search from "./search";
import { FilterProps, handleFilter } from "./filter";
import { SitePagination } from "@/components/ui/site-pagination";
import { usePaginator } from "@/lib/hooks/use-paginator";
import { cn } from "@/lib/utils/tw";
import useWindowWidth from "./window-resize";
import { CompanyListProps } from ".";

type resultProps = {
  companyPost: CompanyListProps[];
  setCompanyId: React.Dispatch<React.SetStateAction<number | null>>;
  searchParams: any;
  filter: FilterProps;
  filterActive: boolean;
};

export default function Results({
  companyPost,
  setCompanyId,
  searchParams,
  filter,
  filterActive,
}: resultProps) {
  
  const query = searchParams?.query || "";
  const companyFiltered = handleFilter(companyPost, filter);
  const companyList = companyFiltered?.filter((company) =>
    company.companyName.toLowerCase().startsWith(query.toLowerCase())
  );
  
  const { applications, setCurrentPage, postPerPage, currentPage, paginate } =
    usePaginator(6, companyList);

  const { windowWidth } = useWindowWidth();
  const companyPosts = windowWidth < 768 ? applications : companyList;

  return (
    <div
      className={cn(
        "sm:w-2/3 flex flex-col justify-center sm:justify-start gap-6 ",
        filterActive && "hidden sm:flex"
      )}
    >
      <div className="hidden sm:block">
        <Search />
      </div>

      <div className="text-center sm:flex justify-between">
        <h6 className="hidden sm:block text-md sm:text-md lg:text-h6 font-bold">
          Based on current location
        </h6>

        <p className="text-primary sm:text-[#8C8CB0] text-sm lg:text-base self-center">
          {companyList?.length} results found
        </p>
      </div>

      <div className="flex gap-6 flex-wrap sm:max-h-[700px] sm:overflow-y-scroll pr-1.5">
        {companyPost ? companyPosts.map((company, i) => (
          <AvailableCompany
            details={company}
            key={i}
            setCompanyId={setCompanyId}
          />
        )) : 'No posts'}
      </div>
      <SitePagination
        totalPosts={companyList?.length}
        postsPerPage={postPerPage}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        className={"sm:hidden"}
      />
    </div>
  );
}
