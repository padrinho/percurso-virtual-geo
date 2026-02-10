import React from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, Star, Loader2 } from "lucide-react";
import LevelSection from "../components/geossitios/LevelSection";
import ImageGallery from "../components/geossitios/ImageGallery";

export default function GeossitioDetalhe() {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get("slug");

  const { data: sites, isLoading } = useQuery({
    queryKey: ["geossitio", slug],
    queryFn: () => base44.entities.Geossitio.filter({ slug }),
    enabled: !!slug,
  });

  const site = sites?.[0];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-[#5b9bd5]" />
      </div>
    );
  }

  if (!site) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-[#a0b4c8]">Geossítio não encontrado.</p>
        <Link to={createPageUrl("LocaisDeInteresse")} className="text-[#5b9bd5] hover:underline">
          ← Voltar aos Locais de Interesse
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Banner */}
      {site.hero_image && (
        <section className="relative h-[50vh] min-h-[350px]">
          <img src={site.hero_image} alt={site.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2a3a] via-[#1a2a3a]/40 to-transparent" />
        </section>
      )}

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 -mt-20 relative z-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to={createPageUrl("LocaisDeInteresse")}
            className="inline-flex items-center gap-2 text-[#5b9bd5] text-sm mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{site.title}</h1>
          <p className="text-[#c8d6e5] text-base md:text-lg leading-relaxed mb-8">
            {site.short_description}
          </p>

          {/* Meta info */}
          <div className="flex flex-wrap gap-4 mb-10">
            {site.location && (
              <div className="flex items-center gap-2 bg-[#243444] rounded-lg px-4 py-2 text-sm">
                <MapPin className="w-4 h-4 text-[#5b9bd5]" />
                <span className="text-[#c8d6e5]">{site.location}</span>
              </div>
            )}
            {site.epoch && (
              <div className="flex items-center gap-2 bg-[#243444] rounded-lg px-4 py-2 text-sm">
                <Clock className="w-4 h-4 text-[#5b9bd5]" />
                <span className="text-[#c8d6e5]">{site.epoch}</span>
              </div>
            )}
            {site.value && (
              <div className="flex items-center gap-2 bg-[#243444] rounded-lg px-4 py-2 text-sm">
                <Star className="w-4 h-4 text-[#5b9bd5]" />
                <span className="text-[#c8d6e5]">{site.value}</span>
              </div>
            )}
          </div>

          {/* Knowledge Levels */}
          <div className="space-y-4 mb-12">
            <LevelSection
              level="basic"
              title={site.level_basic_title}
              text={site.level_basic_text}
              didatica={site.level_basic_didatica}
            />
            <LevelSection
              level="intermediate"
              title={site.level_intermediate_title}
              text={site.level_intermediate_text}
              didatica={site.level_intermediate_didatica}
            />
            <LevelSection
              level="advanced"
              title={site.level_advanced_title}
              text={site.level_advanced_text}
              didatica={site.level_advanced_didatica}
            />
          </div>

          {/* Curiosidade */}
          {site.curiosidade && (
            <div className="bg-[#5b9bd5]/10 border border-[#5b9bd5]/20 rounded-xl p-6 mb-12">
              <p className="text-[#5b9bd5] font-semibold mb-2">⭐ Curiosidade</p>
              <p className="text-[#c8d6e5] text-sm leading-relaxed">{site.curiosidade}</p>
            </div>
          )}

          {/* Gallery */}
          {site.gallery_images?.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Galeria</h2>
              <ImageGallery images={site.gallery_images} />
            </div>
          )}
        </motion.div>
      </section>
    </div>
  );
}