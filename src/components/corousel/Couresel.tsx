import React from "react";
import { Carousel } from "@material-tailwind/react";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";

export const Corousel: React.FC = () => {
  return (
    <>
      <Carousel placeholder={""}
        className="rounded-xl mt-10"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img src={banner1} alt="image 1" className="w-full object-cover h-96" />
        <img src={banner2} alt="image 2" className="w-full object-cover h-96" />
        <img src={banner3} alt="image 3" className="h-96 w-full object-cover" />
      </Carousel>
    </>
  );
};
