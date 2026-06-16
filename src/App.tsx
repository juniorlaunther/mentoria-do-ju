/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Instagram, 
  Play, 
  Check, 
  ChevronDown, 
  MessageCircle, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Camera, 
  Briefcase,
  Star,
  Users,
  Award,
  Zap
} from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/5519981643970?text=Ol%C3%A1%2C%20Tenho%20interesse%20na%20mentoria%20do%20Ju%21";

// ----------------------------------------------------
// SHARED COMPONENTS
// ----------------------------------------------------

const WhatsAppButton = ({ className = "", children }: { className?: string, children: React.ReactNode }) => (
  <a 
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-4 rounded-full font-display font-semibold transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap animate-cta-pulse ${className}`}
  >
    {children}
  </a>
);

const SectionHeading = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className={`font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-white ${className}`}
  >
    {children}
  </motion.h2>
);

const AbstractPhone = () => (
  <div className="relative w-full max-w-[320px] mx-auto aspect-[9/19] rounded-[2.5rem] border-[6px] border-zinc-900 bg-zinc-950 shadow-2xl overflow-hidden ring-1 ring-white/10 z-10 group">
    {/* Glowing background inside phone */}
    <div className="absolute inset-0 bg-gradient-to-br from-ig-purple/30 via-transparent to-ig-orange/30 blur-2xl" />
    
    <div className="relative z-10 flex flex-col h-full">
      {/* Visual Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&auto=format&fit=crop" 
          alt="Instagram aesthetic" 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 blend-luminosity mix-blend-luminosity animate-scale-pulse md:animate-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
      </div>

      <div className="relative z-10 p-6 flex flex-col h-full">
        {/* Phone Header (Profile) */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-ig-yellow via-ig-pink to-ig-purple p-[2px] animate-spin-slow" style={{ animationDuration: '8s' }}>
            <div className="w-full h-full bg-zinc-900 rounded-full border-[3px] border-zinc-950 overflow-hidden flex items-center justify-center relative">
              <Instagram size={20} className="text-ig-pink absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
          <div className="space-y-3 flex-1">
            <div className="w-24 h-2.5 bg-white/40 rounded-full backdrop-blur-md" />
            <div className="w-16 h-2 bg-white/20 rounded-full backdrop-blur-md" />
          </div>
        </div>
        
        {/* Content Area */}
        <div className="flex-1 space-y-4 flex flex-col justify-end pb-8">
          <div className="w-full aspect-[4/5] bg-gradient-to-b from-white/10 to-transparent rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden group/video shadow-2xl backdrop-blur-sm">
             <img 
               src="https://images.unsplash.com/photo-1622323758558-8d151ee6de99?q=80&w=600&auto=format&fit=crop" 
               alt="Video content" 
               className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/video:scale-105 transition-transform duration-700 animate-scale-pulse md:animate-none"
             />
             <div className="absolute inset-0 bg-ig-pink/20 mix-blend-overlay opacity-0 group-hover/video:opacity-100 transition-opacity duration-500 animate-glow-pulse md:animate-none" />
             <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center relative z-10 border border-white/10">
               <Play className="text-white ml-1" size={24} strokeWidth={1.5} fill="currentColor" />
             </div>
          </div>
          <div className="w-3/4 h-2 bg-white/30 rounded-full" />
          <div className="w-1/2 h-2 bg-white/20 rounded-full" />
        </div>

        {/* Mock Action Bar */}
        <div className="h-12 mt-auto rounded-full bg-gradient-to-r from-ig-magenta to-ig-orange flex items-center justify-center shadow-[0_0_30px_rgba(225,48,108,0.3)] border border-white/10">
          <div className="w-1/3 h-1.5 bg-white/40 rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

const FlowingDeliverable = ({ title, desc, icon: Icon, delay = 0, colorClass = "from-ig-pink to-ig-orange", iconColor = "text-ig-pink" }: { title: string, desc: string, icon: any, delay?: number, colorClass?: string, iconColor?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className="flex flex-col sm:flex-row gap-3 sm:gap-6 md:gap-8 items-start py-6 md:py-10 border-b border-white/5 group"
  >
    <div className="flex items-center gap-4 sm:gap-0 w-full sm:w-auto">
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 relative overflow-hidden group-hover:border-white/20 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] animate-float md:animate-none">
        <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-10 group-hover:opacity-40 transition-opacity duration-500 animate-glow-pulse md:animate-none`} />
        <Icon size={22} strokeWidth={1.5} className={`relative z-10 ${iconColor} group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 md:w-[24px] md:h-[24px] animate-scale-pulse md:animate-none`} />
      </div>
      <h3 className="sm:hidden font-display text-[1.2rem] font-medium tracking-tight text-white leading-tight flex-1">{title}</h3>
    </div>
    <div className="space-y-2 md:space-y-3 pt-0 sm:pt-1 md:pt-2">
      <h3 className="hidden sm:block font-display text-[1.35rem] md:text-3xl font-medium tracking-tight text-white leading-snug">{title}</h3>
      <p className="text-[0.95rem] md:text-lg text-zinc-400 leading-relaxed font-sans max-w-2xl">{desc}</p>
    </div>
  </motion.div>
);

