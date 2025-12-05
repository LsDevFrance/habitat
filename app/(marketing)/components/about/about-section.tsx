"use client";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { NumberTicker } from "@/components/ui/number-ticker";
import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-16  ">
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sit
          quo ducimus dolor libero alias consequuntur mollitia iusto porro eos
          repellat, obcaecati sunt voluptatum dolorum aspernatur, iure est
          nostrum dolores doloremque voluptate, pariatur dolore architecto
          saepe. Quis ab ipsa dolorem eligendi.
        </p>
      </motion.div>
      <div className="relative bg-[url('/img/about.png')] bg-cover bg-center h-[600px] md:h-[700px] rounded-lg overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
          <div className="bg-white rounded-lg p-6 md:p-8 flex-1 max-w-sm shadow-lg">
            <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              <NumberTicker delay={1} value={1500} />
            </p>
            <p className="text-sm md:text-base text-gray-700">
              Total Properties Sold, Helping Families Find Their Dream Homes For
              Over A Decade.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 md:p-8 flex-1 max-w-sm shadow-lg">
            <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              <NumberTicker delay={1} value={30} />+
            </p>
            <p className="text-sm md:text-base text-gray-700">
              Strong Partnerships With Local Businesses To Enhance Our Services.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 md:p-8 flex-1 max-w-sm shadow-lg">
            <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              <NumberTicker delay={1} value={98} />%
            </p>
            <p className="text-sm md:text-base text-gray-700">
              Client Satisfaction Rate, Reflecting Our Commitment To Exceptional
              Service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
