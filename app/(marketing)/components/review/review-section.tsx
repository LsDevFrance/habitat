"use client";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { motion } from "motion/react";
import { TestimonialCarousel } from "./testimonial-carousel";

export default function ReviewSection() {
  return (
    <section id="review" className="container mx-auto px-4 py-16  ">
      <motion.div
        className="mb-12 mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="mb-4 text-2xl  md:text-3xl lg:text-4xl">
          Discover Handpicked Homes <br /> That{" "}
          <AnimatedShinyText
            shimmerWidth={150}
            className="font-serif italic text-primary text-shadow-md"
          >
            Define Elegance
          </AnimatedShinyText>
        </h2>
      </motion.div>
      <TestimonialCarousel />
    </section>
  );
}
