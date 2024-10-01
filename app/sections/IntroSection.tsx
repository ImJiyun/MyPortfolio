import React from "react";
import portfolioData from "@/app/mocks/portfolioData.json";

// rafce
const IntroSection = () => {
  const { name, nickName, email, githubUrl, blogUrl } =
    portfolioData.introduction;
  return (
    <section>
      <div>
        <h2>{name}</h2>
        <h3>{nickName}</h3>
        <div>
          <h4>{email}</h4>
          <h4>{githubUrl}</h4>
          <h4>{blogUrl}</h4>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
