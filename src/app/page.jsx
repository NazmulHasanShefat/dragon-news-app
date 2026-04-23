import LeftSideContent from "@/components/homepage/leftSide";
import NewsFeed from "@/components/homepage/newsFeed";
import RightSide from "@/components/homepage/RightSide";

export default function Home(){
  return(
    <div>
    <div title="latest news" className="w-full max-w-322 mx-auto flex items-center justify-start mt-3 gap-5">
      <button className="py-2 px-4 bg-red-500 text-white">Latest</button>
      <p className="text-lg text-left font-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione harum ea quasi dicta sint impedit officiis natus dolor eos. Numquam.</p>
    </div>

    <main className="grid grid-cols-1 md:grid-cols-12 w-full max-w-322 mx-auto mt-5">
      <LeftSideContent className={`col-span-2 sticky`}/>
      <NewsFeed className={`col-span-8`}/>
      <RightSide className={`col-span-2 sticky right-0 top-0 z-10`}/>
    </main>
    </div>
  )
}