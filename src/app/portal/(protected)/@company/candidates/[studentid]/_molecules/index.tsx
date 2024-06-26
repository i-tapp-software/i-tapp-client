import Image from "next/image";
import {
  ArchiveAdd,
  ArrowLeft,
  Call,
  Location,
  Note1,
  Sms,
} from "iconsax-react";

import { Button } from "@/components/ui/button";

export function CandidateProfile() {
  return (
    <div>
      <div className="flex gap-6 justify-between flex-wrap">
        <div className="flex gap-6">
          <ArrowLeft className=" self-center" />
          <Image
            src="/applicant.png"
            alt="applicant"
            width={101}
            height={96}
            className="rounded-full"
          />
          <div className="self-center">
            <p className=" font-semi-bold text-lg">Oghenekevwe Igbenedion</p>
            <p className="text-base pt-1.5 pr-2.5 text-grey-3">
              Chemical Engineering student
            </p>
          </div>
        </div>
        <div className="flex gap-3 self-center">
          <Button size="sm" className=" bg-[#27AE60] px-6 py-3 ">
            Accept
          </Button>
          <Button size="sm" className="bg-[#EB5757] px-6 py-3 ">
            Decline
          </Button>
        </div>
      </div>

      <div className=" mt-4 ">
        <p className="font-bold mb-2">Bio</p>

        <div className="flex justify-between gap-4 flex-wrap">
          <p className="text-sm max-w-[590px]">
            Velstar is a Shopify Plus agency, and we partner with brands to help
            them grow, we also do the same with our people!
            <br /> <br />
            Here at Velstar, we don't just make websites, we create exceptional
            digital experiences that consumers love. Our team of designers,
            developers, strategists, and creators work together to push brands
            to the next level. From Platform Migration, User Experience & User
            Interface Design, to Digital Marketing, we have a proven track
            record in delivering outstanding eCommerce solutions and driving
            sales for our clients.Want to work with us? You're in good company!
            <br /> <br />
            Want to work with us? You're in good company!
          </p>

          <div className=" border-[#E7F0FA] border-2 max-w-[380px] rounded-md">
            <div className="flex flex-col gap-3  text-sm p-6">
              <h6 className="text-md font-semi-bold">Student information</h6>

              <div className="flex flex-col gap-1">
                <Note1 className="text-primary" />
                <p className="text-[#767F8C] text-sm"> NAME OF SCHOOL</p>
                <p className="font-bold">fupre</p>
              </div>

              <div className="flex flex-col gap-1">
                <Sms className="text-primary" />
                <p className="text-[#767F8C] text-sm">EMAIL ADDRESS</p>
                <p className="font-bold">jutindikonu@gmail.com</p>
              </div>

              <div className="flex flex-col gap-1">
                <Call className="text-primary" />
                <p className="text-[#767F8C] text-sm">PHONE NUMBER</p>
                <p className="font-bold text-sm">0484949499944</p>
              </div>

              <div className="flex flex-col gap-1">
                <Location className="text-primary" />
                <p className="text-[#767F8C] "> ADDRESS</p>
                <p className="font-bold">
                  No 3, Ugbolokposo road, off Ugbomoro street, Apapa, Lagos
                  state.
                </p>
              </div>
            </div>

            <div className=" border-[#E7F0FA] border-t p-6">
              <h6 className="font-bold">Application Documents</h6>
              <div className="flex gap-3 items-center">
                <Button size="sm" className=" px-4 py-2 bg-secondary my-3">
                  View
                </Button>

                <Button
                  size="sm"
                  className=" px-4 py-2 bg-secondary text-black"
                >
                  <span>Save</span> <ArchiveAdd className="ml-2" />
                </Button>

                <Button size="sm" className=" px-4 py-2 bg-primary">
                  Shortlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
