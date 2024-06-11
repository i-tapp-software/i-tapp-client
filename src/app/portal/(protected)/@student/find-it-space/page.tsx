import React from "react";

import FindITSpace from "./_molecules/index";

export default function page({ searchParams }: { searchParams: string }) {
  return <FindITSpace searchParams={searchParams} />;
}
