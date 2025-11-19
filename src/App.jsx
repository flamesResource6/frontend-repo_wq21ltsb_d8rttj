import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import ListingCard from './components/ListingCard'

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [params, setParams] = useState({})

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchListings = async (currentParams = {}) => {
    setLoading(true)
    const query = new URLSearchParams()
    Object.entries(currentParams).forEach(([k,v]) => {
      if (v !== '' && v !== null && v !== undefined) query.append(k, v)
    })
    try {
      const res = await fetch(`${backend}/api/listings?${query.toString()}`)
      const data = await res.json()
      setItems(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchListings(params)
  }, [JSON.stringify(params)])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-4">
        <Filters onChange={setParams} />

        {loading ? (
          <div className="py-20 text-center text-slate-500">Loading listings...</div>
        ) : items.length === 0 ? (
          <div className="py-20 text-center text-slate-500">No listings found. Try adjusting filters.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map(item => (
              <ListingCard key={item.id || item._id || Math.random()} item={item} />
            ))}
          </div>
        )}

        <section className="mt-8 text-center text-xs text-slate-500">
          Sources aggregated: Facebook Marketplace, Tayara, Tunisie Annonces. Use the API to ingest more.
        </section>
      </main>
    </div>
  )
}

export default App
