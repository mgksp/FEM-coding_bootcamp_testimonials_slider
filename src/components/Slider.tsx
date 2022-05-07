import { motion } from "framer-motion";

import patternBg from "../images/pattern-bg.svg";
import patternQuote from "../images/pattern-quotes.svg";

import iconLeft from "../images/icon-prev.svg";
import iconRight from "../images/icon-next.svg";

import john from "../images/image-john.jpg";
import tanya from "../images/image-tanya.jpg";
import { useState } from "react";

interface Testimonial {
  img: string;
  quote: string;
  name: string;
  profession: string;
}

export default function Slider() {
  const [slideIdx, setSlideIdx] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      img: tanya,
      quote: `" I've been interested in coding for a while but never taken the jump, until now. 
              I couldn't recommend this course enough. I'm now in the job of my dreams and so excited 
              about the future. "`,
      name: "Tanya Sinclair",
      profession: "UX Engineer",
    },
    {
      img: john,
      quote: `" If you want to lay the best foundation possible
              I'd recommend taking this course. 
              The depth the instructors go into is incredible. 
              I now feel so confident about starting up as a professional developer. "`,
      name: "John Tarkpor",
      profession: "Junior Front-end Developer",
    },
  ];

  const slideRight = () => {
    if (!(slideIdx >= testimonials.length - 1)) {
      setSlideIdx((prev) => prev + 1);
    } else {
      setSlideIdx(0);
    }
  };

  const slideLeft = () => {
    if (!(slideIdx === 0)) {
      setSlideIdx((prev) => prev - 1);
    } else {
      setSlideIdx(testimonials.length - 1);
    }
  };

  return (
    <div className="p-6 lg:grid grid-cols-2 place-content-center max-w-6xl mx-auto">
      <div className="relative p-9 mx-auto w-fit col-start-2 lg:p-12 lg:pr-20">
        <img className="absolute inset-0" src={patternBg} alt="" />
        <div className="relative">
          <motion.img
            className="rounded shadow-2xl"
            src={testimonials[slideIdx].img}
            alt=""
          />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-20 shadow-lg flex rounded-full lg:left-1/4 overflow-hidden">
            <button
              className="bg-white hover:bg-gray-200 outline-none focus:bg-gray-200 active:bg-gray-300 w-1/2 grid place-content-center p-3"
              onClick={slideLeft}
            >
              <img src={iconLeft} alt="" />
            </button>
            <button
              className="bg-white hover:bg-gray-200 outline-none focus:bg-gray-200 active:bg-gray-300 w-1/2 grid place-content-center p-3"
              onClick={slideRight}
            >
              <img src={iconRight} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative py-6 h-fit self-center row-start-1 text-center lg:text-left lg:pl-24">
        <img
          className="absolute top-0 left-1/2 -translate-x-1/2 w-14 lg:w-auto"
          src={patternQuote}
          alt=""
        />
        <motion.blockquote className="text-lg font-light w-[30ch] mx-auto lg:text-32 lg:leading-[2.75rem] lg:w-[35ch]">
          {testimonials[slideIdx].quote}
        </motion.blockquote>
        <div className="mt-3 lg:mt-10 lg:flex gap-4">
          <h1 className="text-15 font-bold lg:text-xl">
            {testimonials[slideIdx].name}
          </h1>
          <p className="text-15 text-grayishBlue font-medium lg:text-xl">
            {testimonials[slideIdx].profession}
          </p>
        </div>
      </div>
    </div>
  );
}
