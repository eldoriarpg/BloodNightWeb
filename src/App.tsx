// import { useEffect } from 'react'
// import { getTypes, moblist } from './api/base'

function App() {
  if (!window.location.hash) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>
          <h1 className="mb-2 text-2xl font-bold tracking-tight">🧛 Blood Night Web</h1>
          <p>
            Use the link provided by the <u>Blood Night Plugin</u> ingame.
          </p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>
          <h1 className="mb-2 text-2xl font-bold tracking-tight">🧛 Blood Night Web</h1>
          <p>TODO: Editor</p>
        </div>
      </div>
    )
  }
}

export default App
