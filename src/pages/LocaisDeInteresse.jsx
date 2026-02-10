import React from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { motion } from "framer-motion";
import GeossitioCard from "../components/geossitios/GeossitioCard";
import { Loader2 } from "lucide-react";

export default function LocaisDeInteresse() {
  const { data: sites, isLoading } = useQuery({
    queryKey: ["geossitios"],
    queryFn: () => base44.entities.Geossitio.list("order", 50),
    initialData: [],
  });

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#243444] to-[#1a2a3a]" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-4xl md:text-6xl font-bold tracking-tight text-center px-6"
        >
          Locais de Interesse Geológico
        </motion.h1>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-[#5b9bd5]" />
          </div>
        ) : sites.length === 0 ? (
          <p className="text-center text-[#a0b4c8] py-20">Nenhum geossítio disponível.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sites.map((site, i) => (
              <GeossitioCard key={site.id} site={site} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}