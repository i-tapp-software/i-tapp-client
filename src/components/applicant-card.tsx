import Image from "next/image";
import Link from "next/link";
import {
  ArchiveAdd,
  ArrowRight,
  CloseCircle,
  SmsEdit,
  TickCircle,
} from "iconsax-react";

export type ApplicantProps = {
  name: string;
  university: string;
  application_status?: string;
};

export function ApplicantCard({ applicant }: { applicant: ApplicantProps }) {
  const { name, university, application_status } = applicant;

  return (
    <div className="px-4 py-4 ">
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
            <p className=" font-semi-bold text-md">{name}</p>
            <p className="text-sm pt-1.5 pr-2.5 text-grey-3">{university}</p>
          </div>
        </div>
        <div className="flex gap-4 self-center items-center">
          <ArchiveAdd size={24} />
          {application_status !== "Accepted" ? (
            <>
              <TickCircle color="#27AE60" className=" cursor-pointer" />
              <CloseCircle color="#EB5757" className=" cursor-pointer" />
            </>
          ) : (
            <SmsEdit />
          )}
          <Link
            href="/portal/candidates/1"
            className="flex gap-[10px] py-3 px-6 rounded-lg bg-secondary"
          >
            View profile
            <ArrowRight size={24} />
          </Link>
        </div>
      </div>
      {application_status === "Accepted" && (
        <div className="flex flex-col gap-1">
          <span>
            Start Date: <strong>Monday, 12th Feb,2024</strong>
          </span>
          <span>
            End Date: <strong>Monday, 12th May,2024</strong>
          </span>
        </div>
      )}
    </div>
  );
}
