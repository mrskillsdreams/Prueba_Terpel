import { useEffect, useState } from 'react'

function fetchContent(stationId: string, signal?: AbortSignal): Promise<string> {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(
      () => resolve(`Contenido cargado para la estación ${stationId}`),
      300
    )

    signal?.addEventListener('abort', () => {
      clearTimeout(timeoutId)
      reject(new DOMException('Fetch cancelado', 'AbortError'))
    })
  })
}

function UseEffectDepsBugFix() {
  const [stationId, setStationId] = useState('001')
  const [content, setContent] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    fetchContent(stationId, controller.signal)
      .then(result => setContent(result))
      .catch(error => {
        // Un abort es esperado (pasó de estación antes de que respondiera); cualquier
        // otro error sí merece registrarse.
        if (error.name !== 'AbortError') console.error(error)
      })

    return () => {
      controller.abort()
    }
  }, [stationId])

  return (
    <div className="mx-auto max-w-md p-6 text-slate-100">
      <h2 className="text-lg font-bold">Ejercicio: useEffect + deps + AbortController</h2>
      <p className="mt-2 text-sm text-slate-400">
        Estación seleccionada: <strong className="text-white">{stationId}</strong>
      </p>

      <div className="mt-4 flex gap-2">
        {['001', '002', '003'].map(id => (
          <button
            key={id}
            onClick={() => setStationId(id)}
            className="rounded-md bg-slate-800 px-3 py-1.5 text-sm hover:bg-slate-700"
          >
            Estación {id}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-300">{content ?? 'Cargando...'}</p>
    </div>
  )
}

export default UseEffectDepsBugFix
