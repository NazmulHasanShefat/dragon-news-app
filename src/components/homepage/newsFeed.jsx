import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBookmark, FaEye, FaShare, FaStar } from "react-icons/fa";


const NewsFeed = ({ className }) => {
  return (
    <section className={`${className} pr-15`}>
      <h1 className="text-[20px] font-bold">Dragon News Home</h1>
      <div className="newscards_container">
        <div className="news_card border border-gray-300 rounded-lg p-3 mt-3">
          <div className="card-header flex justify-between items-center ">
            <div className="header_left flex items-center gap-2">
              <div className="avater rounded-full bg-black text-white px-2.5 py-1">
                A
              </div>
              <div>
                <p className="name text-base font-bold">Awal hossin</p>
                <p className="font-light text-xs ">2022-08-21</p>
              </div>
            </div>
            <div className="card_right flex items-center gap-2">
              <FaBookmark size={20} className="cursor-pointer" />
              <FaShare size={20} className="cursor-pointer" />
            </div>
          </div>
          <div className="card-content">
            <p className="newsCard tile text-[20px] font-bold py-3">
              Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
              Military Aid Package Yet
            </p>
            <Image
              src={`/NewsImage.png`}
              width={1200}
              quality={800}
              height={0}
              style={{ width: "100%", height: "auto" }}
              alt="feed image"
            />
            <p className="new-description text-base">
              Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
              Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
              United States, Worthy News (Worthy News) – U.S. President Joe
              Biden has announced nearly $3 billion in new U.S. military a...{" "}
              <Link href={`/`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </p>
          </div>
          <div className="card_footer flex justify-between items-center py-3">
            <div className="card_footer_left flex gap-2 items-center">
                <FaStar size={25}/>
                <FaStar size={25}/>
                <FaStar size={25}/>
                <FaStar size={25}/>
                <FaStar size={25}/>
             
            </div>
            <div className="card_footer_right flex gap-2 items-center">
                <FaEye />
                2334
            </div>
          </div>
        </div>
      
       
      </div>
    </section>
  );
};

export default NewsFeed;
