"use client";

import Image from "next/image";
import {
  ArchiveAdd,
  ArrowLeft,
  Call,
  Location,
  Note1,
  Sms,
} from "iconsax-react";
import { useGlobal } from "@/context/GlobalContext";
import { Button } from "@/components/ui/button";
import { acceptApplication, declineApplication } from "@/api/actions/auth";
import { useAction } from "next-safe-action/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CandidateProfile() {
  const { selectedApplicant } = useGlobal();

  const student = selectedApplicant?.student;
  const id = student?.id;

  const name = student?.firstName + " " + student?.lastName;

  const { execute: acceptAction, isExecuting: isAccepting } = useAction(
    acceptApplication,
    {
      onSuccess: () => {
        toast.success("Application accepted successfully!");
      },
      onError: (error) => {
        console.log(error);
        toast.error(" Error accepting application, please try again.");
      },
    }
  );

  const { execute: declineAction, isExecuting: isDeclining } = useAction(
    declineApplication,
    {
      onSuccess: () => {
        toast.success("Application declined successfully!");
      },
      onError: (error) => {
        console.log(error);
        toast.error(" Error accepting application, please try again.");
      },
    }
  );

  const handleAccept = () => {
    if (student?.id) {
      acceptAction({ id: student.id });
    }
  };

  return (
    <div className="p-6 bg-background">
      <div className="flex gap-6 justify-between flex-wrap mb-8">
        <div className="flex gap-6 items-center">
          <ArrowLeft className="text-foreground cursor-pointer" size={24} />
          <Image
            src="/applicant.png"
            alt="applicant"
            width={101}
            height={96}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold text-lg text-foreground">{name}</p>
            <p className="text-base pt-1.5 pr-2.5 text-muted-foreground">
              {student?.courseOfStudy || "Not specified"}
            </p>
          </div>
        </div>
        <div className="flex gap-3 self-center">
          <Button
            onClick={handleAccept}
            size="sm"
            disabled={isAccepting}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
          >
            Accept
          </Button>
          <Button
            onClick={() => declineAction({ id: student.id })}
            disabled={isDeclining}
            size="sm"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3"
          >
            Decline
          </Button>
        </div>
      </div>

      <div className="mt-4">
        <p className="font-bold mb-2 text-foreground">Bio</p>

        <div className="flex justify-between gap-4 flex-wrap">
          <p className="text-sm max-w-[590px] text-foreground">
            {student.bio || "No bio provided."}
          </p>

          <div className="border-2 border-primary/20 max-w-[380px] rounded-md bg-card">
            <div className="flex flex-col gap-3 text-sm p-6">
              <h6 className="text-md font-semibold text-foreground">
                Student information
              </h6>

              <div className="flex flex-col gap-1">
                <Note1 className="text-primary" size={20} />
                <p className="text-muted-foreground text-sm">NAME OF SCHOOL</p>
                <p className="font-bold text-foreground">
                  {student?.school || "Not specified"}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <Sms className="text-primary" size={20} />
                <p className="text-muted-foreground text-sm">EMAIL ADDRESS</p>
                <p className="font-bold text-foreground">
                  {student?.email || "Not specified"}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <Call className="text-primary" size={20} />
                <p className="text-muted-foreground text-sm">PHONE NUMBER</p>
                <p className="font-bold text-sm text-foreground">
                  {student.phoneNumber || "Not specified"}
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <Location className="text-primary" size={20} />
                <p className="text-muted-foreground text-sm">ADDRESS</p>
                <p className="font-bold text-foreground">
                  {student?.address ||
                    "No 3, Ugbolokposo road, off Ugbomoro street, Apapa, Lagos state."}
                </p>
              </div>
            </div>

            <div className="border-t border-primary/20 p-6">
              <h6 className="font-bold text-foreground mb-3">
                Application Documents
              </h6>
              <div className="flex gap-3 items-center">
                <Button
                  size="sm"
                  className="px-4 py-2 bg-secondary text-secondary-foreground"
                >
                  View
                </Button>

                <Button
                  size="sm"
                  className="px-4 py-2 bg-secondary text-secondary-foreground"
                >
                  <span>Save</span> <ArchiveAdd className="ml-2" size={20} />
                </Button>

                <Button
                  size="sm"
                  className="px-4 py-2 bg-primary text-primary-foreground"
                >
                  Shortlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
