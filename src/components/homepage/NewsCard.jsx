import Image from "next/image";
import Link from "next/link";
import { FaBookmark, FaEye, FaShare, FaStar, FaUserCircle } from "react-icons/fa";

export default function NewsCard({newsContent}){
    const {author, details, image_url, rating, thumbnail_url, title, total_view } = newsContent;

    return(
          <div className="news_card border border-gray-300 rounded-lg p-5 mt-3">
          <div className="card-header flex justify-between items-center ">
            <div className="header_left flex items-center gap-2">
              <FaUserCircle size={30}/>
              <div>
                <p className="name text-base font-bold hover:underline cursor-pointer"> {author?.name} </p>
                <p className="font-light text-xs text-gray-400"> {author?.published_date} </p>
              </div>
            </div>
            <div className="card_right flex items-center gap-2">
              <FaBookmark size={20} className="cursor-pointer" />
              <FaShare size={20} className="cursor-pointer" />
            </div>
          </div>
          <div className="card-content">
            <p className="newsCard tile text-[20px] font-bold py-3">
             {title}
            </p>
            <Image
              src={`/NewsImage.png`}
              width={1200}
              height={800}
              style={{ width: "100%", height: "auto" }}
              alt="feed image"
            />
            <p className="new-description text-base py-5 line-clamp-3">
             {details}
            </p>
              <Link href={`/`} className="text-blue-500 hover:underline inline-block py-2">
                Read More
              </Link>
          </div>
          <div className="card_footer flex justify-between items-center">
            <div className="card_footer_left flex gap-2 items-center">
                <FaStar size={25} className="cursor-pointer text-orange-500"/>
                <FaStar size={25} className="cursor-pointer text-orange-500"/>
                <FaStar size={25} className="cursor-pointer text-orange-500"/>
                <FaStar size={25} className="cursor-pointer text-orange-500"/>
                <FaStar size={25} className="cursor-pointer text-orange-500"/>
             
            </div>
            <div className="card_footer_right flex gap-2 items-center">
                <FaEye />
                {total_view}
            </div>
          </div>
        </div>
    )
}