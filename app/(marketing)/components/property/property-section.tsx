"use client";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import { Section, SectionContent, SectionTitle } from "@/features/page/section";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import PropertyCard from "./property-card";

const propertyTypes = [
  "All",
  "Villas",
  "Apartments",
  "Duplex Homes",
  "Townhouses",
  "Studio Apartments",
  "Luxury Villas",
  "Retail Spaces",
];

const properties = [
  {
    id: 1,
    title: "Tropical Oasis",
    location: "Seminyak, Bali",
    description: "Private pool, lush gardens, modern amenities",
    price: "$2,450,000",
    image: "/img/1.png",
  },
  {
    id: 2,
    title: "Bali Cliff Retreat",
    location: "Uluwatu, Bali",
    description: "Panoramic ocean views, spacious living areas",
    price: "$850,000",
    image: "/img/2.png",
  },
  {
    id: 3,
    title: "Metro Skyline Loft",
    location: "Jakarta, Indonesia",
    description: "Contemporary design, floor-to-ceiling windows",
    price: "$2,150,000",
    image: "/img/3.png",
  },
  {
    id: 4,
    title: "Modern Luxury Estate",
    location: "Bali, Indonesia",
    description: "Stunning architecture, premium finishes",
    price: "$1,850,000",
    image: "/img/4.png",
  },
  {
    id: 5,
    title: "Modern Luxury Estate",
    location: "Bali, Indonesia",
    description: "Stunning architecture, premium finishes",
    price: "$1,850,000",
    image: "/img/4.png",
  },
  {
    id: 6,
    title: "Modern Luxury Estate",
    location: "Bali, Indonesia",
    description: "Stunning architecture, premium finishes",
    price: "$1,850,000",
    image: "/img/4.png",
  },
];

export default function PropertySection() {
  const [selectedType, setSelectedType] = useState("All");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <Section id="properties" className="mt-12">
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
        <motion.div
          className="relative mb-12 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 z-10 h-10 w-10 shrink-0 rounded-full border shadow-md"
            onClick={scrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="size-5" />
          </Button>
          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {propertyTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              >
                <Button
                  variant={selectedType === type ? "default" : "outline"}
                  onClick={() => setSelectedType(type)}
                  className="whitespace-nowrap rounded-full px-6 py-2"
                >
                  {type}
                </Button>
              </motion.div>
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 z-10 h-10 w-10 shrink-0 rounded-full border shadow-md"
            onClick={scrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="size-5" />
          </Button>
        </motion.div>

        <div className="flex gap-6 flex-col items-center">
          {/* Properties Grid */}
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {properties.map((property) => (
              <motion.div
                key={property.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <PropertyCard
                  id={property.id}
                  title={property.title}
                  location={property.location}
                  description={property.description}
                  price={property.price}
                  image={property.image}
                />
              </motion.div>
            ))}
          </motion.div>
          <Button className=" mx-auto">Explore More</Button>
        </div>
      </SectionContent>
    </Section>
  );
}
