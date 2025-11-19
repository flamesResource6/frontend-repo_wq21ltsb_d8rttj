import React, { useState } from 'react'

export default function SavedSearchForm({ onCreated }) {
  const [values, setValues] = useState({ name: '', q: '', city: '', deal_type: '', property_type: '', min_price: '', max_price: '' })
  const [loading, setLoading] = useState(false)
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(v => ({ ...v, [name]: value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const payload = { ...values }
      Object.keys(payload).forEach(k => payload[k] === '' && delete payload[k])
      payload.channels = ['email']
      const res = await fetch(`${backend}/api/saved-searches`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json()
      onCreated && onCreated(data)
      setValues({ name: '', q: '', city: '', deal_type: '', property_type: '', min_price: '', max_price: '' })
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="bg-white border border-slate-200 rounded-lg p-4 space-y-3">
      <div className="font-medium text-slate-800">Save a search (get email alerts)</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input name="name" value={values.name} onChange={handleChange} placeholder="Name" className="border rounded px-3 py-2" required />
        <input name="q" value={values.q} onChange={handleChange} placeholder="Keywords" className="border rounded px-3 py-2" />
        <input name="city" value={values.city} onChange={handleChange} placeholder="City" className="border rounded px-3 py-2" />
        <select name="deal_type" value={values.deal_type} onChange={handleChange} className="border rounded px-3 py-2">
          <option value="">Deal</option>
          <option value="rent">Rent</option>
          <option value="sale">Sale</option>
        </select>
        <input name="property_type" value={values.property_type} onChange={handleChange} placeholder="Type (apartment, house, ...)" className="border rounded px-3 py-2" />
        <input name="min_price" value={values.min_price} onChange={handleChange} placeholder="Min price" className="border rounded px-3 py-2" />
        <input name="max_price" value={values.max_price} onChange={handleChange} placeholder="Max price" className="border rounded px-3 py-2" />
      </div>
      <div className="flex justify-end">
        <button disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50">{loading ? 'Saving...' : 'Save search'}</button>
      </div>
    </form>
  )
}
