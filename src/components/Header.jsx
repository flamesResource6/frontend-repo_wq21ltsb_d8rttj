import React from 'react'

function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-inner" />
          <div>
            <h1 className="text-xl font-semibold text-slate-900">ImmoTN</h1>
            <p className="text-xs text-slate-500 -mt-0.5">All listings, one place</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#" className="hover:text-slate-900">For Sale</a>
          <a href="#" className="hover:text-slate-900">For Rent</a>
          <a href="#" className="hover:text-slate-900">Sources</a>
        </div>
      </div>
    </header>
  )
}

export default Header
