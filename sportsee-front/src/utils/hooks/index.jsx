import { useState, useEffect } from'react'



export function useFetch(urls) {

    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        if(!urls) return //Si url vide, le return est également vide

        setLoading(true)

        async function fetchData() {
            try {
                const response = await Promise.all(urls.map(url => fetch(url, { method: 'GET' })))
                const responseJSON = await Promise.all(response.map(e => e.json()))
                const data = responseJSON.map((e) => e.data)
                setData(data)
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


/*
export function useFetch(url) {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        if(!url) return //Si url vide, le return est également vide

        setLoading(true)

        async function fetchData() {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            } catch (err) {
                console.log(err)
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()

    }, [url])

    return { isLoading, data, error }
}*/