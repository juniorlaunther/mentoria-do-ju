/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Instagram, 
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

const TestimonialItem = ({ text, name, handle, avatar }: { text: string, name: string, handle: string, avatar: string }) => {
  const instagramUrl = `https://instagram.com/${handle.replace('@', '')}`;
  
  return (
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
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gradient-to-tr from-ig-yellow via-ig-pink to-ig-purple p-[2px] shrink-0 hover:scale-105 transition-transform block">
        <img src={avatar} alt={name} loading="lazy" className="w-full h-full object-cover rounded-full bg-zinc-900" />
      </a>
      <div>
        <p className="font-medium text-white font-display leading-tight">{name}</p>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 font-sans hover:text-ig-pink transition-colors inline-block">{handle}</a>
      </div>
    </div>
  </motion.div>
)};

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
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-radial-purple rounded-full" />
        <div className="absolute top-[40%] right-[-20%] w-[60%] h-[60%] bg-radial-orange rounded-full" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-radial-pink rounded-full" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-16 md:pt-32 md:pb-32 px-4 md:px-8 overflow-hidden flex flex-col justify-center min-h-[70vh]">
        
        {/* HERO BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Mobile Background */}
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0ZSalUZdy1xh3xW5pIN7ttWVLJ8JLMMaSwNveoQdRF04iNfW92mTQkoNicpTNxAfq4NubsN-I5np1gPyQkkL0Ws7e4kGACWpvuu6xSCbBLgu86GJlDS8e9j9L7br8cgB3NUstijtz3-9P-hXx3g989M6bfJ8yjcUPRo0tKfx6b1Kktk55jGlUes1zsgM/s16000/mobile%20hero.png" 
            alt="Hero Background Mobile" 
            className="w-full h-full object-cover object-top opacity-60 lg:hidden"
          />
          {/* Desktop Background */}
          <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIRdQ4Dc2egnoPPPZC-b_TCgjvh4PbueEZ9dD1MyGdHE1lDWqnT3C3XQlCyaVm3kP9kQOnuirLqnJkjQ2y5vws-jYkLedWKczIg9C3x7c0vXc6T6lsmhvsRyZDnZpLrAn4ui_QMJJ6hXbD9z6mvXu69zU4Cr4JIPk502glhHcO_p0Q9rmpXwkxBA58AT8/s16000/hero%20desktop.png" 
            alt="Hero Background Desktop" 
            className="w-full h-full object-cover object-center opacity-80 hidden lg:block"
          />
          {/* Gradient to fade out at the bottom */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 lg:h-1/3 bg-gradient-to-t from-black via-black/80 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/50 to-transparent lg:hidden" />
          <div className="hidden lg:block absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center justify-start">
          
          <div className="lg:w-[65%] flex flex-col items-center lg:items-start text-center lg:text-left w-full container-h">
            
            <div className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-8 w-full">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
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
                className="font-display leading-[1.05] font-medium tracking-tighter w-full"
              >
                <span className="block whitespace-nowrap text-[1.75rem] min-[390px]:text-[1.95rem] min-[420px]:text-[2.15rem] sm:text-5xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem]">Sua presença digital,</span>
                <span className="text-gradient block text-[2.75rem] sm:text-5xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem]">levada a sério.</span>
              </motion.h1>
            </div>

            {/* Spacer for mobile background face */}
            <div className="h-[280px] min-[390px]:h-[320px] sm:h-[400px] lg:hidden w-full relative z-0 pointer-events-none" aria-hidden="true" />

            <div className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-8 w-full mt-2 lg:mt-8">
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
                className="pt-2 lg:pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start w-full lg:w-auto"
              >
                <WhatsAppButton className="bg-gradient-to-r from-ig-magenta to-ig-orange text-white w-full sm:w-auto text-[1.1rem] md:text-xl shadow-[0_0_40px_rgba(225,48,108,0.3)] !px-8 !py-4">
                  Quero agendar minha mentoria
                  <ArrowRight size={20} className="md:w-6 md:h-6" />
                </WhatsAppButton>
              </motion.div>
            </div>

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
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFghtdca1UT4PdoL2D1fRPVXRSu6nXZE2KX3Tc7UaLPxcsCq3lZHxb8TTm9EHFT-y1J5iVgLoVYjwu3_QO4UeIaQFP2Ud304zYqBjfTBxFk45U0Rfbt92xnYv8RZs2kCBPf_gYmL6ukYJPu6pBRtgO4azezhuxtTzCuSRFyQPdOkg_oXvfEamfa2kkrTE/w480-h640/baixo%20engajamento.png" 
                alt="Criador pensando na estratégia"
                className="w-full h-full object-cover opacity-90"
                loading="lazy"
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-full h-full max-w-4xl bg-radial-pink rounded-full pointer-events-none" />
        
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
                 src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfzwSwd-PP0ovFeICEbIdU6dCdObbWyOvHH6f63XmXh-0BTl8OfNxW95M4x7VdNRjhD2qIWpY86mkh9I-mQf36d7V_7jAM96wPMGt1su_zreCtQ1LGevLBm7Xl8isL_3Tt7RuoGqxCx_PaRD3_kA89ylEwyd9WrYkyH5E-HG2MetWHVVhZbsfyZqis39M/s16000/mentoria.gif" 
                 alt="Resultados e notificações" 
                 className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                 loading="lazy"
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
                 loading="lazy"
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
        <div className="absolute right-0 top-1/2 w-[150%] md:w-[500px] h-[500px] bg-radial-purple rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

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
                 src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMNonDwBcDfBe-pwIrGul1Z5vcGwAhZeGFF4rwE9V4ms9cSDpaX28nuhz1mtKmDfdhRdjLRImVw1TcVGxFTbWlSHxRnyd1WfHRNGH-QcF7zqYhEBbJfOY_XvJjLeNnay2t1olH0Hjam9Zn63R3wPBJuujqH3BYXkqjyZ6PRqCkW_Ba94v0Uk_RRflGC4E/w640-h426/Produtos%20parceria%20WAP.png" 
                 alt="Marcas e Parcerias"
                 className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700 animate-scale-pulse md:animate-none"
                 loading="lazy"
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

      {/* WHO IS JU SECTION */}
      <section className="py-16 md:py-32 px-4 md:px-8 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-50">
           <div className="absolute top-[30%] left-[-10%] w-[50%] h-[50%] bg-radial-pink rounded-full" />
        </div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative z-10">
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[400px] aspect-[3/4] rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(225,48,108,0.2)]"
            >
              <img 
                 src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUYCZfvHREvSV12BRv4PaFlQNcES94DSqxSc_g_uj_QrKW4miOfDPUS9EhGXpHWRacdfilwyA-0JGhGQlcOas3AH_cf8mITR2VGPXDoP1AZSVTXSmpKSgJ023QC-YSqxo2ss2BjJNKRCzfqEgbUozVycnpmZitIIY5wIVvSpS_jniMYbCULcIDSnFVpFE/w512-h640/junior%20launther.jpeg" 
                 alt="Junior Launther" 
                 className="w-full h-full object-cover"
                 loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-2xl text-white font-medium">Junior Launther</p>
                <a href="https://instagram.com/ACasaDoJu" target="_blank" rel="noreferrer" className="text-zinc-400 text-sm hover:text-ig-pink transition-colors">@ACasaDoJu</a>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full text-center md:text-left">
            <SectionHeading className="!leading-tight mb-8">
              Quem é o <span className="text-gradient hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">JU?</span>
            </SectionHeading>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[1.1rem] md:text-lg text-zinc-300 leading-relaxed font-light space-y-6"
            >
              <p>
                <strong className="text-white font-medium">Junior Launther</strong> é criador de conteúdo, artista e comunicador à frente do <a href="https://instagram.com/ACasaDoJu" target="_blank" rel="noreferrer" className="text-white font-medium hover:text-ig-pink hover:underline transition-colors">@ACasaDoJu</a>, perfil onde transforma ideias, estética, bastidores e projetos criativos em conteúdo para uma audiência conectada com casa, arte, DIY e presença digital.
              </p>
              <p>
                Com experiência prática na criação de vídeos, storytelling, direção visual e construção de comunidade no Instagram, Junior desenvolveu um olhar estratégico para entender o que torna um perfil mais profissional, atrativo e preparado para gerar oportunidades.
              </p>
              <p className="text-zinc-100 font-medium">
                Na Mentoria do JU para Criadores, ele une criatividade, vivência real de internet e análise sincera para ajudar pequenos influenciadores a enxergarem a criação de conteúdo como trabalho.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 md:py-32 px-4 md:px-8 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen opacity-50">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-[1000px] h-[300px] bg-radial-orange rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeading className="text-center mb-16 md:mb-20 !text-4xl md:!text-5xl">
            Quem vivenciou a <br className="md:hidden" />
            <span className="italic font-light text-gradient hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">mudança</span>
          </SectionHeading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            <TestimonialItem 
              name="Caroline"
              handle="@carolineamad"
              text="A mentoria virou uma chave total! Mesmo com poucos seguidores, eu consegui melhorar meu conteúdo e tenho fechado muitas publis na minha cidade. Até FIXAS."
              avatar="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizTCT1fIId6EkLFQevvAxc8tU6SfKpLRu4iq827jXL34ITRgVB2xJ2l2Q1vxNXEKTIfz9ae7MahVIXWHJzr7IjI6bJ_6VeYCRIw-SZwWrLkZ00aBmDSGuDi_24pv_wIDwArbc76GORaISujHvgy4LH_HZJ-uD5J9HqZEeTfj-T5y7n_UGdBm-1-b5QVd4/s1600/caroline.jpg"
            />
            <TestimonialItem 
              name="Na Cozinha Simples"
              handle="@nacozinhasimples"
              text="O Junior foi um grande parceiro desde quando eu tinha 40mil seguidores. Faço um acompanhamento trimestral para sempre estar atualizado e melhorando!"
              avatar="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrSe_JGHmbfxitFJTK34Lc6fcvfQk5fWs1dyrDrNe_ZWBULtmc9LJiNywCQU2UzGI6BOODLuq3pQkNCmj_6pgvi46VVjozUw9ZOXQg6cJPJjxsUeZKzt7N4_Ek34w1nC4oq4paOdU3XWoT0-O5Gnli_En7Fg2TJGbilM8-tvacpQx5zw5SE2qTcz8c894/s1600/nacozinhasimples.jpg"
            />
            <TestimonialItem 
              name="Hebertt"
              handle="@hebertt"
              text="Sou cantor, o Ju me deu uma ideia de criar um vídeo nos bares da minha cidade que viralizou!!! Os insights dele são sempre incríveis."
              avatar="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSXJPYb5V0bv4hqIJyEu9b_dV1tSM-TlDxUe6-6lKbhy-OHNU4Y9qkQiC-UiYuDR0pXGwkChdVLq_JwuEq2Q68uPEtZZhWMW9OavdGjOdrRXq-BL08m3epfiaB9D0OUwTpYdRoGZ71oxZOTx0w58VW4YytxO4HfoV7fe2O9HMEQOucC2qa23byXyly_ZY/s1600/hebertt.jpg"
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
          <div className="w-[150%] md:w-[800px] h-[500px] bg-radial-purple rounded-[100%] animate-pulse" style={{ animationDuration: '6s' }} />
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

