export function tokenHeader() {
    return {"token": localStorage.getItem("token")}
}