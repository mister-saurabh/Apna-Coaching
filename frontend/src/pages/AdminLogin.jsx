import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import { Lock, User, LogIn, GraduationCap, Eye, EyeOff } from 'lucide-react'
import API from '../utils/api'

export default function AdminLogin() {
  const [form, setForm] = useState({ username: '', password: '' })
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { data } = await API.post('/auth/login', form)
      localStorage.setItem('3tpna_admin_token', data.token)
      navigate('/admin')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-violet-900/30 to-navy-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-md mx-4"
      >
        <div className="glass rounded-3xl p-10 border border-white/8 relative overflow-hidden"
          style={{ background: 'rgba(5,16,58,0.7)' }}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

          {/* Logo */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-gold-500/40">
              <GraduationCap size={28} className="text-navy-900" />
            </div>
            <h1 className="section-title text-2xl text-white mb-1">Admin Panel</h1>
            <p className="text-slate-500 font-body text-sm">3TPNA Coaching Classes</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs text-slate-400 font-body font-600 uppercase tracking-widest mb-2">Username</label>
              <div className="relative">
                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                  placeholder="admin"
                  className="w-full glass rounded-xl pl-10 pr-4 py-3.5 text-white placeholder-slate-600 font-body text-sm outline-none border border-white/8 focus:border-gold-500/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 font-body font-600 uppercase tracking-widest mb-2">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="w-full glass rounded-xl pl-10 pr-12 py-3.5 text-white placeholder-slate-600 font-body text-sm outline-none border border-white/8 focus:border-gold-500/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl px-4 py-3 text-rose-400 text-sm font-body">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-gold py-4 rounded-2xl text-sm flex items-center justify-center gap-3 disabled:opacity-60"
            >
              {loading ? 'Authenticating...' : <><LogIn size={16} /> Login to Admin</>}
            </button>
          </form>

          <div className="text-center mt-6">
            <Link to="/" className="text-xs text-slate-500 hover:text-gold-400 font-body transition-colors">
              ← Back to Website
            </Link>
          </div>

          <div className="mt-6 glass rounded-xl p-4 border border-gold-500/10">
            <p className="text-xs text-slate-500 font-body text-center">
              Default: <span className="text-gold-500">admin</span> / <span className="text-gold-500">admin123</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
