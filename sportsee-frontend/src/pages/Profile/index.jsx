import { useEffect, useState } from "react"
import Welcome from "../../components/Welcome"
import ChartWrapper from "../../components/ChartWrapper"
import EnergySourcesCount from "../../components/EnergySourcesCount"
import urls from "../../utils/constantes/urls"
import { useFetch } from '../../utils/hooks'
import '../../styles/Profile.css'

function Profile() {

    //const {userId}  = useParams()
    const {userId} = {userId: 18} //get from URL params
    const { data, isLoading, error } = useFetch(Object.values(urls(userId)))

    /* EVENT ON RESIZE */
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
    })
    useEffect(() => {
        function handleResize() {
            setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
            })
            //console.log('test', dimensions )
        }
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })


    if (error) {
        return <div>Error: Something went wrong</div>
    }
    
    if (!isLoading) {
        const [ mainData, activity, averageSessions, performance, todayScore, keyData ] = data
        const user = { mainData, activity, averageSessions, performance, todayScore, keyData }

        return (
            <div className="dashboard">
                <Welcome
                    userName={user.mainData.userInfos.firstName}
                    todayScore={user.todayScore}
                />
                <ChartWrapper
                    user={user}
                    dimensions={dimensions}
                />
                <EnergySourcesCount
                    keyData={user.keyData}
                />
            </div>
        )
    } 
}

export default Profile