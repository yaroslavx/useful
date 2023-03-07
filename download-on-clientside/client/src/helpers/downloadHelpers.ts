export const downloadHelpers = {
    httpRequest: (url: string, method: string, payload: string, headers: Record<string, string>) => {
        const config: Record<string, string | object> = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        if (method.toLowerCase() === 'post' && payload && payload.length > 0) {
            config.body = JSON.stringify(payload)
        }

        if (headers && typeof headers === 'object' && Object.keys(headers).length > 0) {
            config.headers = headers
        }

        return fetch(url, config).then(res => {
            if (res.ok) {
                let data: Response | Promise<Response> = res

                if ('application/json' in Object.values(res.headers)) {
                    data = res.json()
                }
                return data
            }
            return Promise.reject(res)

        })
    }
}