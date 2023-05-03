import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Front-end Developer"
            subTitle="In freelancing sites - (2022 - Present)"
            result="Egypt"
            des="Create many responsive websites and projects."
          />
          <ResumeCard
            title="Digital Marketer & Volunteer & Internship"
            subTitle="Amnick Team - (2023 - Present )"
            result="England - Remotly"
            des="I helped them manage their social media pages and SEO on their web page."
          />
        </div>
      </div>
      <div>
       
      </div>
    </motion.div>
  );
};

export default Experience;
