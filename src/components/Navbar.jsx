import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, GraduationCap } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    const isOpen = open
    setOpen(false)
    // Delay scroll if mobile menu was open, so the exit animation
    // doesn't interfere with scrollIntoView target calculation
    const delay = isOpen ? 350 : 0
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, delay)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-gold-500/20 py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-3 cursor-pointer"
          whileHover={{ scale: 1.02 }}
          onClick={() => scrollTo('#home')}
        >
          <div className="relative group p-[3px] rounded-full flex items-center justify-center transition-transform hover:scale-110 duration-500">
            {/* Rotating luxurious gradient background */}
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#e8a800_0%,#fff_25%,#05103a_50%,#fff_75%,#e8a800_100%)] animate-[spin_4s_linear_infinite] rounded-full" />
            {/* Inner white shell to pad the logo */}
            <div className="relative w-12 h-12 bg-white rounded-full p-[2px] z-10 overflow-hidden shadow-inner shadow-black/20">
              <img src="/logo.jpg" alt="3TPNA Logo" className="w-full h-full rounded-full object-cover" />
            </div>
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-gold-400/20 blur-md group-hover:bg-gold-400/50 group-hover:blur-xl transition-all duration-700 pointer-events-none" />
          </div>
          <div>
            <div className="font-display font-black text-lg leading-none gold-text">3TPNA</div>
            <div className="text-[10px] font-body text-gold-500/70 tracking-[0.2em] uppercase">Coaching Classes</div>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-body font-500 text-slate-300 hover:text-gold-400 transition-colors duration-300 relative group tracking-wide"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-gold px-6 py-2.5 rounded-full text-sm"
          >
            Enroll Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gold-400 p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gold-500/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-slate-300 hover:text-gold-400 font-body font-500 transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-gold px-6 py-3 rounded-full text-sm mt-2"
              >
                Enroll Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
