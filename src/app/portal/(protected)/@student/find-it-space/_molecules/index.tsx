"use client";
import React, { useState } from "react";
import FilterCompanies, { FilterProps } from "./filter";
import { Wrapper } from "@/components/wrapper";
import Results from "./results";
import { student } from "@/config/student";
import { Filter } from "iconsax-react";
import AvailableCompanyDetails from "./available-company-details";
import { cn } from "@/lib/utils/tw";
import Modal from "@/components/ui/modal";
import ApplicationForm from "./form";
import companyListDummy from "@/data/company";

export type CompanyListProps = {
  companyName: string;
  companyLogo: string;
  description: string;
  datePosted: string;
  applicants: number;
  duration: number;
  industry: string;
  location: string;
  id: number;
};

export default function FindITSpace({
  searchParams,
}: {
  searchParams: string;
}) {
  const [companyList, setCompanyList] = useState<CompanyListProps[] | []>(companyListDummy);
  console.log(companyList);

  const [companyId, setCompanyId] = useState<number | null>(1);
  const [filter, setFilter] = useState<FilterProps>(student.filters);
  const [filterActive, setFilterActive] = useState<boolean>(false);
  const companyDetail = companyList?.find(
    (company) => company.id === companyId
  );
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <Wrapper
      className={cn(
        " touch:px-10 bg-[#F0F0F5] max-w-full flex flex-col justify-center  md:flex-row md:justify-between mt-4 sm:py-20 sm:pb-10 md:px-10  gap-x-8",
        companyId && "touch:pr-0 md:pr-0"
      )}
    >
      {companyId === null && (
        <div className="sm:hidden text-center mb-4">
          <div
            className=" bg-white inline-block p-1 rounded border border-black"
            onClick={() => setFilterActive(true)}
          >
            <Filter className="inline mr-2" />
            <span>filter</span>
          </div>
        </div>
      )}
      <div
        className={cn(
          "flex justify-center gap-x-8  md:w-9/12",
          companyId && "hidden md:flex "
        )}
      >
        <FilterCompanies
          filter={filter}
          setFilter={setFilter}
          filterActive={filterActive}
          setFilterActive={setFilterActive}
        />
        <Results
          filter={filter}
          setCompanyId={setCompanyId}
          companyPost={companyList}
          searchParams={searchParams}
          filterActive={filterActive}
        />
      </div>
      {companyId && companyDetail && (
        <AvailableCompanyDetails
          details={companyDetail}
          setCompanyId={setCompanyId}
          setShowModal={setShowModal}
        />
      )}
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ApplicationForm />
      </Modal>
    </Wrapper>
  );
}