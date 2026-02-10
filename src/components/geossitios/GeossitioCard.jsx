import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../../utils";
import { motion } from "framer-motion";

export default function GeossitioCard({ site, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link 
        to={createPageUrl(`GeossitioDetalhe?slug=${site.slug}`)}
        className="group block relative overflow-hidden rounded-2xl h-[420px]"
      >
        <img
          src={site.card_image || site.hero_image}
          alt={site.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a141e]/95 via-[#0a141e]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
            {site.title}
          </h3>
          <p className="text-[#a0b4c8] text-sm leading-relaxed line-clamp-3 mb-4">
            {site.short_description}
          </p>
          <span className="inline-flex items-center gap-2 text-[#5b9bd5] text-sm font-medium group-hover:gap-3 transition-all">
            Saber Mais 
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}