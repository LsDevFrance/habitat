"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "We Couldn't Be Happier With The Outcome Of Our Renovation Project. From The Initial Consultation To The Final Touches, The Team Demonstrated A High Level Of Professionalism, Creativity.",
    author: "Tommie Littel",
    location: "Nusa Dua, Bali",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tommie",
  },
  {
    id: 2,
    quote:
      "Outstanding service from start to finish. The attention to detail and commitment to excellence was evident in every aspect of our project. We highly recommend their team for any renovation work.",
    author: "Sarah Johnson",
    location: "Jakarta, Indonesia",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: 3,
    quote:
      "Exceptional craftsmanship and professionalism. The team went above and beyond to ensure our vision became reality. Their expertise and dedication made all the difference.",
    author: "Michael Chen",
    location: "Bali, Indonesia",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    id: 4,
    quote:
      "A truly remarkable experience. From the first consultation to the final walkthrough, every team member was professional, creative, and committed to excellence.",
    author: "Emma Williams",
    location: "Seminyak, Bali",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
  {
    id: 5,
    quote:
      "Best decision we made for our home renovation. The team's communication, creativity, and professionalism were exceptional. Highly recommended!",
    author: "David Martinez",
    location: "Ubud, Bali",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
  },
  {
    id: 6,
    quote:
      "Incredible attention to detail and superior craftsmanship. The team understood our vision perfectly and executed it flawlessly. We're thrilled with the results.",
    author: "Jessica Lee",
    location: "Denpasar, Bali",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
  },
  {
    id: 7,
    quote:
      "The level of professionalism and creativity was exactly what we needed. Every interaction was positive and the final product exceeded our expectations.",
    author: "Robert Taylor",
    location: "Sanur, Bali",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
  },
  {
    id: 8,
    quote:
      "Outstanding work from a truly talented team. They managed our project with expertise and brought fresh ideas to every challenge. We couldn't ask for better.",
    author: "Amanda Scott",
    location: "Canggu, Bali",
    rating: 5,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amanda",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const testimonial = testimonials[current];

  return (
    <div className=" px-4">
      <div className="w-full">
        {/* Quote */}
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed text-balance">
            &quot;{testimonial.quote}&quot;
          </p>
        </div>

        {/* Rating */}
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="flex gap-1">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-gray-900 font-medium">
            {testimonial.rating.toFixed(1)}/{testimonials.length - 3}
          </span>
        </div>

        {/* Author */}
        <div className="flex justify-center items-center gap-3 mb-8">
          <img
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.author}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
          />
          <div className="text-left">
            <p className="font-semibold text-gray-900">{testimonial.author}</p>
            <p className="text-sm text-gray-500">{testimonial.location}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="rounded-full w-10 h-10 bg-transparent"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="text-gray-600 font-bold text-lg  min-w-12 text-center">
            {String(current + 1).padStart(2, "0")}/
            {String(testimonials.length).padStart(2, "0")}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="rounded-full w-10 h-10 bg-transparent"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
