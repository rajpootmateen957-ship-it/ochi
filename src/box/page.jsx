import { motion } from "framer-motion";
import { useState } from "react";
import ochi1 from "../../src/assets/ochi-1.jpg";
import ochi2 from "../../src/assets/ochi-2.jpg";
import ochi3 from "../../src/assets/ochi-3.jpg";
import ochi4 from "../../src/assets/ochi-4.png";
import ochi5 from "../../src/assets/ochi-5.png";
import ochi6 from "../../src/assets/ochi-6.png";
import ochi7 from "../../src/assets/ochi-7.png";
import ochi8 from "../../src/assets/ochi-8.png";

const projects = [
  {
    id: 1,
    title: "SALIENCE LABS",
    image: ochi1,
    tags: ["BRAND IDENTITY", "PITCH DECK", "STRATEGY", "WEBSITE"],
  },
  {
    id: 2,
    title: "MEDALLIA EXPERIENCE",
    image: ochi2,
    tags: ["CONFERENCE", "EXECUTIVE KEYNOTE", "PRODUCT LAUNCH"],
  },
  {
    id: 3,
    title: "SOMA ENERGY",
    image: ochi3,
    tags: ["BRAND IDENTITY", "PITCH DECK", "STRATEGY"],
  },
  {
    id: 4,
    title: "HERITAGE",
    image: ochi4,
    tags: ["PITCH DECK"],
  },
  {
    id: 5,
    title: "VISE",
    image: ochi5,
    tags: ["AGENCY", "COMPANY PRESENTATION"],
  },
  {
    id: 6,
    title: "SOFTSTART",
    image: ochi6,
    tags: ["BRANDED TEMPLATE", "SALES DECK"],
  },
  {
    id: 7,
    title: "FYDE",
    image: ochi7,
    tags: ["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"],
  },
  {
    id: 8,
    title: "ALL THINGS GO",
    image: ochi8,
    tags: ["BRAND IDENTITY", "PITCH DECK"],
  },
];

export default function FeaturedProjects() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-12 text-black">
          Featured projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col">

              {/* Image Card */}
              <motion.div
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group relative overflow-hidden rounded-2xl w-full aspect-[16/10] cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />

                {/* Hover Title */}
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center z-10">
                  <motion.h3
                    className="text-[#C8E64C] text-4xl sm:text-5xl md:text-[4rem] font-black tracking-[-2px] leading-none"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {project.title.split("").map((letter, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 70 }}
                        animate={{
                          opacity: hoveredId === project.id ? 1 : 0,
                          y: hoveredId === project.id ? 0 : 70,
                        }}
                        transition={{ duration: 0.4, delay: index * 0.025 }}
                        className="inline-block"
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </motion.h3>
                </div>
              </motion.div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mt-6">
                {project.tags.map((tag, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="px-6 py-2.5 rounded-full border border-black/25 bg-transparent text-black text-[13px] font-medium tracking-widest uppercase hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer"
                  >
                    {tag}
                  </motion.button>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );   
}