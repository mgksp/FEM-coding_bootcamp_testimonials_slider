import { motion } from "framer-motion";

import patternCurve from "./images/pattern-curve.svg";
import patternBg from "./images/pattern-bg.svg";
import patternQuote from "./images/pattern-quotes.svg";

import iconLeft from "./images/icon-prev.svg";
import iconRight from "./images/icon-next.svg";

import john from "./images/image-john.jpg";

function App() {
  return (
    <main className="relative min-h-screen text-dkBlue p-6">
      <img
        className="absolute bottom-0 left-0 h-[4.5rem]"
        src={patternCurve}
        alt=""
      />

      <div className="relative p-9">
        <img className="absolute inset-0" src={patternBg} alt="" />
        <div className="relative">
          <motion.img className="rounded shadow-lg" src={john} alt="" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-20 shadow-md flex rounded-full overflow-hidden">
            <button className="bg-white w-1/2 grid place-content-center p-3">
              <img src={iconLeft} alt="" />
            </button>
            <button className="bg-white w-1/2 grid place-content-center p-3">
              <img src={iconRight} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative py-6">
        <img
          className="absolute top-0 left-1/2 -translate-x-1/2 w-14"
          src={patternQuote}
          alt=""
        />
        <blockquote className="text-lg font-light text-center w-[30ch] mx-auto">
          "If you want to lay the best foundation possible I&apos;d recommend
          taking this course. The depth the instructors go into is incredible. I
          now feel so confident about starting up as a professional developer."
        </blockquote>
        <div className="text-center mt-3">
          <h1 className="text-15 font-bold">John Tarkpor</h1>
          <p className="text-grayishBlue">Junior Front-end Developer</p>
        </div>
      </div>
    </main>
  );
}

export default App;
