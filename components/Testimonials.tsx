"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
  logoUrl: string;
}

interface Colors {
  name?: string;
  designation?: string;
  testimony?: string;
  arrowBackground?: string;
  arrowForeground?: string;
  arrowHoverBackground?: string;
}

interface FontSizes {
  name?: string;
  designation?: string;
  quote?: string;
}

interface CircularTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  colors?: Colors;
  fontSizes?: FontSizes;
}

function calculateGap(width: number) {
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 50;
  const maxGap = 72;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.05 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  // Color & font config
  const colorName = colors.name ?? "#083C75";
  const colorDesignation = colors.designation ?? "#F18805";
  const colorTestimony = colors.testimony ?? "#083C75/85";
  const colorArrowBg = colors.arrowBackground ?? "#083C75";
  const colorArrowFg = colors.arrowForeground ?? "#ffffff";
  const colorArrowHoverBg = colors.arrowHoverBackground ?? "#F18805";
  const fontSizeName = fontSizes.name ?? "1.65rem";
  const fontSizeDesignation = fontSizes.designation ?? "0.85rem";
  const fontSizeQuote = fontSizes.quote ?? "1.08rem";

  // State
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonialsLength = useMemo(() => testimonials.length, [testimonials]);
  const activeTestimonial = useMemo(
    () => testimonials[activeIndex],
    [activeIndex, testimonials]
  );

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayIntervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonialsLength);
      }, 5500);
    }
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [autoplay, testimonialsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonialsLength);
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
  }, [testimonialsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonialsLength) % testimonialsLength);
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }
  }, [testimonialsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, testimonialsLength, handlePrev, handleNext]);

  // Compute transforms for each image (always show 3: left, center, right)
  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.45;
    const offset = (index - activeIndex + testimonialsLength) % testimonialsLength;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + testimonialsLength) % testimonialsLength === index;
    const isRight = (activeIndex + 1) % testimonialsLength === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.21,.47,.32,.98)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 0.6,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.21,.47,.32,.98)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 0.6,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.21,.47,.32,.98)",
      };
    }
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transform: `translateX(0px) translateY(0px) scale(0.7) rotateY(0deg)`,
      transition: "all 0.8s cubic-bezier(.21,.47,.32,.98)",
    };
  }

  // Framer Motion variants for quote
  const quoteVariants = {
    initial: { opacity: 0, x: 15 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -15 },
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-grid">
        {/* Logos as rotating cards */}
        <div className="image-container" ref={imageContainerRef}>
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.src}
              className="testimonial-image flex items-center justify-center bg-[#fbfcfd] p-10 border border-[#083C75]/10 rounded-[28px]"
              data-index={index}
              style={getImageStyle(index)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={testimonial.logoUrl}
                alt={testimonial.name}
                className="max-h-[60%] max-w-[80%] object-contain opacity-80 transition-all duration-300 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="testimonial-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              variants={quoteVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="flex flex-col justify-between h-full"
            >
              <div>
                {/* A clean quote icon instead of the redundant logo */}
                <div className="mb-6 flex h-8 items-center justify-start text-[#F18805] opacity-20">
                  <svg className="size-8 fill-current" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.748-9.762 9-11l.981 1.961c-3.674 1.821-4.7 4.852-4.94 8.443h4.942v7.987h-10zm-12 0v-7.391c0-5.704 3.748-9.762 9-11l.981 1.961c-3.674 1.821-4.7 4.852-4.94 8.443h4.942v7.987h-10z" />
                  </svg>
                </div>

                <motion.p
                  className="quote"
                  style={{ color: colorTestimony.includes("/") ? undefined : colorTestimony, fontSize: fontSizeQuote }}
                >
                  {activeTestimonial.quote.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{
                        filter: "blur(4px)",
                        opacity: 0,
                        y: 3,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                        delay: 0.015 * i,
                      }}
                      className="word"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </div>

              {/* Author Details */}
              <div className="mt-8 border-t border-[#083C75]/10 pt-5">
                <h3
                  className="name"
                  style={{ color: colorName, fontSize: fontSizeName }}
                >
                  {activeTestimonial.name}
                </h3>
                <p
                  className="designation"
                  style={{ color: colorDesignation, fontSize: fontSizeDesignation }}
                >
                  {activeTestimonial.designation}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="arrow-buttons">
            <button
              className="arrow-button prev-button"
              onClick={handlePrev}
              style={{
                backgroundColor: hoverPrev ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} color={colorArrowFg} />
            </button>
            <button
              className="arrow-button next-button"
              onClick={handleNext}
              style={{
                backgroundColor: hoverNext ? colorArrowHoverBg : colorArrowBg,
              }}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} color={colorArrowFg} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        .testimonial-grid {
          display: grid;
          gap: 3rem;
          grid-template-columns: 1fr;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: clamp(280px, 40vh, 420px);
          perspective: 1200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .testimonial-image {
          position: absolute;
          width: 80%;
          max-width: 320px;
          height: 100%;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 15px 45px rgba(8, 60, 117, 0.08);
          border: 1px solid rgba(8, 60, 117, 0.08);
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-h-[280px];
        }
        .name {
          font-weight: 900;
          letter-spacing: -0.01em;
          margin-bottom: 0.2rem;
        }
        .designation {
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .quote {
          font-weight: 500;
          line-height: 1.7;
          color: rgba(8, 60, 117, 0.85);
        }
        .arrow-buttons {
          display: flex;
          gap: 1rem;
          padding-top: 2rem;
        }
        .arrow-button {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(.21,.47,.32,.98);
          border: none;
          box-shadow: 0 8px 24px rgba(8, 60, 117, 0.05);
        }
        .arrow-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(241, 136, 5, 0.2);
        }
        .word {
          display: inline-block;
        }
        @media (min-width: 992px) {
          .testimonial-grid {
            grid-template-columns: 4.5fr 5.5fr;
            gap: 5rem;
            align-items: center;
          }
          .image-container {
            height: 400px;
          }
          .testimonial-image {
            width: 100%;
            height: 100%;
          }
          .arrow-buttons {
            padding-top: 0;
          }
        }
      `}</style>
    </div>
  );
};

const yTestimonials: Testimonial[] = [
  {
    quote:
      "Yoke's custom stainless steel seed sortation conveyors exceeded our expectations. The precision engineering has eliminated seed damage entirely.",
    name: "Dr. Robert Vance",
    designation: "Director of Seed Operations",
    src: "https://images.unsplash.com/photo-1574319917083-a89753e3002c?q=80&w=600&auto=format&fit=crop",
    logoUrl: "https://assets.corteva.com/is/image/Corteva/LOG-Corteva_Logo-Corporate-Global-V1?ts=1717697978079",
  },
  {
    quote:
      "Their FDA-grade conveyor systems are stellar. Wash-down and maintenance times have dropped by 40%, keeping our packaging line highly sterile and efficient.",
    name: "Marie Dubois",
    designation: "Plant Logistics Manager",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    logoUrl: "https://www.hmclause.com/uploads/logo_desktop_e79cf93ed9.svg",
  },
  {
    quote:
      "Reliability is key in chemical batching. Yoke's motorized rollers have operated 24/7 with zero unplanned downtime in over two years.",
    name: "K. Raghunath",
    designation: "Operations Head (Jeedimetla Plant)",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    logoUrl: "https://www.bayer.com/themes/custom/bayer_cpa/logo.svg",
  },
  {
    quote:
      "For bulk seed handling, Yoke's heavy-duty loading conveyors have dramatically reduced trailer loading times and improved worker safety at our major hubs.",
    name: "Sarah Jenkins",
    designation: "Supply Chain Director",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEuQ6aYemN2MpuTfYqo7MO1jdDmOYkcODTHVRM0pojHA&s=10",
  },
];

export const Testimonials = () => (
  <section className="relative w-full overflow-hidden bg-white py-24 font-sans text-[#083C75] border-t border-[#083C75]/10">
    {/* Blueprint grid backing */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(#083C75 1px, transparent 1px), linear-gradient(to right, #083C75 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    <div className="relative z-10 mx-auto max-w-[1440px] px-[clamp(1.5rem,4vw,3.5rem)]">
      {/* Header */}
      <div className="mb-16 flex flex-col items-center text-center">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-[#F18805]" />
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#F18805]">
            Client Testimonials
          </span>
          <span className="h-px w-8 bg-[#F18805]" />
        </div>
        <h2 className="text-[clamp(2.2rem,4vw,3.25rem)] font-black leading-[1.08] tracking-tight">
          What industry leaders <span className="text-[#F18805]">say</span> about Yoke.
        </h2>
      </div>

      <CircularTestimonials
        testimonials={yTestimonials}
        autoplay={true}
        colors={{
          name: "#083C75",
          designation: "#F18805",
          testimony: "#083C75/85",
          arrowBackground: "#083C75",
          arrowForeground: "#ffffff",
          arrowHoverBackground: "#F18805",
        }}
        fontSizes={{
          name: "22px",
          designation: "11px",
          quote: "18px",
        }}
      />
    </div>
  </section>
);

export default Testimonials;
