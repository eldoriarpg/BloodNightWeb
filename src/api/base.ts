import { tokenHeader } from './util'
import { set } from '../app/features/error/errorSlice'
import { store } from '../app/store'
import { Types } from './declarations'

async function query<T>(uri: string, defaultValue?: T, options?: RequestInit): Promise<T> {
  return new Promise<T>(async (resolve, reject) => {
    await fetch(process.env.REACT_APP_BASE_URL + uri, { headers: tokenHeader(), ...options }).then(
      (response) => {
        if (response.ok) {
          resolve(response.json())
        } else {
          store.dispatch(set(uri + ' ' + response.statusText + ' (' + response.status + ')'))
          console.dir(response)
        }
      },
      (reason) => {
        store.dispatch(set(reason.message))
        console.dir(reason)
        if (defaultValue) resolve(defaultValue)
        else reject(reason)
      }
    )
  })
}

export async function getTypes(): Promise<Types> {
  return (await query<Types>('/types')) as Types
}

export async function moblist(): Promise<string[]> {
  return (await query('/moblist', [])) as string[]
}

export async function getMobSettings(identifier: string) {
  return await fetch(process.env.REACT_APP_BASE_URL + '/mobsettings/' + identifier, {
    headers: tokenHeader()
  }).then((response) => response.json())
}

export async function createMobSettings(identifier: string) {
  return await fetch(process.env.REACT_APP_BASE_URL + '/mobsettings/' + identifier, {
    headers: tokenHeader(),
    method: 'POST'
  })
}

export async function deleteMobSettings(identifier: string) {
  return await fetch(process.env.REACT_APP_BASE_URL + '/mobsettings/' + identifier, {
    headers: tokenHeader(),
    method: 'DELETE'
  })
}
