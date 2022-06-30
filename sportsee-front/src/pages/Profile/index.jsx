
import Welcome from "../../components/Welcome"
import ActivitySessionsBarChart from "../../components/ActivitySessionsBarChart"
import AverageSessionLineChart from "../../components/AverageSessionLineChart"
import PerformanceRadarChart from "../../components/PerformanceRadarChart"
import ScorePieChart from "../../components/ScorePieChart"
import EnergySourcesCount from "../../components/EnergySourcesCount"
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

    const userId = 12 //get from URL params
    
    const urls = [
        `http://localhost:3000/user/${userId}`,
        `http://localhost:3000/user/${userId}/activity`,
        `http://localhost:3000/user/${userId}/average-sessions`,
        `http://localhost:3000/user/${userId}/performance`,
        `http://localhost:3000/user/${userId}/today-score`,
        `http://localhost:3000/user/${userId}/key-data`
    ]

    const { data, isLoading, error } = useFetch(urls)
    
    if (!isLoading) {
        const user = data
        console.log("user", user)

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
                        <ScorePieChart todayScore={user.todayScore}
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