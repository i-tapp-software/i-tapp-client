import React from "react";
import archive from "@/assets/icons/archive-add.svg";
import share from "@/assets/icons/share.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight2 } from "iconsax-react";
import { useAction } from "next-safe-action/hooks";
import { apply, save } from "@/api/actions/auth";

export default function AvailableCompanyDetails({
  details,
  setCompanyId,
  setShowModal,
}) {
  const {
    id, // Extracted id from details
    companyLogo,
    name,
    description,
    duration,
    industry,
    createdDate,
    totalApplicants,
    location,
    address,
  } = details;

  // Get the apply action hook
  const {
    execute: applyAction,
    isExecuting,
    hasErrored,
  } = useAction(apply, {
    onSuccess(data) {
      console.log("Application successful!", data);
      alert("Application submitted successfully!");
    },
    onError(error) {
      console.error("Application failed", error);
    },
  });

  const handleApply = () => {
    // Call the apply action with the company ID

    const applicationData = {
      id: id,
    };
    applyAction({ applicationData });
  };

  const { execute: saveAction } = useAction(save, {
    onSuccess(data) {
      console.log("Job saved successfully!", data);
      // toast({
      //   title: "Success",
      //   description: "Job saved successfully!",
      // });
      // setIsSaving(false);
    },
    onError(error) {
      console.error("Failed to save job", error);
      // toast({
      //   title: "Error",
      //   description: "Failed to save job. Please try again.",
      //   variant: "destructive",
      // });
      // setIsSaving(false);
    },
  });

  const handleSave = () => {
    const savedData = {
      companyId: id,
    };
    save(savedData);
  };

  return (
    <div className="w-full rounded-xl md:flex p-8 bg-white mx-6 flex-col md:relative md:basis-[20rem] md:rounded-l-xl h-full">
      <div className="flex justify-between border-b">
        <div className="flex flex-col gap-4 pb-6 w-full">
          <div className="flex justify-between gap-2">
            <Image
              src={companyLogo}
              alt="companylogo"
              width={75}
              height={75}
              className="bg-grey-5"
            />
            <div className="flex flex-nowrap items-start gap-1 cursor-pointer">
              <Image
                src={share}
                alt="share"
                className="inline-block cursor-pointer"
              />
              <Image
                src={archive}
                onClick={handleSave}
                alt="archive"
                className="inline-block cursor-pointer"
              />
              <ArrowRight2 onClick={() => setCompanyId(null)} />
            </div>
          </div>

          <div>
            <h6 className="text-h6">{name}</h6>
            <p className="text-primary mt-2">{location}</p>
          </div>
          <p className="text-sm text-[#5374E7] bg-opacity-10 bg-[#5374E7] px-3.5 py-2 rounded-[50px] inline-block w-36">
            {totalApplicants} Applicants
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-x-10 gap-y-6 py-8">
        <div>
          <h6 className="text-h6">Duration</h6>
          <p className="text-[#6E6E9B]">{duration} Months</p>
        </div>
        <div>
          <h6 className="text-h6">Industry</h6>
          <p className="text-[#6E6E9B] capitalize">{industry}</p>
        </div>
        <div>
          <h6 className="text-h6">Date Posted</h6>
          <p className="text-[#6E6E9B]">{createdDate}</p>
        </div>
      </div>

      <div className=" mb-6 border-t border-b py-4">
        <h6 className="text-h6">Description</h6>
        <p className="text-[#6E6E9B] py-6 ">{description}</p>
      </div>

      <Button
        size="sm"
        className="w-full"
        onClick={handleApply}
        disabled={isExecuting}
      >
        {isExecuting ? "Applying..." : "Apply Now"}
      </Button>
      {hasErrored && (
        <p className="text-red-500">Application failed. Please try again.</p>
      )}
    </div>
  );
}
