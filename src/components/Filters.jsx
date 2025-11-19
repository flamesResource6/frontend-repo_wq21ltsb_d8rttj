import React, { useState, useEffect } from 'react'

function Filters({ onChange }) {
  const [dealType, setDealType] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [city, setCity] = useState('')
  const [q, setQ] = useState('')
  const [priceMin, setPriceMin] = useState('')
  const [priceMax, setPriceMax] = useState('')

  useEffect(() => {
    const params = { q, city, deal_type: dealType, property_type: propertyType, min_price: priceMin, max_price: priceMax }
    onChange(params)
  }, [dealType, propertyType, city, q, priceMin, priceMax])

  return (
    <div className="bg-white/80 backdrop-blur rounded-xl border border-slate-200 p-4 md:p-5 shadow-sm">
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search..." className="col-span-2 md:col-span-2 h-10 px-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input value={city} onChange={e=>setCity(e.target.value)} placeholder="City" className="h-10 px-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <select value={dealType} onChange={e=>setDealType(e.target.value)} className="h-10 px-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Deal</option>
          <option value="sale">Sale</option>
          <option value="rent">Rent</option>
        </select>
        <select value={propertyType} onChange={e=>setPropertyType(e.target.value)} className="h-10 px-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Type</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
          <option value="villa">Villa</option>
          <option value="studio">Studio</option>
          <option value="office">Office</option>
          <option value="land">Land</option>
        </select>
        <div className="flex gap-2">
          <input value={priceMin} onChange={e=>setPriceMin(e.target.value)} placeholder="Min" className="w-1/2 h-10 px-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input value={priceMax} onChange={e=>setPriceMax(e.target.value)} placeholder="Max" className="w-1/2 h-10 px-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
    </div>
  )
}

export default Filters
