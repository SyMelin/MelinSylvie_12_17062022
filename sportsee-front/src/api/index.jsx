//import { useFetch } from '../../utils/hooks'
import { useState, useEffect } from'react'

//const { data, isLoading, error } = useFetch(`http://localhost:3000/user/?${id}`, {type: "GET"})
    /*
    if (!isLoading) {
        const userData = data.data
        console.log("userData", userData)

        return <div>{userData.todayScore}</div>
    }*/
/*
    const [[a, b], setData] = useState([])

    const [c, d] = [{data : {id : 12}}, {data : {todayScore : 0.12}}]
    setData([c, d].map(e => e.data))
    console.log("dataTest", [a, b])
    */

   
const id = 12 //get from URL params

export function useMainData() {
    const [mainData, setMainData] = useState({})

    useEffect(() => {
        async function fetchMainData() {
            try {
                const response = await fetch( `http://localhost:3000/user/${id}`)
                const json = await response.json()
                //  console.log(json)
                setMainData(json.data)
                //  console.log("mainData", mainData)
            } catch (err) {
                console.log(err)
            } 
        }
        fetchMainData()
    }, [])

    return mainData
}

export function useActivity() {
    const [activity, setActivity] = useState({})

    useEffect(() => {
        async function fetchMainData() {
            try {
                const response = await fetch( `http://localhost:3000/user/${id}/activity`)
                const json = await response.json()
                setActivity(json.data)
            } catch (err) {
                console.log(err)
            } 
        }
        fetchMainData()
    }, [])

    return activity
}



/*
useEffect(() => {
    async function fetchData() {
        const urls = [
            `http://localhost:3000/user/${id}`,
            `http://localhost:3000/user/${id}/activity`,
            //  `http://localhost:3000/user/${id}/average-sessions`,
            //   `http://localhost:3000/user/${id}/performance`,
            // `http://localhost:3000/user/${id}/key-data`
            // `http://localhost:3000/user/${id}/today-score`,

        ]
        try {
            const response = await Promise.all(urls.map(e => fetch(e)))
            const json = await Promise.all(response.map(e => e.json()))
            console.log(json)
            setData(json.map(e => e.data))
            //console.log("data", [mainData, activity])
            // console.log("activity", activity.data)
            //  console.log("averageSessions", averageSessions.data)
            //  console.log("activities", activities.data )
        } catch (err) {
            console.log(err)
        } 
    }
    fetchData()
    //console.log("data3", data)
}, [])*/