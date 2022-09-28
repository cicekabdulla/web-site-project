'use strict'

const http = () => {
    const request = async (url, method = 'GET', body = null, headers = { "Content-Type": "application/json" }) => {
        const response = await fetch(url, { method, body, headers })

        if (!response.ok) {

            throw new Error(`Could not fetch ${response.url}`)
        }

        return await response.json();
        
    }

    return { request }
}
export default http;
