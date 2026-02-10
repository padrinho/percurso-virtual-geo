import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://static.wixstatic.com/media/bdb8d7_789caea726d849a09791a5ea4dde441c~mv2.jpg/v1/fill/w_1920,h_525,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bdb8d7_789caea726d849a09791a5ea4dde441c~mv2.jpg"
          alt="Costa Sintra-Cascais"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a3a]/70 via-[#1a2a3a]/50 to-[#1a2a3a]" />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 max-w-3xl mx-auto text-center px-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Bem vindos
          </h1>
          <p className="text-[#c8d6e5] text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Ao longo da orla costeira entre o Estoril e a Praia da Adraga/Rodízio observa-se um conjunto excecional de rochas sedimentares, ígneas e metamórficas, bem como formas de relevo e fósseis que permitem reconstruir a geo-história da região de Sintra–Cascais.
          </p>
          <p className="text-[#a0b4c8] text-sm md:text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            O objetivo desta página é elaborar um percurso virtual de locais de interesse geológico numa região e sua interpretação, aplicando os conteúdos de Geo-história da Terra e de formação e alteração de rochas. Através da observação e descrição de oito geossítios costeiros, procura-se explicar, de forma simplificada, como se formaram os principais vestígios geológicos e evidenciar a importância da sua conservação.
          </p>
          <Link
            to={createPageUrl("LocaisDeInteresse")}
            className="inline-flex items-center gap-3 bg-[#5b9bd5] hover:bg-[#4a8ac4] text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#5b9bd5]/20"
          >
            Começa agora!
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#243444]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-8 text-[#5b9bd5] uppercase">
              Sobre Este Projeto
            </h2>
            <p className="text-[#c8d6e5] text-base md:text-lg leading-relaxed mb-6">
              Este trabalho foi elaborado no âmbito das Unidades Curriculares de Laboratório de Ciências da Terra e Investigação em Contextos Educativos (2025/2026).
            </p>
            <p className="text-[#a0b4c8] text-sm md:text-base">
              Docentes: Marina Reis, José Romão e Rui Fonseca.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Referências Section */}
      <section className="py-20 bg-[#1a2a3a]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Referências</h3>
            <div className="space-y-4 text-sm text-[#a0b4c8] leading-relaxed">
              <p>Ambiente Cascais. (s.d.). <em>Praia do Guincho.</em> <a href="https://ambiente.cascais.pt/en/node/671" target="_blank" rel="noopener noreferrer" className="text-[#5b9bd5] hover:underline">https://ambiente.cascais.pt/en/node/671</a></p>
              <p>Antunes, A., Ferreira, F., & Francisco, P. (1997). <em>Parede: As pedras e o mar.</em> Grafilinha, Lda., 39</p>
              <p>Casa do Valle. (s.d.). <em>Pegadas de dinossauros.</em> <a href="https://casadovalle.com/category/dinosaurs-footprints/" target="_blank" rel="noopener noreferrer" className="text-[#5b9bd5] hover:underline">https://casadovalle.com/category/dinosaurs-footprints/</a></p>
              <p>Geoportal – Energia e Geologia. (2020–2025). <em>Inventário nacional de património geológico.</em> <a href="https://geoportal.lneg.pt/pt/bds/geossitios/" target="_blank" rel="noopener noreferrer" className="text-[#5b9bd5] hover:underline">https://geoportal.lneg.pt/pt/bds/geossitios/</a></p>
              <p>Natural.pt. (2025). <em>Grutas da Adraga e Pedra de Alvidrar.</em> <a href="https://natural.pt/protected-areas/parque-natural-sintra-cascais/geosites/grutas-da-adraga-e-pedra-de-alvidrar?locale=pt" target="_blank" rel="noopener noreferrer" className="text-[#5b9bd5] hover:underline">https://natural.pt</a></p>
              <p>Ribeiro, J., & Salgueiro, R. (2019). Estudo geológico-geotécnico da arriba da Praia das Avencas, Parede. <em>Geonovas.</em>, 32(2), 75–92.</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}