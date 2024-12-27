import React from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { Button } from "./ui/button";

interface SlideProps {
  image: string;
  title: string;
  model: string;
  price: string;
}

const Slide: React.FC<SlideProps> = ({ image, title, model, price }) => {
  return (
    <div
      className="relative w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
      aria-label={title}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>

      <div className="relative z-10 flex justify-center items-center md:items-start lg:justify-start h-full p-8 md:p-16 lg:p-40">
        <div className="text-left">
          <h1 className="text-5xl font-bold font-Playfair text-white md:text-7xl mb-4">
            {title}
          </h1>

          <Fade direction="down" cascade>
            <p className="mt-4 text-2xl text-white font-Open mb-6">
              {model}
              <span className="bg-primary rounded-lg px-2 ml-2">৳{price}</span>
              <span className="text-sm ml-2"></span>
            </p>

            <div className="flex mt-8 space-x-4">
              <Link href="/" passHref>
                <Button size={"banner"}>
                  <span className="text-lg font-bold">View Details</span>
                </Button>
              </Link>

              <Link href="/" passHref>
                <Button variant={"secondary"} size={"banner"}>
                  <span className="text-lg font-bold">Buy Now</span>
                </Button>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Slide;

