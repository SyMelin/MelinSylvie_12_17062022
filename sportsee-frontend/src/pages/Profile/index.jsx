
import Welcome from "../../components/Welcome"
import ActivitySessionsBarChart from "../../components/ActivitySessionsBarChart"
import AverageSessionLineChart from "../../components/AverageSessionLineChart"
import PerformanceRadarChart from "../../components/PerformanceRadarChart"
import ScoreRadialBarChart from "../../components/ScoreRadialBarChart"
import EnergySourcesCount from "../../components/EnergySourcesCount"
import urls from "../../utils/constantes/urls"
import { useFetch } from '../../utils/hooks'
import '../../styles/Profile.css'

function Profile() {

    //const {userId}  = useParams()
    const {userId} = {userId: 12} //get from URL params
    const { data, isLoading, error } = useFetch(Object.values(urls(userId)))

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
                <div className="wrapper">
                    <div className="graph1">
                        <ActivitySessionsBarChart activitySessions={user.activity.sessions}/>
                    </div>
                    <div className="graph2">
                        <AverageSessionLineChart averageSessions={user.averageSessions.sessions}/>
                    </div>
                    <div className="graph3">
                        <PerformanceRadarChart performance={user.performance} />
                    </div>
                    <div className="graph4">
                        <ScoreRadialBarChart todayScore={user.todayScore}
                        /> 
                    </div>  
                </div>
                <EnergySourcesCount
                    keyData={user.keyData}
                />
            </div>
        )
    } 
}

export default Profile