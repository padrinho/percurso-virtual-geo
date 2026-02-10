import React from "react";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <div>
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#243444] to-[#1a2a3a]" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-4xl md:text-6xl font-bold tracking-tight text-center px-6"
        >
          Sobre
        </motion.h1>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="bg-[#243444] rounded-2xl p-8 border border-white/5">
            <h2 className="text-2xl font-bold mb-4 text-[#5b9bd5]">O Projeto</h2>
            <p className="text-[#c8d6e5] leading-relaxed">
              Este trabalho foi elaborado no âmbito das Unidades Curriculares de Laboratório de Ciências da Terra e Investigação em Contextos Educativos (2025/2026).
            </p>
            <p className="text-[#a0b4c8] mt-4">
              Docentes: Marina Reis, José Romão e Rui Fonseca.
            </p>
          </div>

          <div className="bg-[#243444] rounded-2xl p-8 border border-white/5">
            <h2 className="text-2xl font-bold mb-4 text-[#5b9bd5]">Objetivo</h2>
            <p className="text-[#c8d6e5] leading-relaxed">
              O objetivo desta página é elaborar um percurso virtual de locais de interesse geológico na região de Sintra–Cascais, aplicando os conteúdos de Geo-história da Terra e de formação e alteração de rochas. Através da observação e descrição de oito geossítios costeiros, procura-se explicar, de forma simplificada, como se formaram os principais vestígios geológicos e evidenciar a importância da sua conservação.
            </p>
          </div>

          <div className="bg-[#243444] rounded-2xl p-8 border border-white/5">
            <h2 className="text-2xl font-bold mb-6 text-[#5b9bd5]">Referências</h2>
            <div className="space-y-3 text-sm text-[#a0b4c8] leading-relaxed">
              <p>Ambiente Cascais. (s.d.). <em>Praia do Guincho.</em> <a href="https://ambiente.cascais.pt/en/node/671" target="_blank" rel="noopener noreferrer" className="text-[#5b9bd5] hover:underline">https://ambiente.cascais.pt/en/node/671</a></p>
              <p>Antunes, A., Ferreira, F., & Francisco, P. (1997). <em>Parede: As pedras e o mar.</em> Grafilinha, Lda., 39</p>
              <p>Casa do Valle. (s.d.). <em>Pegadas de dinossauros.</em> <a href="https://casadovalle.com/category/dinosaurs-footprints/" target="_blank" rel="noopener noreferrer" className="text-[#5b9bd5] hover:underline">https://casadovalle.com/category/dinosaurs-footprints/</a></p>
              <p>Geoportal – Energia e Geologia. (2020–2025). <em>Inventário nacional de património geológico.</em> <a href="https://geoportal.lneg.pt/pt/bds/geossitios/" target="_blank" rel="noopener noreferrer" className="text-[#5b9bd5] hover:underline">https://geoportal.lneg.pt/pt/bds/geossitios/</a></p>
              <p>Natural.pt. (2025). <em>Grutas da Adraga e Pedra de Alvidrar.</em> <a href="https://natural.pt/protected-areas/parque-natural-sintra-cascais/geosites/grutas-da-adraga-e-pedra-de-alvidrar?locale=pt" target="_blank" rel="noopener noreferrer" className="text-[#5b9bd5] hover:underline">https://natural.pt</a></p>
              <p>Ribeiro, J., & Salgueiro, R. (2019). Estudo geológico-geotécnico da arriba da Praia das Avencas, Parede. <em>Geonovas.</em>, 32(2), 75–92.</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}