import React from "react";
import { newsItems } from "../../assets/core/data";
import NewsCard from "../../components/news_card/_component";
import Button from "../../components/button/_component";

function News() {
  return (
    <>
      <div className="">
        <h3 className="my-16 text-4xl text-center">
          Never miss the latest news
        </h3>

        <div className="grid grid-cols-2 gap-3 mx-44">
          {newsItems.map((ni, i) => (
            <NewsCard
              key={i}
              img={ni.img}
              date={ni.date}
              header={ni.title}
              passage={ni.desc}
            />
          ))}
        </div>
        <div className="flex justify-center py-8 ">
          <Button bgColor="bg-black" name="Join our community" />
        </div>
      </div>
    </>
  );
}

export default News;
