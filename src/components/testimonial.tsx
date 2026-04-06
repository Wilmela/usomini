import React from "react";
import CarouselSlide from "./testimonial-carousel-slide";
import MaxWidthWrapper from "./max-width-wrapper";
import SectionTitle from "./section-title";

const Testimonial = () => {
  return (
    <MaxWidthWrapper>
        <SectionTitle title="Testimonials" descritpion="Just some tips" />
      <CarouselSlide />
    </MaxWidthWrapper>
  );
};

export default Testimonial;
