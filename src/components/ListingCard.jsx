import React from 'react'

function formatPrice(price, currency) {
  if (price == null) return '—'
  try {
    return new Intl.NumberFormat('fr-TN', { style: 'currency', currency: currency || 'TND', maximumFractionDigits: 0 }).format(price)
  } catch {
    return `${price} ${currency || 'TND'}`
  }
}

function ListingCard({ item }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {item.images && item.images.length > 0 ? (
        <img src={item.images[0]} alt={item.title} className="w-full h-44 object-cover" />
      ) : (
        <div className="w-full h-44 bg-slate-100 flex items-center justify-center text-slate-400">No image</div>
      )}
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wide text-slate-500">{item.source}</span>
          {item.deal_type && <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">{item.deal_type}</span>}
        </div>
        <h3 className="font-semibold text-slate-900 line-clamp-2">{item.title}</h3>
        <p className="text-sm text-slate-600 line-clamp-2">{item.city}{item.area ? ` • ${item.area}` : ''}</p>
        <div className="flex items-center justify-between">
          <p className="font-semibold text-blue-600">{formatPrice(item.price, item.currency)}</p>
          {(item.bedrooms != null || item.surface_m2 != null) && (
            <p className="text-xs text-slate-500">{item.bedrooms != null ? `${item.bedrooms} bd` : ''}{item.bedrooms != null && item.surface_m2 != null ? ' • ' : ''}{item.surface_m2 != null ? `${item.surface_m2} m²` : ''}</p>
          )}
        </div>
        {item.url && (
          <a href={item.url} target="_blank" className="text-sm text-indigo-600 hover:underline">View source</a>
        )}
      </div>
    </div>
  )
}

export default ListingCard
