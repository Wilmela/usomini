"use client";

import Carousel from "react-multi-carousel";
import TestimonialCard from "./testimonial-card";

const CarouselSlide = () => {
  const values = [
    {
      name: "John Doe",
      description:
        "We prioritize collective well-being over individual gain, fostering an environment where every member feels valued, heard, and supported in their journey.",
      imgUrl: "/assets/images/bg.jpg",
      color: "bg-blue-100 text-blue-600",
      position: "chief 1",
    },
    {
      name: "Amaka Osiagor",
      description:
        "Embracing diversity as our strength, we build bridges across generations, cultures, and backgrounds to create a truly unified community.",
      imgUrl: "/assets/images/bg.jpg",

      color: "bg-red-100 text-red-600",
      position: "chief 2",
    },
    {
      name: "Uba Ekele",
      description:
        "Responsibly managing our natural resources to ensure Usomini's beauty and bounty endure for generations to come.",
      imgUrl: "/assets/images/bg.jpg",

      color: "bg-green-100 text-green-600",
      position: "chief 3",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      responsive={responsive}
      autoPlay
      showDots={false}
      autoPlaySpeed={2000}
      transitionDuration={500}
      arrows={false}
      infinite={true}
    >
      {values.map((v) => (
        <TestimonialCard
          key={v.name}
          iconColor={v.color}
          description={v.description}
          imgUrl={v.imgUrl}
          name={v.name}
          position={v.position}
        />
      ))}
    </Carousel>
  );
};

export default CarouselSlide;
