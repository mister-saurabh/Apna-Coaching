import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function FounderSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-900">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="glass-gold rounded-3xl p-8 md:p-12 border border-gold-500/20 relative overflow-hidden">
          {/* Decorative Quote Mark */}
          <div className="absolute top-4 right-8 text-gold-500/10">
            <Quote size={120} />
          </div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative mx-auto md:mx-0 w-64 h-64 md:w-80 md:h-80 rounded-full md:rounded-3xl overflow-hidden border-4 border-gold-500/30 shadow-[0_0_40px_rgba(232,168,0,0.2)]"
            >
              <img 
                src="/founder.jpeg" 
                alt="Founder" 
                className="w-full h-full object-cover object-top"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-gold-500/10 border border-gold-500/20">
                <span className="text-gold-400 text-sm font-body tracking-widest uppercase">Message from the Founder</span>
              </div>
              
              <h3 className="section-title text-3xl md:text-4xl text-white mb-6">
                "Empowering Minds, <span className="gold-text">Shaping Futures.</span>"
              </h3>
              
              <div className="space-y-4 text-slate-300 font-body text-base leading-relaxed mb-8">
                <p>
                  Education is not just about scoring marks; it is about building character, nurturing curiosity, and preparing students for the challenges of tomorrow. 
                </p>
                <p>
                  At 3TPNA Coaching, we are committed to providing a transformative learning experience. Our vision is to unlock the true potential of every student through personalized attention, expert guidance, and a supportive environment.
                </p>
              </div>

              <div>
                <div className="text-gold-400 font-display font-bold text-xl">Founder & Director</div>
                <div className="text-slate-400 font-body text-sm">3TPNA Coaching Classes</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