const TestimonialItem = ({ text, name, handle }: { text: string, name: string, handle: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className="flex flex-col gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors h-full"
  >
    <div className="flex gap-1 text-ig-yellow">
      <Star size={18} fill="currentColor" />
      <Star size={18} fill="currentColor" />
      <Star size={18} fill="currentColor" />
      <Star size={18} fill="currentColor" />
      <Star size={18} fill="currentColor" />
    </div>
    <p className="text-lg text-zinc-300 font-sans italic leading-relaxed flex-1">"{text}"</p>
    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-ig-yellow via-ig-pink to-ig-purple p-[2px] shrink-0">
        <div className="w-full h-full bg-zinc-900 rounded-full flex items-center justify-center font-display font-medium text-white text-lg">
          {name.charAt(0)}
        </div>
      </div>
      <div>
        <p className="font-medium text-white font-display leading-tight">{name}</p>
        <p className="text-sm text-zinc-500 font-sans">{handle}</p>
      </div>
    </div>
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left text-lg md:text-xl font-display font-medium text-zinc-200 hover:text-white transition-colors"
      >
        <span>{question}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-ig-pink ml-4"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-zinc-400 font-sans leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ----------------------------------------------------
// MAIN APPLICATION
// ----------------------------------------------------

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-ig-pink/30 selection:text-white relative z-0">
      
      {/* 
        AMBIENT BACKGROUNDS 
        We use abstract fixed blobs to give the whole page a unified, 
        flowing look instead of blocky sections.
      */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-ig-purple/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-[40%] right-[-20%] w-[60%] h-[60%] bg-ig-orange/5 rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-ig-pink/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-16 md:pt-28 md:pb-28 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">
          
          <div className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <Sparkles size={16} className="text-ig-pink" />
              <span className="text-sm font-medium tracking-wide text-zinc-300 uppercase">Mentoria do JU para Criadores</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-[2.75rem] leading-[1.05] sm:text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tighter"
            >
              Sua presença digital, <br className="hidden md:block" />
              <span className="text-gradient">levada a sério.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[1.1rem] md:text-2xl text-zinc-400 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Uma chamada estratégica de 1 hora para organizar seu perfil, evoluir sua estética e preparar seu Instagram para marcas e oportunidades reais.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <WhatsAppButton className="bg-gradient-to-r from-ig-magenta to-ig-orange text-white w-full sm:w-auto text-[0.95rem] sm:text-[1.05rem] md:text-lg shadow-[0_0_40px_rgba(225,48,108,0.3)]">
                Quero agendar minha mentoria
                <ArrowRight size={18} className="md:w-5 md:h-5" />
              </WhatsAppButton>
            </motion.div>
          </div>

          <div className="flex-1 w-full relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute inset-0 bg-gradient-to-tr from-ig-purple via-ig-pink to-ig-orange blur-[100px] opacity-20 rounded-full"
            />
            <AbstractPhone />
          </div>

        </div>
      </section>

      {/* THE PROBLEM / EMPATHY SECTION */}
      <section className="py-16 md:py-32 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="flex-1 w-[calc(100%+2rem)] -mx-4 md:w-full md:mx-0 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-none md:rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-[4/3] w-full border-y md:border border-white/10 shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop" 
                alt="Criador pensando na estratégia"
                className="w-full h-full object-cover mix-blend-luminosity opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-ig-purple/40 to-transparent mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10 w-max">
                   <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                     <TrendingUp size={20} className="rotate-180" />
                   </div>
                   <div>
                     <p className="text-sm font-medium text-white">Engajamento baixo</p>
                     <p className="text-xs text-zinc-400">Público não retém</p>
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 space-y-10 text-center lg:text-left z-10">
            <SectionHeading className="!leading-tight">
              Você cria, você posta, <br className="hidden md:block" /> 
              mas <span className="italic text-zinc-500 font-light">sente que falta algo?</span>
            </SectionHeading>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[1.1rem] md:text-2xl text-zinc-400 leading-relaxed font-light space-y-6"
            >
              <p>
                Muitos criadores pequenos travam não por falta de talento, mas por falta de direção. A bio não transmite sua essência, a estética do feed parece confusa, e as marcas simplesmente passam direto.
              </p>
              <p className="text-zinc-200 font-medium">
                A Mentoria do JU foi desenhada para virar essa chave. Sem promessas vazias. Sem fórmulas mágicas. 
                Apenas um olhar profissional apontando o que ajustar.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-2 md:pt-4 flex justify-center lg:justify-start"
            >
              <WhatsAppButton className="bg-white/5 hover:bg-white/10 text-white border border-white/10 text-[0.95rem] sm:text-[1.05rem] md:text-lg w-full sm:w-auto">
                Me ajude a organizar isso
                <ArrowRight size={18} className="md:w-5 md:h-5" />
              </WhatsAppButton>
            </motion.div>
          </div>

        </div>
      </section>

      {/* GROWTH & CONSISTENCY SECTION (GIF AREA) */}
      <section className="py-16 md:py-28 px-4 md:px-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-center gap-12 border-y border-white/5 bg-white/[0.01]">
        {/* Decorative lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-full h-full max-w-4xl bg-ig-pink/5 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10 w-full">
          <div className="flex-1 w-full space-y-6 md:space-y-8 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ig-pink/20 bg-ig-pink/10 text-ig-pink"
            >
              <Zap size={16} />
              <span className="text-sm font-medium tracking-wide uppercase">Consistência e Resultados</span>
            </motion.div>

            <SectionHeading className="!text-4xl md:!text-5xl !leading-tight">
              Crescimento não é sorte. <br />
              <span className="text-gradient">É constância alinhada.</span>
            </SectionHeading>
            
            <div className="text-[1.1rem] md:text-lg text-zinc-400 font-light space-y-4 md:space-y-6 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                Quando você organiza sua vitrine, o algoritmo e o público respondem. Não prometo um atalho irreal, porque números rápidos somem mais rápido ainda.
              </p>
              <p>
                A mentoria te dá estrutura: clareza do que postar e como manter a retenção. O resultado disso? Uma atração orgânica real, contínua e baseada em qualidade.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-2 flex justify-center lg:justify-start"
            >
              <WhatsAppButton className="bg-white/10 hover:bg-white/20 text-white w-full sm:w-auto text-[0.95rem] sm:text-[1.05rem] md:text-lg border border-white/10 backdrop-blur-md">
                Quero estruturar meu perfil
                <TrendingUp size={18} className="md:w-5 md:h-5" />
              </WhatsAppButton>
            </motion.div>
          </div>
          
          <div className="flex-1 w-[calc(100%+2rem)] -mx-4 md:w-full md:mx-0 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md aspect-[4/5] md:rounded-[2.5rem] overflow-hidden border-y md:border border-white/10 bg-zinc-950 shadow-[0_0_50px_rgba(0,0,0,0.5)] group flex flex-col items-center justify-center"
            >
              {/* Replace this div with the actual GIF later */}
              <img 
                 src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop" 
                 alt="Resultados e notificações" 
                 className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              <div className="relative z-10 flex flex-col items-center text-center mt-auto pb-10 p-8">
                 <div className="w-16 h-16 rounded-full bg-ig-pink flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(225,48,108,0.6)] animate-bounce" style={{ animationDuration: '2s' }}>
                    <Users className="text-white fill-white" size={28} />
                 </div>
                 <h3 className="text-white font-display text-4xl font-medium mb-2">+ Seguidores</h3>
                 <p className="text-zinc-300 text-sm max-w-[250px] leading-relaxed">Crescimento orgânico atraído por um posicionamento claro e estética profissional.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES OVERVIEW */}
      <section className="py-16 md:py-24 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          <div className="flex-1 lg:sticky lg:top-32 h-max">
            <div className="mb-8 md:mb-12">
              <span className="text-ig-orange font-medium tracking-wider uppercase text-sm mb-4 block">O que trabalhamos</span>
              <SectionHeading className="!text-4xl md:!text-5xl">1 Hora de Imersão no Seu Perfil</SectionHeading>
              <p className="text-[1.1rem] md:text-lg text-zinc-400 mt-4 md:mt-6 max-w-md font-light leading-relaxed">
                Tudo o que precisamos ajustar para que a sua presença digital se torne irresistível para seu público e para as marcas.
              </p>
            </div>
            
            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl hidden lg:block"
            >
               <img 
                 src="https://images.unsplash.com/photo-1611162618758-2a29a995354b?q=80&w=800&auto=format&fit=crop" 
                 alt="Criação de Conteúdo"
                 className="w-full h-full object-cover mix-blend-luminosity opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </motion.div>
          </div>

          <div className="flex-1 flex flex-col pt-0 lg:pt-8">
            <FlowingDeliverable 
              title="Raio-X do Perfil e Primeira Impressão"
              desc="Sua bio, foto e destaques são a vitrine da sua marca. Vamos alinhar para que qualquer nova pessoa — ou marca — entenda de cara quem você é e seu nível de profissionalismo."
              icon={Target}
              delay={0}
              colorClass="from-ig-pink to-ig-purple"
              iconColor="text-ig-pink"
            />
            <FlowingDeliverable 
              title="Estética, Posicionamento e Linguagem"
              desc="Analisamos seus conteúdos já postados (Feed e Reels). Identificamos seus pontos fortes, o que trava seu crescimento e onde a sua identidade visual pode se destacar mais."
              icon={Camera}
              delay={0.1}
              colorClass="from-ig-purple to-ig-magenta"
              iconColor="text-ig-purple"
            />
            <FlowingDeliverable 
              title="Visão Comercial e Mercado de Influência"
              desc="Como se apresentar para marcas? Como funcionam as parcerias em 2026? Aprenda a enxergar seu conteúdo como negócio e deixe o perfil pronto para atrair parcerias reais."
              icon={Briefcase}
              delay={0.2}
              colorClass="from-ig-magenta to-ig-orange"
              iconColor="text-ig-magenta"
            />
            <FlowingDeliverable 
              title="Plano Prático de Ação"
              desc="Ninguém sai da mentoria com dúvidas. Você deixará a chamada com clareza exata do seu potencial, ideias de formatos de Reels e os próximos passos para executar imediatamente."
              icon={TrendingUp}
              delay={0.3}
              colorClass="from-ig-orange to-ig-yellow"
              iconColor="text-ig-orange"
            />
          </div>
        </div>
      </section>

      {/* BRANDS / PARTNERSHIPS SECTION */}
      <section className="py-16 md:py-32 px-4 md:px-8 border-y border-white/5 bg-gradient-to-b from-transparent to-white/[0.02] relative overflow-hidden">
        {/* Glow */}
        <div className="absolute right-0 top-1/2 w-[150%] md:w-[500px] h-[500px] bg-ig-purple/10 blur-[100px] md:blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">
          
          <div className="flex-1 w-full space-y-8 md:space-y-10 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-ig-purple/30 bg-ig-purple/10 text-ig-purple"
            >
              <Award size={16} />
              <span className="text-sm font-medium tracking-wide uppercase text-zinc-300">Monetização</span>
            </motion.div>

            <SectionHeading className="!leading-tight">
              O Próximo Nível: <br className="hidden lg:block"/>
              <span className="text-gradient hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">As Marcas</span>
            </SectionHeading>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[1.1rem] md:text-2xl text-zinc-400 leading-relaxed font-light space-y-6"
            >
              <p>
                Marcas não compram apenas números. Elas buscam criadores que entendem de comunidade, de estética e de entrega profissional.
              </p>
              <p className="text-zinc-200 font-medium">
                A Mentoria prepara o seu perfil para ser visto como um negócio. Vamos arrumar a casa, refinar sua vitrine e mostrar como se apresentar para que as marcas desejem associar o nome delas ao seu.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-2 md:pt-4 flex justify-center lg:justify-start"
            >
              <WhatsAppButton className="bg-gradient-to-r from-ig-purple to-ig-pink text-white w-full sm:w-auto text-[0.95rem] sm:text-[1.05rem] md:text-lg shadow-[0_0_40px_rgba(131,58,180,0.3)]">
                Quero me preparar para marcas
                <ArrowRight size={18} className="md:w-5 md:h-5" />
              </WhatsAppButton>
            </motion.div>
          </div>

          <div className="flex-1 w-[calc(100%+2rem)] -mx-4 md:w-full md:mx-0 order-first lg:order-last">
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative rounded-none md:rounded-[2rem] overflow-hidden aspect-[4/5] sm:aspect-square md:aspect-[4/3] w-full border-y md:border border-white/10 shadow-[0_0_60px_rgba(131,58,180,0.2)]"
            >
               <img 
                 src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop" 
                 alt="Marcas e Parcerias"
                 className="w-full h-full object-cover mix-blend-luminosity opacity-80 hover:scale-105 transition-transform duration-700 animate-scale-pulse md:animate-none"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
               <div className="absolute inset-0 bg-ig-purple/20 mix-blend-overlay animate-glow-pulse md:animate-none" />
               
               {/* Floating elements inside image */}
               <div className="absolute bottom-8 left-8 right-8 flex justify-center gap-4">
                  <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 text-white font-medium flex items-center gap-2 shadow-[0_0_20px_rgba(131,58,180,0.5)] animate-float md:animate-none">
                    <Check size={18} className="text-green-400" /> Proposta Aceita
                  </div>
               </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 md:py-32 px-4 md:px-8 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen opacity-50">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-[1000px] h-[300px] bg-ig-orange/5 blur-[100px] md:blur-[150px] rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeading className="text-center mb-16 md:mb-20 !text-4xl md:!text-5xl">
            Quem vivenciou a <br className="md:hidden" />
            <span className="italic font-light text-zinc-500">mudança</span>
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            <TestimonialItem 
              name="Caroline"
              handle="@carolineamad"
              text="A mentoria virou uma chave! Entendi finalmente o que precisava ajustar na minha bio e como me posicionar melhor para as marcas de forma autêntica."
            />
            <TestimonialItem 
              name="Na Cozinha Simples"
              handle="@nacozinhasimples"
              text="Eu criava conteúdo mas me sentia estagnada. O Ju me ajudou a organizar o feed e enxergar a criação como negócio. Hoje a percepção do meu trabalho mudou."
            />
            <TestimonialItem 
              name="Hebertt"
              handle="@hebertt"
              text="Direto ao ponto, sem enrolação. Tive um direcionamento claro de quais formatos focar e como construir autoridade através do meu conteúdo diário."
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 flex justify-center"
          >
            <WhatsAppButton className="bg-white/5 hover:bg-white/10 text-white border border-white/10 w-full sm:w-auto text-[0.95rem] sm:text-[1.05rem] md:text-lg backdrop-blur-md">
              Quero ter esses resultados
              <TrendingUp size={18} className="md:w-5 md:h-5" />
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>

      {/* PRICING & CLOSING CTA */}
      <section className="py-16 md:py-32 px-4 md:px-8 relative overflow-hidden bg-black">
        {/* Abstract organic shape behind pricing */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[150%] md:w-[800px] h-[500px] bg-gradient-to-br from-ig-purple/10 to-ig-pink/10 blur-[100px] rounded-[100%] animate-pulse" style={{ animationDuration: '6s' }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10 md:space-y-12">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl font-medium tracking-tighter mb-4 md:mb-6">
              Pronto para levar a sério?
            </h2>
            <p className="text-[1.1rem] md:text-xl text-zinc-400 font-light mb-10 md:mb-12">
              Transforme seu Instagram na sua maior oportunidade profissional.
            </p>
            
            <div className="inline-flex justify-center items-end gap-2 mb-8 md:mb-10">
              <span className="text-zinc-400 text-xl md:text-2xl font-medium line-through decoration-white/20 mr-2">De R$297</span>
              <span className="text-zinc-400 text-xl md:text-2xl font-medium mb-0.5 md:mb-1">Por apenas:</span>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-left mb-10 md:mb-12">
              <div className="space-y-1 w-full md:w-auto text-center md:text-right border-b border-white/10 md:border-b-0 md:border-r md:pr-12 pb-8 md:pb-0">
                 <p className="text-zinc-400 uppercase tracking-widest text-sm">Pix</p>
                 <p className="font-display text-6xl md:text-7xl font-medium text-white">R$ 129</p>
              </div>
              <div className="space-y-1 w-full md:w-auto text-center md:text-left">
                 <p className="text-zinc-400 uppercase tracking-widest text-sm">Cartão (Link)</p>
                 <p className="font-display text-5xl md:text-6xl font-medium text-white">
                   <span className="text-xl md:text-2xl mr-2 text-zinc-500">Até 3x de</span> 
                   R$ 49
                 </p>
              </div>
            </div>

            <WhatsAppButton className="bg-white text-black hover:bg-zinc-200 w-full sm:w-auto text-[1.05rem] md:text-xl px-6 md:px-12 py-5 shadow-[0_0_50px_rgba(255,255,255,0.15)] flex-col sm:flex-row h-auto gap-2 sm:gap-3 rounded-[1.5rem] sm:rounded-full">
              <span>Agendar agora pelo WhatsApp</span>
              <MessageCircle size={24} className="sm:ml-2 opacity-50 sm:opacity-100 hidden sm:block" />
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <SectionHeading className="text-center mb-12 md:mb-16 !text-3xl md:!text-5xl">Perguntas Frequentes</SectionHeading>
          
          <div className="space-y-2">
            <FAQItem 
              question="Para quem é a mentoria?"
              answer="A mentoria foi pensada exclusivamente para criadores de conteúdo e influenciadores pequenos (ou iniciantes) que sentem que têm potencial, mas ainda precisam de direção em estética, posicionamento e olhar comercial."
            />
            <FAQItem 
              question="A mentoria garante parcerias com marcas?"
              answer="Nenhum profissional sério pode garantir parcerias. O objetivo desta mentoria é organizar a 'casa' (seu perfil) e alinhar a sua postura, estética e comunicação para que, quando as marcas chegarem (ou você as abordar), o seu perfil reflita um criador 100% profissional e valorizado."
            />
            <FAQItem 
              question="Como funciona o agendamento?"
              answer="Todo o agendamento é feito de forma direta e humanizada via WhatsApp. Ao clicar no botão, você falará comigo para alinharmos a melhor data e horário para a nossa chamada de vídeo (1 hora de duração)."
            />
            <FAQItem 
              question="O que preciso ter pronto para a mentoria?"
              answer="Apenas o seu Instagram ativo e vontade de aprender. Antes da nossa chamada, farei uma breve análise prévia para podermos usar nossa 1 hora focando puramente em feedback, direção e plano de ação."
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 text-center text-zinc-600 font-sans border-t border-white/5">
        <p className="flex items-center justify-center gap-2 mb-2">
          <Instagram size={18} />
          <a href="https://instagram.com/ACasaDoJu" target="_blank" rel="noreferrer" className="hover:text-zinc-300 transition-colors">
            @ACasaDoJu
          </a>
        </p>
        <p className="text-sm max-w-sm mx-auto leading-relaxed">&copy; {new Date().getFullYear()} Mentoria do JU para Criadores. Todos os direitos reservados.</p>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (MOBILE FIRST) */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 z-50 p-4 bg-gradient-to-r from-ig-pink to-ig-orange rounded-full text-white shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300 flex items-center justify-center md:bottom-10 md:right-10 border border-white/20 pointer-events-auto animate-scale-pulse md:animate-none"
        aria-label="Fale comigo no WhatsApp"
      >
        <MessageCircle size={26} />
      </a>

    </div>
  );
}

