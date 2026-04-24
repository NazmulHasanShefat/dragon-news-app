import { use } from "react";
import CategorysLinks from "./CategorysLinks";

export default function Categorys({ CategorysDataPromise }) {
  const { data } = use(CategorysDataPromise);
  const { news_category } = data;
  return (
    <ul className="flex flex-col">
      { news_category.map((categoryLink,index)=> <CategorysLinks categoryLink={categoryLink} key={index} />)}
    </ul>
  );
}
