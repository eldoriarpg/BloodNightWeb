export function tokenHeader(): HeadersInit {
    return [["token", localStorage.getItem("token") || ""]]
}