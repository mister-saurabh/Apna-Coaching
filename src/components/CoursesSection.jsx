import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Atom, BookOpen, MessageSquare, Trophy, ChevronRight } from 'lucide-react'

const COURSES = [
  {
    id: 1,
    icon: Atom,
    title: 'Foundation',
    subtitle: 'Science & Engineering Prep',
    color: 'from-blue-600/20 to-violet-600/20',
    borderColor: 'border-blue-500/30',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    iconBg: 'from-blue-500 to-violet-600',
    badge: 'Most Popular',
    items: ['NEET Preparation', 'IIT-JEE Foundation', 'Olympiad Training'],
    desc: 'Rigorous NCERT-based training with advanced problem solving for top medical and engineering entrances.',
  },
  {
    id: 2,
    icon: BookOpen,
    title: 'Boards',
    subtitle: 'CBSE / UP Board Classes',
    color: 'from-gold-600/15 to-amber-600/15',
    borderColor: 'border-gold-500/30',
    glowColor: 'rgba(232, 168, 0, 0.4)',
    iconBg: 'from-gold-500 to-amber-600',
    badge: 'All Classes',
    items: ['Class 6th – 10th', 'Class 11th – 12th', 'CBSE & UP Board'],
    desc: 'Complete syllabus coverage with exam-focused strategy for school board excellence.',
  },
  {
    id: 3,
    icon: MessageSquare,
    title: 'Spoken English',
    subtitle: 'Fluency & Communication',
    color: 'from-emerald-600/20 to-teal-600/20',
    borderColor: 'border-emerald-500/30',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    iconBg: 'from-emerald-500 to-teal-600',
    badge: 'New Batch',
    items: ['English Speaking Course', 'Individual Classes', 'For Classes 9th–12th'],
    desc: 'Build confidence, vocabulary, and fluency through immersive spoken English training.',
  },
  {
    id: 4,
    icon: Trophy,
    title: 'Competition',
    subtitle: 'Competitive Exam Prep',
    color: 'from-rose-600/20 to-orange-600/20',
    borderColor: 'border-rose-500/30',
    glowColor: 'rgba(244, 63, 94, 0.4)',
    iconBg: 'from-rose-500 to-orange-600',
    badge: 'Scholarship',
    items: ['CHS Exam', 'NTSE Preparation', 'Navodaya & One-Day Exams'],
    desc: 'Structured coaching for prestigious scholarship and talent search examinations.',
  },
]

function CourseCard({ course, index }) {
  const [hovered, setHovered] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20
    setTilt({ x, y })
  }

  const scrollToContact = () => {
    window.dispatchEvent(new CustomEvent('selectCourse', { detail: course.title }))
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }) }}
      onMouseMove={handleMouseMove}
      style={{
        transform: hovered ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) translateY(-8px)` : 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)',
        transition: 'transform 0.3s ease',
        boxShadow: hovered ? `0 30px 80px ${course.glowColor}` : '0 4px 20px rgba(0,0,0,0.5)',
      }}
      className={`relative rounded-3xl border ${course.borderColor} bg-gradient-to-br ${course.color} overflow-hidden cursor-pointer group`}
    >
      {/* Animated border glow */}
      {hovered && (
        <div
          className="absolute inset-0 rounded-3xl opacity-40"
          style={{ boxShadow: `inset 0 0 40px ${course.glowColor}` }}
        />
      )}

      {/* Badge */}
      <div className="absolute top-4 right-4">
        <span className={`text-xs font-body font-700 px-3 py-1 rounded-full bg-gradient-to-r ${course.iconBg} text-white uppercase tracking-wider`}>
          {course.badge}
        </span>
      </div>

      <div className="p-8">
        {/* Icon */}
        <motion.div
          animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.iconBg} flex items-center justify-center mb-6 shadow-lg`}
          style={{ boxShadow: hovered ? `0 10px 30px ${course.glowColor}` : 'none' }}
        >
          <course.icon size={28} className="text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="section-title text-2xl text-white mb-1">{course.title}</h3>
        <p className="text-sm text-slate-400 font-body mb-4">{course.subtitle}</p>
        <p className="text-slate-300 font-body text-sm leading-relaxed mb-6">{course.desc}</p>

        {/* Items */}
        <ul className="space-y-2 mb-8">
          {course.items.map(item => (
            <li key={item} className="flex items-center gap-3 text-sm text-slate-300 font-body">
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${course.iconBg} flex-shrink-0`} />
              {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={scrollToContact}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r ${course.iconBg} text-white font-body font-700 text-sm transition-all duration-300 group-hover:shadow-lg`}
          style={{ boxShadow: hovered ? `0 8px 25px ${course.glowColor}` : 'none' }}
        >
          Enroll in {course.title}
          <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  )
}

export default function CoursesSection() {
  return (
    <section id="courses" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-violet-900/10 to-navy-900" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 glass-gold px-5 py-2 rounded-full mb-6">
            <span className="text-gold-400 text-sm font-body font-600 tracking-widest uppercase">Our Courses</span>
          </div>
          <h2 className="section-title text-5xl md:text-6xl text-white mb-6">
            Choose Your <span className="gold-text">Path to</span>
            <br />Excellence
          </h2>
          <p className="text-slate-400 font-body text-lg max-w-2xl mx-auto">
            Curated programs designed by expert faculty with proven track records of exceptional results.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COURSES.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
