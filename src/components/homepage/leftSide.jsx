import { GetApiData } from "@/lib/Api_data"
import Link from "next/link";
import { Suspense } from "react";
import Categorys from "./Categorys";
import ListSkeleton from "./ListSkeleton";

export default function LeftSideContent({className}){
    const CategorysDataPromise = GetApiData("https://openapi.programming-hero.com/api/news/categories");

    return(
        <aside className={`${className}`}>
            <h1 className="font-bold text-[20px] px-4">All Caterogy</h1>
            <Suspense fallback={<ListSkeleton />}>
            
              <Categorys CategorysDataPromise={CategorysDataPromise} />
            </Suspense>
        </aside>
    )
}