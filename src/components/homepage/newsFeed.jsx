import { use } from "react";
import NewsCard from "./NewsCard";


const NewsFeed = ({ className,getNewsFeedPromise }) => {
  const { data } = use(getNewsFeedPromise);
  return (
    <section className={`${className} lg:pr-15`}>
      <h1 className="text-[20px] font-bold sm:px-5">Dragon News Home</h1>
      <div className="newscards_container sm:px-5">
        {data.map((newsContent, index)=> <NewsCard newsContent={newsContent} key={index} />)}
      </div>
    </section>
  );
};

export default NewsFeed;
