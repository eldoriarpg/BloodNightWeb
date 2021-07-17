import { useEffect } from "react"
import { useAppDispatch } from './app/hooks'
import { set, reset } from './app/features/error/errorSlice'
import { getTypes, moblist } from "./api/base"

function App() {
  useEffect(() => {
    (async () => {
      console.log(await moblist())
    })()
  })

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>
        <p>🧛 Blood Night Web</p>
        <p>{window.location.hash}</p>
      </div>
    </div>
  );
}

export default App;
