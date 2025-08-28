import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from './assets/misc/Logo.png'

function App() {
  return (
    <div className="min-h-screen flex flex-col text-slate-900 bg-slate-50">
      <header className="w-full bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={Logo} alt="CCUI logo" className="h-12 w-12 rounded-full object-cover" />
              <span className="text-lg font-semibold">Carolina Credit Union Initiative</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link to="team" className="text-slate-700 hover:text-indigo-600">Meet The Team</Link>
            <Link to="contact" className="text-slate-700 hover:text-indigo-600">Contact</Link>
            <Link to="finlit" className="text-slate-700 hover:text-indigo-600">Financial Literacy</Link>
            <Link to="services" className="text-slate-700 hover:text-indigo-600">Services</Link>
            <Link to="support" className="text-slate-700 hover:text-indigo-600">Support</Link>
            <Link to="merch" className="text-slate-700 hover:text-indigo-600">Merch</Link>
          </nav>

          <div className="md:hidden">
            <button className="px-3 py-2 rounded bg-indigo-600 text-white text-sm">Menu</button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">
        <Outlet />
      </main>

      <footer className="w-full border-t border-slate-200 bg-white/60">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-slate-600">© Carolina Credit Union Initiative</div>
      </footer>
    </div>
  )
}

export default App
