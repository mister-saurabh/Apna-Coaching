import { motion } from 'framer-motion'
import { GraduationCap, Phone, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 to-[#02040f]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <GraduationCap size={20} className="text-navy-900" />
              </div>
              <div>
                <div className="font-display font-black text-lg gold-text leading-none">3TPNA</div>
                <div className="text-[10px] font-body text-gold-500/70 tracking-[0.2em] uppercase">Coaching Classes</div>
              </div>
            </div>
            <p className="text-slate-500 font-body text-sm leading-relaxed mb-5">
              Empowering students of Badlapur and Jaunpur with world-class coaching for competitive exams and board excellence.
            </p>
            <div className="flex items-center gap-2 text-slate-500 text-sm font-body">
              <MapPin size={14} className="text-gold-500/60 flex-shrink-0" />
              <span>Beside Shiv Bal Chikitsalay, Badlapur, Jaunpur</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-700 text-white text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[['#home','Home'],['#courses','Courses'],['#about','About Us'],['#contact','Contact']].map(([href, label]) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-slate-500 hover:text-gold-400 font-body text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-500/40 group-hover:bg-gold-400 transition-colors" />
                    {label}
                  </button>
                </li>
              ))}
              <li>
                <a href="/admin/login" className="text-slate-500 hover:text-gold-400 font-body text-sm transition-colors duration-200 flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-gold-500/40 group-hover:bg-gold-400 transition-colors" />
                  Admin Panel
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-700 text-white text-sm uppercase tracking-widest mb-5">Contact</h4>
            <div className="space-y-4">
              <a href="tel:8542093421" className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/20 transition-colors">
                  <Phone size={14} className="text-gold-400" />
                </div>
                <span className="text-slate-400 hover:text-gold-400 font-body text-sm transition-colors">8542093421</span>
              </a>
              <a
                href="https://wa.me/918542093421"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-green-400">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <span className="text-slate-400 hover:text-green-400 font-body text-sm transition-colors">WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 font-body text-xs">
            © 2024 3TPNA Coaching Classes, Badlapur, Jaunpur. All rights reserved.
          </p>
          <p className="text-slate-600 font-body text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-rose-500 fill-rose-500" /> for students of Jaunpur
          </p>
        </div>
      </div>
    </footer>
  )
}
