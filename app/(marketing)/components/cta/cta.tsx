"use client";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Cta() {
  return (
    <section className="container mx-auto px-4 py-16 ">
      <div className="bg-blue-500 rounded-lg p-4">
        {/* Left side - Text content */}
        <motion.div
          className="space-y-6 text-white"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-sans leading-tight">
            Make Your Dream{" "}
            <span className="block">
              Space a{" "}
              <span className="font-serif italic text-3xl md:text-4xl lg:text-5xl">
                Reality
              </span>
            </span>
          </h2>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed max-w-lg">
            Partner with us to create stunning, innovative designs that match
            your vision. Let&apos;s build something extraordinary together.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Button
              className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-base md:text-lg font-medium"
              size="lg"
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
