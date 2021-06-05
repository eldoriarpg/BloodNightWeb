import {tokenHeader} from "./util";

export async function getTypes() {
    return await fetch(process.env.REACT_APP_BASE_URL + "/types")
        .then(response => response.json())
}

export async function moblist() {
    return await fetch(process.env.REACT_APP_BASE_URL + "/moblist", {headers: tokenHeader()})
        .then(response => response.json())
}

export async function getMobSettings(identifier) {
    return await fetch(process.env.REACT_APP_BASE_URL + "/mobsettings/" + identifier, {headers: tokenHeader()})
        .then(response => response.json())
}

export async function createMobSettings(identifier) {
    return await fetch(process.env.REACT_APP_BASE_URL + "/mobsettings/" + identifier, {headers: tokenHeader(), method: "POST"})
}

export async function deleteMobSettings(identifier) {
    return await fetch(process.env.REACT_APP_BASE_URL + "/mobsettings/" + identifier, {headers: tokenHeader(), method: "DELETE"})
}
