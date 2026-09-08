import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home'
import Consultar from './pages/Consultar';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen">
      <header className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        {isHome ? (
          <nav className="flex items-center gap-1 text-sm">
            <Link to="/" className="rounded-md bg-slate-800 px-3 py-1.5 font-medium text-cyan-300">
              Inicio
            </Link>
            <Link to="/consultar" className="px-3 py-1.5 font-medium text-slate-300 hover:text-white">
              Control de Estaciones
            </Link>
          </nav>
        ) : (
          <Link to="/" className="flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300">
            <span aria-hidden="true">←</span> Volver al inicio
          </Link>
        )}
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultar" element={<Consultar />} />
      </Routes>
    </div>
  );
}

export default App
