import React from "react";
import banner from "../../image/Banner.jpeg"; //Health-Insurance\Client\src\image\Banner.jpeg

const Banner = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat h-auto bg-[#E0E0E0] py-24 px-10 mb-10"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "70% 120%",
          backgroundPosition: "center top",
          height: "400px",
        }}
      >
        {/* <div className="md:w-1/2 pl-[250px]">
          <p className="text-3xl font-bold">Still Waiting for Bail?</p>
          <p className="text-2xl mb-10 leading-none">
            Freedom is Just a Click Away!
          </p>
          <a
            href="/plans"
            className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-purple-700 hover:text-white-800"
          >
            Check Bail Status >
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
