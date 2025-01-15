class Http {
  static readonly baseUrl: string = "http://localhost:3000"

  static readonly defaultHeaders: { "Content-Type": string } = {
    "Content-Type": "application/json",
  }

  static async get(endpoint: string, headers?: object): Promise<Response> {
    const response: Response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "GET",
      headers: { ...this.defaultHeaders, ...headers },
    })

    if (response.status === 200) {
      return response
    }

    throw new Error()
  }

  static async post(
    endpoint: string,
    body: object,
    headers?: object,
  ): Promise<Response> {
    const response: Response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "POST",
      headers: { ...this.defaultHeaders, ...headers },
      body: JSON.stringify(body),
    })

    if (response.status === 201 || response.status === 422) {
      return response
    }

    throw new Error()
  }

  static async put(
    endpoint: string,
    body: object,
    headers?: object,
  ): Promise<Response> {
    const response: Response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: "PUT",
      headers: { ...this.defaultHeaders, ...headers },
      body: JSON.stringify(body),
    })

    if (response.status === 200 || response.status === 422) {
      return response
    }

    throw new Error()
  }
}

export default Http
