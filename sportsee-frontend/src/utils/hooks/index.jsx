import { useState, useEffect } from'react'
import axios from 'axios'

/**
 * Hook to launch mutli fetch request
 * @return { Object.<isLoading: Bool, data: Array, error: Bool> } - Object of state variables
 */
export function useFetch(urls) {

    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        if(!urls) return

        setLoading(true)

        /**
         * Send multi fetch requests using axios
         * And, according to the response, set the value of the state variables : data, isLoading, error
         * @async
         * @param { Object.<String> } urls
         */
        async function fetchData() {
            try {
                await axios
                .all(urls.map((url) => axios.get(url)))
                .then(responses => {
                    const rawData = [...responses]
                    const data = (rawData).map(el => el.data.data)
                    setData(data)
                })
            } catch (errors) {
                    setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()  

    }, [])

    return { isLoading, data, error }
}


/* function useFetch() before modifications following the project's presentation:
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
*/


/**
 * Hook to launch handleResize
 * @return { Object.<windowDimensions: Object> } - Object of state variable
 */
export function useHandleResize() {
    const [windowDimensions, setWindowDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })
    
    useEffect(() => {

        /**
         * Handle the event on resize:
         *   get the current height and width of the window
         *   and update the windowDimensions state variable
         */
        function handleResize() {
            setWindowDimensions({
            height: window.innerHeight,
            width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize)
        
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return { windowDimensions }
}