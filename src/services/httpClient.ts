export class HttpClient {
  constructor(private baseUrl: string) {}

  async get<T>(url: string): Promise<T> {
    const res = await fetch(`${this.baseUrl}${url}`)
    if (!res.ok) throw new Error(`Request failed: ${res.status}`)
    return res.json()
  }
}
