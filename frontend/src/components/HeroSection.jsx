import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Sparkles, Star, Zap } from 'lucide-react'

const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  left: Math.random() * 100,
  delay: Math.random() * 8,
  duration: Math.random() * 8 + 6,
  color: i % 3 === 0 ? '#e8a800' : i % 3 === 1 ? '#8b5cf6' : '#3b82f6',
}))

const STARS = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  size: Math.random() * 2 + 1,
  top: Math.random() * 100,
  left: Math.random() * 100,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 2,
}))

const STATS = [
  { value: '500+', label: 'Students Enrolled' },
  { value: '95%', label: 'Success Rate' },
  { value: '10+', label: 'Expert Faculty' },
  { value: '4', label: 'Course Streams' },
]

export default function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToCourses = () => {
    document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-violet-900 to-navy-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-500/5 blur-[120px]" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-violet-700/10 blur-[80px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-700/10 blur-[80px]" />

      {/* Stars */}
      {STARS.map(star => (
        <div
          key={star.id}
          className="star absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

      {/* Particles */}
      {PARTICLES.map(p => (
        <div
          key={p.id}
          className="particle absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            bottom: '-10px',
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
        />
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(232,168,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(232,168,0,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }}
      />

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 max-w-6xl mx-auto pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass-gold px-5 py-2 rounded-full mb-8"
        >
          <Sparkles size={14} className="text-gold-400" />
          <span className="text-gold-400 text-sm font-body font-600 tracking-wider uppercase">
            New Batch Starting 1st February
          </span>
          <Sparkles size={14} className="text-gold-400" />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="section-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6"
        >
          <span className="block text-white mb-2">Start Your</span>
          <span className="block gold-text animate-glow">Successful</span>
          <span className="block text-white">Journey</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-xl md:text-2xl text-slate-400 mb-4"
        >
          With{' '}
          <span className="text-gold-400 font-700">3TPNA Coaching Classes</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-body text-slate-500 text-sm md:text-base mb-12"
        >
          📍 Beside Shiv Bal Chikitsalay, Badlapur, Jaunpur
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button
            onClick={scrollToContact}
            className="btn-gold px-10 py-4 rounded-full text-base shadow-2xl shadow-gold-500/30 animate-pulse-gold"
          >
            ✦ Enroll Now ✦
          </button>
          <button
            onClick={scrollToCourses}
            className="glass px-10 py-4 rounded-full text-base border border-white/10 text-slate-300 hover:text-white hover:border-gold-500/40 transition-all duration-300 font-body font-600"
          >
            Explore Courses →
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-4 text-center"
            >
              <div className="section-title text-3xl font-900 gold-text">{stat.value}</div>
              <div className="text-xs text-slate-400 font-body mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToCourses}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-500/60 hover:text-gold-400 transition-colors z-10"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  )
}
