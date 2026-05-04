import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import { LogOut, Trash2, CheckCircle, Clock, Users, RefreshCw, Phone, GraduationCap, Filter } from 'lucide-react'
import API from '../utils/api'

const STATUS_CONFIG = {
  new: { label: 'New', color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/30' },
  contacted: { label: 'Contacted', color: 'text-gold-400', bg: 'bg-gold-500/20 border-gold-500/30' },
  enrolled: { label: 'Enrolled', color: 'text-green-400', bg: 'bg-green-500/20 border-green-500/30' },
}

export default function AdminPanel() {
  const [leads, setLeads] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [deleting, setDeleting] = useState(null)
  const [updating, setUpdating] = useState(null)
  const navigate = useNavigate()

  const token = localStorage.getItem('3tpna_admin_token')

  useEffect(() => {
    if (!token) { navigate('/admin/login'); return }
    fetchLeads()
  }, [token])

  const fetchLeads = useCallback(async () => {
    setLoading(true)
    try {
      const { data } = await API.get('/leads')
      setLeads(data.leads)
    } catch {
      navigate('/admin/login')
    } finally {
      setLoading(false)
    }
  }, [])

  const deleteLead = async (id) => {
    if (!confirm('Delete this lead?')) return
    setDeleting(id)
    try {
      await API.delete(`/leads/${id}`)
      setLeads(prev => prev.filter(l => l._id !== id))
    } catch (err) {
      alert('Failed to delete')
    } finally {
      setDeleting(null)
    }
  }

  const updateStatus = async (id, status) => {
    setUpdating(id)
    try {
      const { data } = await API.patch(`/leads/${id}`, { status })
      setLeads(prev => prev.map(l => l._id === id ? data.lead : l))
    } catch {
      alert('Failed to update')
    } finally {
      setUpdating(null)
    }
  }

  const logout = () => {
    localStorage.removeItem('3tpna_admin_token')
    navigate('/admin/login')
  }

  const filtered = filter === 'all' ? leads : leads.filter(l => l.status === filter)
  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    enrolled: leads.filter(l => l.status === 'enrolled').length,
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800/80 to-violet-900/20" />

      <div className="relative">
        {/* Header */}
        <div className="glass border-b border-white/5 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                <GraduationCap size={18} className="text-navy-900" />
              </div>
              <div>
                <div className="font-display font-800 text-white text-sm">3TPNA Admin</div>
                <div className="text-xs text-slate-500 font-body">Leads Management</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={fetchLeads}
                className="glass px-3 py-2 rounded-xl border border-white/8 text-slate-400 hover:text-white transition-colors"
              >
                <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
              </button>
              <Link to="/" className="glass px-4 py-2 rounded-xl border border-white/8 text-slate-400 hover:text-white font-body text-sm transition-colors">
                ← Website
              </Link>
              <button
                onClick={logout}
                className="flex items-center gap-2 bg-rose-500/20 border border-rose-500/30 text-rose-400 px-4 py-2 rounded-xl font-body text-sm hover:bg-rose-500/30 transition-colors"
              >
                <LogOut size={14} /> Logout
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Leads', value: stats.total, icon: Users, color: 'violet' },
              { label: 'New', value: stats.new, icon: Clock, color: 'blue' },
              { label: 'Contacted', value: stats.contacted, icon: Phone, color: 'gold' },
              { label: 'Enrolled', value: stats.enrolled, icon: CheckCircle, color: 'green' },
            ].map(stat => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass rounded-2xl p-5 border border-white/5"
              >
                <div className={`text-3xl font-display font-900 text-${stat.color === 'gold' ? 'gold-400' : stat.color + '-400'} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-body">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Filter */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <Filter size={16} className="text-slate-500" />
            {['all', 'new', 'contacted', 'enrolled'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-body font-600 capitalize transition-all duration-200 ${
                  filter === f
                    ? 'btn-gold'
                    : 'glass border border-white/8 text-slate-400 hover:text-white'
                }`}
              >
                {f} {f === 'all' ? `(${stats.total})` : `(${stats[f]})`}
              </button>
            ))}
          </div>

          {/* Leads Table */}
          {loading ? (
            <div className="flex justify-center py-24">
              <div className="w-12 h-12 border-2 border-gold-400/30 border-t-gold-400 rounded-full animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-24 glass rounded-3xl border border-white/5">
              <div className="text-6xl mb-4">📭</div>
              <div className="font-display text-2xl text-slate-400">No leads yet</div>
              <div className="text-slate-500 font-body text-sm mt-2">Leads from the website form will appear here.</div>
            </div>
          ) : (
            <div className="space-y-3">
              <AnimatePresence>
                {filtered.map((lead, i) => (
                  <motion.div
                    key={lead._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ delay: i * 0.05 }}
                    className="glass rounded-2xl p-5 border border-white/5 hover:border-gold-500/20 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      {/* Lead Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="font-display font-700 text-white">{lead.name}</h3>
                          <span className={`text-xs px-2 py-0.5 rounded-full border font-body font-600 ${STATUS_CONFIG[lead.status].bg} ${STATUS_CONFIG[lead.status].color}`}>
                            {STATUS_CONFIG[lead.status].label}
                          </span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-1 text-sm">
                          <a href={`tel:${lead.phone}`} className="text-gold-400 hover:text-gold-300 font-body font-600 flex items-center gap-1.5">
                            <Phone size={12} />
                            {lead.phone}
                          </a>
                          <span className="text-slate-400 font-body text-xs">📚 {lead.course}</span>
                          {lead.message && (
                            <span className="text-slate-500 font-body text-xs sm:col-span-2">💬 {lead.message}</span>
                          )}
                          <span className="text-slate-600 font-body text-xs">
                            🕐 {new Date(lead.createdAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <select
                          value={lead.status}
                          onChange={e => updateStatus(lead._id, e.target.value)}
                          disabled={updating === lead._id}
                          className="glass text-sm font-body px-3 py-2 rounded-xl border border-white/10 text-slate-300 bg-navy-800 outline-none focus:border-gold-500/40 disabled:opacity-50"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="enrolled">Enrolled</option>
                        </select>
                        <a
                          href={`https://wa.me/91${lead.phone}`}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-xl bg-green-500/20 border border-green-500/30 text-green-400 hover:bg-green-500/30 transition-colors"
                          title="WhatsApp"
                        >
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-green-400">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        </a>
                        <button
                          onClick={() => deleteLead(lead._id)}
                          disabled={deleting === lead._id}
                          className="p-2 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-400 hover:bg-rose-500/30 transition-colors disabled:opacity-50"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
