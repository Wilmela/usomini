// components/sections/ValuesSection.tsx - CLIENT COMPONENT
"use client";

import MaxWidthWrapper from "./max-width-wrapper";
import SectionTitle from "./section-title";
import ProjectCard from "./project-card";

export default function FeaturedProjects() {
  const values = [
    {
      title: "Community Unity",
      description:
        "We prioritize collective well-being over individual gain, fostering an environment where every member feels valued, heard, and supported in their journey.",
      imgUrl: "/assets/images/t-rulers.jpg",
    },
    {
      title: "Education",
      description:
        "Embracing diversity as our strength, we build bridges across generations, cultures, and backgrounds to create a truly unified community.",
      imgUrl: "/assets/images/edu.jpg",
    },
    {
      title: "Usomini Beauty And Cultural Services",
      description:
        "Responsibly managing our natural resources to ensure Usomini's beauty and bounty endure for generations to come.",
      imgUrl: "/assets/images/pg.jpg",
    },
    {
      title: "Tradition Events",
      description:
        "Responsibly managing our natural resources to ensure Usomini's beauty and bounty endure for generations to come.",
      imgUrl: "/assets/images/wrestle.jpg",
    },
  ];

  return (
    <MaxWidthWrapper>
      <SectionTitle title="Featured Projects" descritpion="Some projects" />

      <div className="hidden md:flex items-center justify-between">
        <div>
          <ProjectCard
            className="h-125 w-85"
            title={values[0].title}
            description={values[0].description}
            imgUrl={values[0].imgUrl ?? "/assets/images/bg.jpg"}
          />
        </div>
        <div>
          <ProjectCard
            className="h-125 w-85"
            title={values[1].title}
            description={values[1].description}
            imgUrl={values[1].imgUrl ?? "/assets/images/bg.jpg"}
          />
        </div>

        <div className="flex flex-col gap-5">
          <ProjectCard
            className="h-60 w-125"
            title={values[2].title}
            description={values[2].description}
            imgUrl={values[2].imgUrl ?? "/assets/images/bg.jpg"}
            imageClassName="aspect-video"
          />
          <ProjectCard
            className="h-60 w-125"
            title={values[3].title}
            description={values[3].description}
            imgUrl={values[3].imgUrl ?? "/assets/images/bg.jpg"}
            imageClassName="aspect-video"
          />
        </div>
      </div>

      {/* <div className="md:hidden grid grid-cols-1 gap-6">
        {values.map((v) => (
          <ProjectCard
            className="w-full h-75"
            key={v.title}
            description={v.description}
            imgUrl={v.imgUrl}
            title={v.title}
            imageClassName="aspect-video"
          />
        ))}
      </div> */}
    </MaxWidthWrapper>
  );
}
