"use client";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Section, SectionContent, SectionTitle } from "@/features/page/section";
import { TestimonialCarousel } from "./testimonial-carousel";

export default function ReviewSection() {
  return (
    <Section id="review">
      <SectionContent>
        <SectionTitle className="mb-12">
          Discover Handpicked Homes <br /> That{" "}
          <AnimatedShinyText
            shimmerWidth={150}
            className="font-serif italic text-primary text-shadow-md"
          >
            Define Elegance
          </AnimatedShinyText>
        </SectionTitle>

        <TestimonialCarousel />
      </SectionContent>
    </Section>
  );
}
