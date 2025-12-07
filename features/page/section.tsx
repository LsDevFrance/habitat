import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function SectionDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.p
      className={cn(
        "mb-12 text-center text-base md:text-lg lg:text-xl",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.p>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h2
      className={cn(
        "text-center mb-4 text-2xl md:text-3xl lg:text-4xl",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.h2>
  );
}

export function SectionContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className="container mx-auto">{children}</div>;
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("px-4 py-16  ", className)}>
      {children}
    </section>
  );
}
