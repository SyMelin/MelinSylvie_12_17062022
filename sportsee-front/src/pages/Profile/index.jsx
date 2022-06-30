
import Welcome from "../../components/Welcome"
import ActivitySessionsBarChart from "../../components/ActivitySessionsBarChart"
import AverageSessionLineChart from "../../components/AverageSessionLineChart"
import PerformanceRadarChart from "../../components/PerformanceRadarChart"
import ScoreRadialBarChart from "../../components/ScoreRadialBarChart"
import EnergySourcesCount from "../../components/EnergySourcesCount"
import urls from "../../utils/constantes/urls"
import { useFetch } from '../../utils/hooks'
import '../../styles/Profile.css'

//import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../utils/data/data'
/*
const userMainData = USER_MAIN_DATA[0]
const userName = USER_MAIN_DATA[0].userInfos.firstName
const todayScore = USER_MAIN_DATA[0].todayScore
const keyData = USER_MAIN_DATA[0].keyData
const activitySessions = USER_ACTIVITY[0].sessions
const averageSessions = USER_AVERAGE_SESSIONS[0].sessions
const performance = USER_PERFORMANCE[0]
*/


function Profile() {

    const { data, isLoading, error } = useFetch(Object.values(urls))
  //  console.log(Object.keys(urls))
    
    if (!isLoading) {
        const user = data
       // console.log("user", user)

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