import React from "react"
import Welcome from "../../components/Welcome"
import ActivitySessionsBarChart from "../../components/ActivitySessionsBarChart"
import AverageSessionLineChart from "../../components/AverageSessionLineChart"
import PerformanceRadarChart from "../../components/PerformanceRadarChart"
import ScorePieChart from "../../components/ScorePieChart"
import EnergySourcesCount from "../../components/EnergySourcesCount"
//import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../utils/data/data'
import { useFetch } from '../../utils/hooks'
import '../../styles/Profile.css'
/*
const userMainData = USER_MAIN_DATA[0]
const userName = USER_MAIN_DATA[0].userInfos.firstName
const todayScore = USER_MAIN_DATA[0].todayScore
const keyData = USER_MAIN_DATA[0].keyData
const activitySessions = USER_ACTIVITY[0].sessions
const averageSessions = USER_AVERAGE_SESSIONS[0].sessions
const performance = USER_PERFORMANCE[0]*/

function Profile() {

    const { data, isLoading, error } = useFetch('http://localhost:3000/user/12')
    
    if (isLoading === false) {
        const userData = data.data
        console.log("userData", userData)

        return <div>{userData.todayScore}</div>
    }

/*
    return (
        <div className="dashboard">
            <Welcome
                userName={userName}
                todayScore={todayScore}
            />
            <div className="wrapper">
                <div className="graph1">
                    <ActivitySessionsBarChart activitySessions={activitySessions}/>
                </div>
                
                <div className="graph2">
                    <AverageSessionLineChart averageSessions={averageSessions}/>
                </div>
                <div className="graph3">
                    <PerformanceRadarChart performance={performance} />
                </div>
                <div className="graph4">
                    <ScorePieChart todayScore={todayScore} />
                </div>  
            </div>
            <EnergySourcesCount
                keyData={keyData}
            />
        </div>
    )*/
}

export default Profile