import { tokenHeader } from "./util";
import { set } from "../app/features/error/errorSlice"
import { store } from "../app/store"

async function query(uri: string, defaultValue?: object, options?: RequestInit): Promise<object> {
  return new Promise(async (resolve) => {
    await fetch(process.env.REACT_APP_BASE_URL + uri, { headers: tokenHeader(), ...options })
      .then(response => {
        if (response.ok) {
          resolve(response.json())
        } else {
          store.dispatch(set(uri + " " + response.statusText + " (" + response.status + ")"))
          console.dir(response)
        }
      }, reason => {
        store.dispatch(set(reason.message))
        console.dir(reason);
        resolve(defaultValue || {})
      })
  })
}

export async function getTypes() {
  return await query("/types")
}

export async function moblist(): Promise<string[]> {
  return await query("/moblist", []) as string[]
}

export async function getMobSettings(identifier: string) {
  return await fetch(process.env.REACT_APP_BASE_URL + "/mobsettings/" + identifier, { headers: tokenHeader() })
    .then(response => response.json())
}

export async function createMobSettings(identifier: string) {
  return await fetch(process.env.REACT_APP_BASE_URL + "/mobsettings/" + identifier, { headers: tokenHeader(), method: "POST" })
}

export async function deleteMobSettings(identifier: string) {
  return await fetch(process.env.REACT_APP_BASE_URL + "/mobsettings/" + identifier, { headers: tokenHeader(), method: "DELETE" })
}
