import LeftSideContent from "@/components/homepage/leftSide";
import NewsFeed from "@/components/homepage/newsFeed";
import RightSide from "@/components/homepage/RightSide";
import SkeletonFeedCard from "@/components/homepage/SkeletonFeed";
import MyToast from "@/components/homepage/toast";
import { GetApiData } from "@/lib/Api_data";
import { Suspense } from "react";

export default function Home() {
  const getNewsFeedPromise = GetApiData(
    "https://openapi.programming-hero.com/api/news/category/01",
  );
  return (
    <div className="px-5 md:px-0">
      <div
        title="latest news"
        className="w-full max-w-322 mx-auto flex items-center justify-start mt-3 gap-5"
      >
        <button className="py-2 px-4 bg-red-500 text-white">Latest</button>
        <p className="text-lg text-left font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          harum ea quasi dicta sint impedit officiis natus dolor eos. Numquam.
        </p>
      </div>
      <main className="grid grid-cols-1 md:grid-cols-12 w-full max-w-322 mx-auto mt-5">
        <LeftSideContent
          className={`col-span-3 lg:col-span-2 md:sticky top-13 self-start`}
        />
        <Suspense fallback={<SkeletonFeedCard />}> 
          <NewsFeed
            getNewsFeedPromise={getNewsFeedPromise}
            className={`col-span-6 lg:col-span-8`}
          />
        </Suspense>
        <RightSide
          className={`col-span-3 lg:col-span-2 md:sticky top-13 self-start`}
        />
      </main>
        <div>
     <MyToast />
    </div>
    </div>
  );
}
