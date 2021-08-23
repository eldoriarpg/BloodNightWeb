import { useEffect } from 'react'
import { getMobSetting, getTypes, moblist } from '../../api/base'

export default function Editor() {
  useEffect(() => {
    ;(async () => {
      let types = await getTypes()
      console.log(types)
      let mobs = await moblist()
      console.log(mobs)
      if (mobs.length > 0) {
        let mobsettings = await getMobSetting(mobs[0]!)
        console.log(mobsettings)
      }
    })()
  }, [])

  return <div>Editor</div>
}
