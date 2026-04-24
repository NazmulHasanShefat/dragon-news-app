import LeftSideContent from "@/components/homepage/leftSide";
import RightSide from "@/components/homepage/RightSide";
import React, { Suspense } from "react";

const Categorylayout = ({ children }) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-12 w-full max-w-322 mx-auto mt-5">
      <LeftSideContent
        className={`col-span-3 lg:col-span-2 md:sticky top-13 self-start`}
      />
      <Suspense fallback={<h1>loding...</h1>}>
       {children}
      </Suspense>
      <RightSide
        className={`col-span-3 lg:col-span-2 md:sticky top-13 self-start`}
      />
    </main>
  );
};

export default Categorylayout;
