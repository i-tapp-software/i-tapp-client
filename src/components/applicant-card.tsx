"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArchiveAdd,
  ArrowRight,
  CloseCircle,
  SmsEdit,
  TickCircle,
} from "iconsax-react";
import { useGlobal } from "@/context/GlobalContext";
import {
  acceptApplication,
  declineApplication,
  bookmarkApplication,
} from "@/api/actions/auth";
import { useAction } from "next-safe-action/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type ApplicantProps = {
  id: string;
  accepted: boolean;
  name: string;
  university: string;

  student: {
    id: string;
    firstName: string;
    lastName: string;
    school: string;
  };
  application_status?: string;
};

export function ApplicantCard({ applicant }: { applicant: ApplicantProps }) {
  const { setSelectedApplicant } = useGlobal();

  const { id, student, application_status } = applicant;

  const {
    execute: acceptAction,
    isExecuting: isAccepting,
    hasErrored: hasAcceptError,
  } = useAction(acceptApplication, {
    onSuccess: (data) => {
      toast.success("Application accepted successfully!");
      console.log("Application accepted:", data);
    },
    onError: (error) => {
      const { serverError } = error.error;
      const { message } = serverError;
      toast.error(message);
    },
  });

  const {
    execute: declineAction,
    isExecuting: isDeclining,
    hasErrored: hasDeclineError,
  } = useAction(declineApplication, {
    onSuccess: () => {
      toast.success("Application declined successfully!");
    },
    onError: (error) => {
      const { serverError } = error.error;
      const { message } = serverError;
      toast.error(message);

      console.error("Error declining application:", error);
    },
  });

  const {
    execute: bookmarkAction,
    isExecuting: isBookmarking,
    hasErrored: hasBookmarkError,
  } = useAction(bookmarkApplication, {
    onSuccess: () => {
      toast.success("Application bookmarked successfully!");
    },
    onError: (error) => {
      const { serverError } = error.error;
      const { message } = serverError;
      toast.error(message);
      console.error("Error bookmarking application:", error);
    },
  });

  const handleViewProfile = () => {
    setSelectedApplicant(applicant);
  };

  return (
    <div className="px-4 py-4">
      <div className="flex justify-between mb-3">
        <div className="flex gap-6">
          <Image
            src="/applicant.png"
            alt="applicant"
            width={48}
            height={48}
            className="rounded"
          />
          <div>
            <p className="font-semibold text-md">
              {student.firstName} {student.lastName}
            </p>
            <p className="text-sm pt-1.5 pr-2.5 text-gray-500">
              {student.school || "Not specified"}
            </p>
          </div>
        </div>
        <div className="flex gap-4 self-center items-center">
          <button
            onClick={() => bookmarkAction({ id: "77777" })}
            disabled={isBookmarking}
            className="disabled:opacity-50"
          >
            <ArchiveAdd size={24} />
          </button>
          {applicant.accepted === true ? (
            <SmsEdit size={24} />
          ) : (
            <>
              <button
                onClick={() => acceptAction({ id: student.id })}
                disabled={isAccepting}
                className="disabled:opacity-50"
              >
                <TickCircle
                  size={24}
                  color="#27AE60"
                  className="cursor-pointer"
                />
              </button>
              <button
                onClick={() => declineAction({ id: student.id })}
                disabled={isDeclining}
                className="disabled:opacity-50"
              >
                <CloseCircle
                  size={24}
                  color="#EB5757"
                  className="cursor-pointer"
                />
              </button>
            </>
          )}
          <Link
            href={`/portal/candidates/${id}`}
            className="flex gap-[10px] py-3 px-6 rounded-lg bg-secondary"
            onClick={handleViewProfile}
          >
            View profile
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
      {application_status === "Accepted" && (
        <div className="flex flex-col gap-1">
          <span>
            Start Date: <strong>Monday, 12th Feb, 2024</strong>
          </span>
          <span>
            End Date: <strong>Monday, 12th May, 2024</strong>
          </span>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
