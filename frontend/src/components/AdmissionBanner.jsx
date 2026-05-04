import { motion } from 'framer-motion'
import { Bell, Sparkles } from 'lucide-react'

const TICKER_ITEMS = [
  '🎓 New Batch Starting From 1st February',
  '⭐ NEET & IIT-JEE Foundation Enrollment Open',
  '📚 CBSE / UP Board Classes 6th to 12th',
  '🗣️ Spoken English Course — Individual Classes Available',
  '🏆 CHS • NTSE • Navodaya — Competition Prep Batch Open',
  '📞 Call Now: 8542093421',
]

export default function AdmissionBanner() {
  const text = TICKER_ITEMS.join('   ✦   ')

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-violet-900/30 to-navy-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-48 bg-gold-500/5 blur-[60px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border border-gold-500/20 relative"
          style={{
            background: 'linear-gradient(135deg, rgba(3,7,30,0.9) 0%, rgba(45,10,94,0.6) 50%, rgba(3,7,30,0.9) 100%)',
            boxShadow: '0 0 80px rgba(232,168,0,0.1), inset 0 0 80px rgba(232,168,0,0.03)'
          }}
        >
          {/* Corner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

          <div className="p-10 md:p-14 text-center">
            {/* Icon */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mx-auto shadow-lg shadow-gold-500/40">
                <Bell size={28} className="text-navy-900" />
              </div>
            </motion.div>

            <div className="inline-flex items-center gap-2 glass-gold px-5 py-2 rounded-full mb-6">
              <Sparkles size={14} className="text-gold-400" />
              <span className="text-gold-400 text-sm font-body font-700 tracking-widest uppercase">Admissions Open</span>
              <Sparkles size={14} className="text-gold-400" />
            </div>

            <h2 className="section-title text-4xl md:text-6xl text-white mb-4">
              New Batch Starting
            </h2>
            <h3 className="section-title text-3xl md:text-5xl gold-text mb-8">
              1st February
            </h3>

            <p className="font-body text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Limited seats available. Secure your spot today and begin the journey to academic excellence with 3TPNA's proven teaching methodology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8542093421" className="btn-gold px-10 py-4 rounded-full text-base inline-block">
                📞 Call to Enroll: 8542093421
              </a>
              <a
                href="https://wa.me/918542093421?text=I'm interested in enrolling at 3TPNA Coaching Classes"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 glass px-10 py-4 rounded-full text-base border border-green-500/30 text-green-400 hover:bg-green-500/10 transition-all duration-300 font-body font-700"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Ticker Strip */}
        <div className="mt-6 glass-gold rounded-2xl overflow-hidden border border-gold-500/20 py-3 relative">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 glass px-4 py-1 rounded-full border border-gold-500/30 ml-4">
              <span className="text-gold-400 font-display font-700 text-xs uppercase tracking-widest">Live</span>
            </div>
            <div className="overflow-hidden flex-1">
              <div className="whitespace-nowrap animate-ticker text-gold-300 font-body text-sm font-500">
                {text} &nbsp;&nbsp;&nbsp; {text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
