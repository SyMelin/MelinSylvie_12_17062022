import { useState, useEffect } from'react'
import { User } from '../../models/user'

/**
 * Send multi fetch requests in useEffect
 * @param { Object.<String> } urls
 * @return { Object.<isLoading: Bool, data: Array, error: Bool> } - Object of state variables
 */
export function useFetch(urls) {

    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        if(!urls) return //If url not defined, return nothing

        setLoading(true)

        async function fetchData() {
            try {
                const response = await Promise.all(urls.map(url => fetch(url, { method: 'GET' })))
                const responseJSON = await Promise.all(response.map(e => e.json()))
                const data = responseJSON.map((e) => e.data)
                setData(new User(data))// modification suite à soutenance
            } catch (err) {
                console.log('== error ==', err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()

    }, [])

    return { isLoading, data, error }
}