import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  // Previous 6 projects
  {
    id: 1,
    title: "SALIENCE LABS",
    image: "https://picsum.photos/id/1015/800/520",
    tags: ["BRAND IDENTITY", "PITCH DECK", "STRATEGY", "WEBSITE"],
  },
  {
    id: 2,
    title: "MEDALLIA EXPERIENCE",
    image: "https://picsum.photos/id/106/800/520",
    tags: ["CONFERENCE", "EXECUTIVE KEYNOTE", "PRODUCT LAUNCH"],
  },
  {
    id: 3,
    title: "SOMA ENERGY",
    image: "https://picsum.photos/id/201/800/520",
    tags: ["BRAND IDENTITY", "PITCH DECK", "STRATEGY"],
  },
  {
    id: 4,
    title: "HERITAGE",
    image: "https://picsum.photos/id/237/800/520",
    tags: ["PITCH DECK"],
  },
  {
    id: 5,
    title: "VISE",
    image: "https://picsum.photos/id/870/800/520",
    tags: ["AGENCY", "COMPANY PRESENTATION"],
  },
  {
    id: 6,
    title: "SOFTSTART",
    image: "https://picsum.photos/id/180/800/520",
    tags: ["BRANDED TEMPLATE", "SALES DECK"],
  },
  // New Two Boxes
  {
    id: 7,
    title: "FYDE",
    image: "https://picsum.photos/id/64/800/520", 
    tags: ["AUDIT", "COPYWRITING", "SALES DECK", "SLIDES DESIGN"],
  },
  {
    id: 8,
    title: "ALL THINGS GO",
    image: "https://picsum.photos/id/1016/800/520",
    tags: ["BRAND IDENTITY", "PITCH DECK"],
  },
];

export default function FeaturedProjects() {
  const [hoveredId, setHoveredId] = useState(null);
  const [hoveredTag, setHoveredTag] = useState(null);

  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl md:text-7xl font-bold tracking-tighter mb-12 text-black">
          Featured projects
        </h2>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col">
              {/* Image Card */}
              <motion.div
                onHoverStart={() => setHoveredId(project.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="group relative overflow-hidden rounded-3xl aspect-[16/10] cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90" />

                {/* Big Title Animation */}
                <div className="absolute inset-0 flex items-center justify-center px-6 text-center z-10">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                    className="text-[#C8E64C] text-5xl md:text-6xl lg:text-[4.8rem] font-black tracking-[-3px] leading-none"
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
                        transition={{
                          duration: 0.4,
                          delay: index * 0.025,
                        }}
                        className="inline-block"
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </motion.h3>
                </div>
              </motion.div>

              {/* Tags BELOW the box only - with hover effect */}
              <div className="flex flex-wrap gap-3 mt-5">
                {project.tags.map((tag, i) => (
                  <motion.div
                    key={i}
                    onHoverStart={() => setHoveredTag(`${project.id}-${i}`)}
                    onHoverEnd={() => setHoveredTag(null)}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className={`px-5 py-2.5 border text-xs font-medium rounded-full tracking-wide cursor-pointer transition-all duration-300 uppercase ${
                      hoveredTag === `${project.id}-${i}`
                        ? "bg-black text-white border-black"
                        : "bg-transparent text-black border-black/80"
                    }`}
                  >
                    {tag}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}