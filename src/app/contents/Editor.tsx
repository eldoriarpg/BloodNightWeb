import { useEffect } from 'react'
import { getTypes } from '../../api/base'

export default function Editor() {
  useEffect(() => {
    ;(async () => {
      console.dir(await getTypes());
      //console.log(types.)
    })()
  }, [])

  return <div>Editor</div>
}
