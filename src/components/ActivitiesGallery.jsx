import { motion } from 'framer-motion'
import { Camera } from 'lucide-react'

const GALLERY = [
  { id: 1, img: '/achievers/function.jpeg', title: 'Annual Function', span: 'md:col-span-2 md:row-span-2' },
  { id: 2, img: '/activities/tour 1.jpeg', title: 'Educational Tour', span: 'md:col-span-1 md:row-span-1' },
  { id: 3, img: '/activities/tour 2.jpeg', title: 'Campus Activities', span: 'md:col-span-1 md:row-span-1' },
  { id: 4, img: '/activities/tour 3.jpeg', title: 'Student Interaction', span: 'md:col-span-2 md:row-span-1' },
]

export default function ActivitiesGallery() {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-[#02061a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border-violet-500/20"
            >
              <Camera size={16} className="text-violet-400" />
              <span className="text-violet-400 text-sm font-body tracking-widest uppercase">Life at 3TPNA</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-title text-4xl md:text-5xl text-white"
            >
              Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Classrooms</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-md font-body"
          >
            A glimpse into the vibrant campus life, educational tours, and events that shape our students' holistic development.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4">
          {GALLERY.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`group relative rounded-2xl overflow-hidden glass ${item.span}`}
            >
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-display font-bold text-xl">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
