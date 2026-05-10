import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, Phone, MapPin, Loader } from 'lucide-react'

const COURSES = [
  'Foundation (NEET/IIT-JEE/Olympiads)',
  'Boards (CBSE/UP Board Class 6-12)',
  'Spoken English',
  'Competition (CHS/NTSE/Navodaya)',
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', course: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const handleSelectCourse = (e) => {
      const selectedTitle = e.detail;
      const matchedCourse = COURSES.find(c => c.toLowerCase().includes(selectedTitle.toLowerCase()));
      if (matchedCourse) {
        setForm(p => ({ ...p, course: matchedCourse }));
      }
    };
    window.addEventListener('selectCourse', handleSelectCourse);
    return () => window.removeEventListener('selectCourse', handleSelectCourse);
  }, []);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const text = `Hi, I am interested in enrolling at 3TPNA Coaching Classes.\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Course:* ${form.course}${form.message ? `\n*Message:* ${form.message}` : ''}`;
      window.open(`https://wa.me/918542093421?text=${encodeURIComponent(text)}`, '_blank');
      setSuccess(true)
      setForm({ name: '', phone: '', course: '', message: '' })
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-violet-900/20 to-navy-900" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gold-500/3 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-gold px-5 py-2 rounded-full mb-6">
            <span className="text-gold-400 text-sm font-body font-600 tracking-widest uppercase">Get In Touch</span>
          </div>
          <h2 className="section-title text-5xl md:text-6xl text-white mb-4">
            Start Your <span className="gold-text">Journey</span><br />Today
          </h2>
          <p className="text-slate-400 font-body text-lg">Fill in the form below and our team will reach out within 24 hours.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-3xl p-8 border border-white/8 relative overflow-hidden"
              style={{ background: 'rgba(5,16,58,0.6)' }}>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mb-6 shadow-lg shadow-gold-500/40"
                    >
                      <CheckCircle size={44} className="text-navy-900" />
                    </motion.div>
                    <h3 className="section-title text-3xl text-white mb-3">Enrollment Request Sent!</h3>
                    <p className="text-slate-400 font-body mb-2">Thank you! Our team will contact you within 24 hours.</p>
                    <p className="text-gold-400 font-body text-sm mb-8">📞 You can also call us: 8542093421</p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="btn-gold px-8 py-3 rounded-full text-sm"
                    >
                      Submit Another
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <h3 className="section-title text-2xl text-white mb-6">Enquiry Form</h3>

                    {/* Name */}
                    <div>
                      <label className="block text-xs text-slate-400 font-body font-600 uppercase tracking-widest mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="w-full glass rounded-xl px-4 py-3.5 text-white placeholder-slate-600 font-body text-sm outline-none border border-white/8 focus:border-gold-500/50 focus:bg-gold-500/5 transition-all duration-300"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs text-slate-400 font-body font-600 uppercase tracking-widest mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        pattern="\d{10}"
                        placeholder="10-digit mobile number"
                        className="w-full glass rounded-xl px-4 py-3.5 text-white placeholder-slate-600 font-body text-sm outline-none border border-white/8 focus:border-gold-500/50 focus:bg-gold-500/5 transition-all duration-300"
                      />
                    </div>

                    {/* Course */}
                    <div>
                      <label className="block text-xs text-slate-400 font-body font-600 uppercase tracking-widest mb-2">Course Interested In *</label>
                      <select
                        name="course"
                        value={form.course}
                        onChange={handleChange}
                        required
                        className="w-full glass rounded-xl px-4 py-3.5 text-white font-body text-sm outline-none border border-white/8 focus:border-gold-500/50 focus:bg-gold-500/5 transition-all duration-300 bg-navy-800"
                      >
                        <option value="" className="bg-navy-800">Select a course</option>
                        {COURSES.map(c => <option key={c} value={c} className="bg-navy-800">{c}</option>)}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs text-slate-400 font-body font-600 uppercase tracking-widest mb-2">Message (Optional)</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Any specific query or class preference..."
                        className="w-full glass rounded-xl px-4 py-3.5 text-white placeholder-slate-600 font-body text-sm outline-none border border-white/8 focus:border-gold-500/50 focus:bg-gold-500/5 transition-all duration-300 resize-none"
                      />
                    </div>

                    {error && (
                      <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl px-4 py-3 text-rose-400 text-sm font-body">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-gold py-4 rounded-2xl text-base flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <><Loader size={18} className="animate-spin" /> Submitting...</>
                      ) : (
                        <><Send size={18} /> Send Enquiry</>
                      )}
                    </button>

                    <p className="text-xs text-slate-500 font-body text-center">
                      🔒 Your information is safe with us. We respect your privacy.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right: Contact Info + Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {[
              {
                icon: Phone,
                title: 'Call Us',
                subtitle: 'Mon–Sat, 8 AM – 8 PM',
                value: '8542093421',
                href: 'tel:8542093421',
                color: 'gold',
                bg: 'from-gold-500/20 to-gold-600/10',
                border: 'border-gold-500/20',
              },
              {
                icon: () => (
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-green-400">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                ),
                title: 'WhatsApp',
                subtitle: 'Direct chat with us',
                value: 'Message on WhatsApp',
                href: 'https://wa.me/918542093421?text=Hi%2C%20I%20am%20interested%20in%20enrolling%20at%203TPNA%20Coaching%20Classes',
                color: 'green',
                bg: 'from-green-500/20 to-green-600/10',
                border: 'border-green-500/20',
              },
              {
                icon: MapPin,
                title: 'Our Location',
                subtitle: 'Badlapur, Jaunpur',
                value: 'Beside Shiv Bal Chikitsalay (Dr. Dharmendra Yadav)',
                href: 'https://maps.google.com/?q=Badlapur,Jaunpur,UP',
                color: 'violet',
                bg: 'from-violet-500/20 to-violet-600/10',
                border: 'border-violet-500/20',
              },
            ].map(item => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                whileHover={{ x: 4, scale: 1.01 }}
                className={`flex items-center gap-5 glass rounded-2xl p-5 border ${item.border} bg-gradient-to-r ${item.bg} transition-all duration-300 group block`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bg} flex items-center justify-center flex-shrink-0 border ${item.border}`}>
                  <item.icon size={22} className={`text-${item.color}-400`} />
                </div>
                <div>
                  <div className={`font-display font-700 text-${item.color}-400 text-sm mb-0.5`}>{item.title}</div>
                  <div className="text-white font-body font-600 text-sm">{item.value}</div>
                  <div className="text-slate-500 font-body text-xs">{item.subtitle}</div>
                </div>
              </motion.a>
            ))}

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-white/10 h-56"
            >
              <iframe
                title="3TPNA Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57840.39374218!2d82.6!3d25.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fc8b5ade5e5b9%3A0x2a2a2a2a2a2a2a2a!2sBadlapur%2C%20Jaunpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
