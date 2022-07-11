import { useEffect, useState } from "react"
import Welcome from "../../components/Welcome"
import ChartWrapper from "../../components/ChartWrapper"
import EnergySourcesCount from "../../components/EnergySourcesCount"
import urls from "../../utils/constantes/urls"
import { useFetch } from '../../utils/hooks'
import '../../styles/Profile.css'

function Profile() {

    //const {userId}  = useParams()
    const {userId} = {userId: 12} //get from URL params
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
        const [ mainData, activity, averageSessions, activities, todayScore, keyData ] = data
        const user = { mainData, activity, averageSessions, activities, todayScore, keyData }

        return (
            <div className="dashboard">
                <div className="dashboardInner">
                    <Welcome
                        userName={user.mainData.userInfos.firstName}
                        todayScore={user.todayScore}
                    />
                    <div className="numbersWrapper">
                        <ChartWrapper
                            user={user}
                            dimensions={dimensions}
                        />
                        <EnergySourcesCount
                            keyData={user.keyData}
                        />
                    </div>
                </div>
            </div>
        )
    } 
}

export default Profile