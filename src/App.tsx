import Slider from "./components/Slider";

import patternCurve from "./images/pattern-curve.svg";

function App() {
  return (
    <main className="relative min-h-screen text-dkBlue grid place-content-center">
      <img
        className="absolute bottom-0 left-0 h-[4.5rem] lg:h-auto"
        src={patternCurve}
        alt=""
      />
      <Slider />
      <Footer />
    </main>
  );
}

const Footer = () => {
  return (
    <div className="text-xs text-center w-full py-1 text-grayishBlue absolute bottom-0 left-0">
      Challenge by&nbsp;
      <a
        className="text-sm font-bold text-dkBlue"
        href="https://www.frontendmentor.io?ref=challenge"
        rel="noreferrer"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by&nbsp;
      <a
        className="text-sm font-bold text-dkBlue"
        href="https://www.github.com/mgksp"
        rel="noreferrer"
        target="_blank"
      >
        Prabu
      </a>
      .
    </div>
  );
};

export default App;
