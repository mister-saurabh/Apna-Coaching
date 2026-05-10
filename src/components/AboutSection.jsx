import { motion } from 'framer-motion'
import { Award, Users, MapPin, Phone, Shield, Star } from 'lucide-react'

const FEATURES = [
  { icon: Award, title: 'Expert Faculty', desc: 'Highly qualified teachers with years of coaching excellence' },
  { icon: Users, title: 'Personal Attention', desc: 'Small batch sizes ensuring individual focus for every student' },
  { icon: Shield, title: 'Proven Results', desc: 'Consistent track record of selections in top institutions' },
  { icon: Star, title: 'Holistic Growth', desc: 'Beyond academics — building character and confidence' },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800/50 to-violet-900/20" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 glass-gold px-5 py-2 rounded-full mb-8">
              <MapPin size={14} className="text-gold-400" />
              <span className="text-gold-400 text-sm font-body tracking-widest uppercase">Badlapur, Jaunpur</span>
            </div>

            <h2 className="section-title text-5xl md:text-6xl text-white mb-6 leading-tight">
              A Trusted<br />
              <span className="gold-text">Coaching Brand</span><br />
              in Badlapur
            </h2>

            <div className="space-y-5 font-body text-slate-400 text-base leading-relaxed">
              <p>
                At <span className="text-gold-400 font-700">3TPNA Coaching Classes</span>, we believe every student carries the potential to achieve greatness. Located in the heart of Badlapur, Jaunpur, we have been the trusted academic partner for hundreds of families.
              </p>
              <p>
                Our approach goes beyond textbooks. We craft <span className="text-slate-200 font-600">personalized learning journeys</span> — combining rigorous academic preparation with the kind of mentorship that builds real confidence, clarity, and competitive advantage.
              </p>
              <p>
                From foundation science to competitive exam mastery, our students don't just pass — they excel, inspire, and lead.
              </p>
            </div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 mt-10"
            >
              <a
                href="tel:8542093421"
                className="flex items-center gap-3 glass-gold px-6 py-3 rounded-2xl hover:bg-gold-500/10 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center group-hover:bg-gold-500/30 transition-colors">
                  <Phone size={18} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-body">Call Us</div>
                  <div className="text-gold-400 font-700 font-body">8542093421</div>
                </div>
              </a>
              <a
                href="https://wa.me/918542093421"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 glass px-6 py-3 rounded-2xl border border-green-500/20 hover:bg-green-500/10 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-400">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-body">WhatsApp</div>
                  <div className="text-green-400 font-700 font-body">Chat Now</div>
                </div>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="neumorphic glass rounded-2xl p-6 border border-white/5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-violet-600/20 flex items-center justify-center mb-4 group-hover:from-gold-500/30 group-hover:to-violet-600/30 transition-all duration-300">
                  <f.icon size={22} className="text-gold-400" />
                </div>
                <h4 className="font-display font-700 text-white text-base mb-2">{f.title}</h4>
                <p className="text-xs text-slate-400 font-body leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}

            {/* Location block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="col-span-2 glass rounded-2xl p-5 border border-gold-500/10"
            >
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gold-400 font-display font-700 text-sm mb-1">Our Location</div>
                  <div className="text-slate-300 font-body text-sm">
                    Beside Shiv Bal Chikitsalay (Dr. Dharmendra Yadav),<br />
                    Badlapur, Jaunpur, Uttar Pradesh
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
