import frame from "./assets/frame.jpg";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-[114px] md:mt-[100px] ">
      <div className="grid md:grid-cols-2 items-center gap-6 lg:px-20 ">
        <div className=" flex justify-center md:order-2">
          <img
            className="rounded-lg max-md:w-full"
            src={frame}
            height="290"
            width="326"
            alt="frame"
          />
        </div>
        <div>
          <h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
            Tasker
          </h1>
          <p className="text-lg my-2 opacity-60">
            Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker -
            Your Personal Productivity Ally for Seamless Goal Achievement and
            Stress-Free Task Management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
