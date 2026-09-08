import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="mx-auto max-w-3xl px-6 py-10">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-8 py-16 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 text-3xl">
                    ⛽
                </div>

                <h3 className="text-2xl font-bold text-white">¡Bienvenido!</h3>
                <p className="mx-auto mt-3 max-w-md text-slate-400">
                    Aquí puede consultar las estaciones, sus servicios, activarlas o desactivarlas
                </p>

                <Link
                    to="/consultar"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
                >
                    Consultar Estaciones <span aria-hidden="true">→</span>
                </Link>
            </div>
        </div>
    )
}

export default Home
