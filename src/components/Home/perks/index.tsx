"use client";

import { perksData } from "@/app/api/data";

const Perks = () => {
  return (
    <section className="pb-28 relative">
      <div className="container px-4 relative z-2">
        <div className="text-center">
          <div className="flex flex-col gap-4">
            <p className="text-muted text-base relative">
              Always By <span className="text-primary">your side</span>
            </p>
            <h2 className="text-white sm:text-4xl text-3xl font-medium">
              Experience Cutting-Edge Software Solutions!
            </h2>
          </div>

          <div className="mt-16 border border-border/20 grid lg:grid-cols-3 sm:grid-cols-2 py-16 gap-10 px-20 rounded-3xl sm:bg-perk bg-dark_grey/35 lg:bg-bottom bg-center bg-no-repeat">
            {perksData.map((item, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center justify-center gap-6 p-6 rounded-xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              >
                <div className="bg-primary/25 backdrop-blur-xs p-4 rounded-full w-fit">
                  {item.icon}
                </div>
                <h4 className="text-white text-2xl font-semibold">{item.title}</h4>
                <p className="text-muted/60 text-sm sm:text-base">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Perks;
