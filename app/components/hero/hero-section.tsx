"use client";
import { motion } from "motion/react";
import Image from "next/image";
import SearchEstate from "./search-estate";

export default function HeroSection() {
  return (
    <div
      id="hero"
      style={{
        height: "90vh",
        position: "relative",
        width: "100%",
        zIndex: 0,
      }}
    >
      <Image
        src="/img/1.png"
        alt="Hero image"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-4xl px-4">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-serif italic mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Buy. Sell. Rent.
        </motion.h2>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Real Estate Done Right
        </motion.h1>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-4xl px-4">
        <SearchEstate />
      </div>
    </div>
  );
}
