"use client";

import React, { useEffect, useState } from "react";
import portfolioData from "@/app/mocks/portfolioData.json";
import TimelineCard from "../components/TimelineCard";
import TimelineModal from "../components/TimelineModal";

const TimelineSection = () => {
  const { timelines } = portfolioData;
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

  useEffect(() => {
    console.log("isModalOpened", isModalOpened);
  }, [isModalOpened]);
  return (
    <>
      <section>
        <h5>나의 타임라인</h5>
        {timelines && (
          <div className="flex flex-col justify-start items-center gap-y-8">
            {timelines.map((timeline, index) => (
              <TimelineCard
                key={index}
                title={timeline.title}
                date={timeline.date}
                description={timeline.description}
                isModalOpened={isModalOpened}
                setIsModalOpened={setIsModalOpened}
              />
            ))}
          </div>
        )}
      </section>
      {isModalOpened && <TimelineModal setIsModalOpened={setIsModalOpened} />}
    </>
  );
};

export default TimelineSection;
