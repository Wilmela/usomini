import FeaturedProjects from "@/components/featured-projects";
import FeaturedStats from "@/components/featured-stats";
import Landing from "@/components/landing";
import NewsletterCTA from "@/components/newsletter-comp";
import OurValues from "@/components/our-values";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <div>
      <Landing />

      <div className="bg-white">
        <FeaturedStats />
      </div>

      <div className="bg-gradient-green">
        <OurValues />
      </div>
      <div className="bg-linear-to-br from-gr/40 to-emerald-400/60">
        <FeaturedProjects />
      </div>

      <Testimonial />

      <div className="bg-gradient-light-green">
        <NewsletterCTA />
      </div>
    </div>
  );
}
