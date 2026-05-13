import { motion } from 'framer-motion'
import { Trophy, Star } from 'lucide-react'

const ACHIEVERS = [
  { id: 1, img: '/achievers/topper 1.jpeg', name: 'Outstanding Achiever', batch: '2025 Batch' },
  { id: 2, img: '/achievers/topper 2.jpeg', name: 'Outstanding Achiever', batch: '2025 Batch' },
  { id: 3, img: '/achievers/topper 3.jpeg', name: 'Outstanding Achiever', batch: '2025 Batch' },
  { id: 4, img: '/achievers/topper 4.jpeg', name: 'Outstanding Achiever', batch: '2025 Batch' },
  { id: 5, img: '/achievers/topper 5.jpeg', name: 'Outstanding Achiever', batch: '2025 Batch' },
]

export default function AchieversSection() {
  return (
    <section id="achievers" className="py-24 relative overflow-hidden bg-navy-900">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-gold px-4 py-2 rounded-full mb-6"
          >
            <Trophy size={16} className="text-gold-400" />
            <span className="text-gold-400 text-sm font-body tracking-widest uppercase">Wall of Fame</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-4xl md:text-5xl text-white mb-6"
          >
            Our <span className="gold-text">Shining Stars</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto font-body">
            Celebrating the extraordinary success of our students who have set new benchmarks of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {ACHIEVERS.map((achiever, i) => (
            <motion.div
              key={achiever.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden glass border border-gold-500/10 card-hover"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={achiever.img} 
                  alt={`Topper ${achiever.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent opacity-80" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={12} className="text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <h3 className="text-white font-display font-bold text-sm mb-1">{achiever.name}</h3>
                <p className="text-gold-400 text-xs font-body">{achiever.batch}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
