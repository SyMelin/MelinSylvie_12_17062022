import React from "react"
import Welcome from "../../components/Welcome"
import ActivitySessionsBarChart from "../../components/ActivitySessionsBarChart"
import AverageSessionLineChart from "../../components/AverageSessionLineChart"
import PerformanceRadarChart from "../../components/PerformanceRadarChart"
import EnergySourcesCount from "../../components/EnergySourcesCount"
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS } from '../../utils/data/data'
import '../../styles/Profile.css'

const userName = USER_MAIN_DATA[0].userInfos.firstName
const todayScore = USER_MAIN_DATA[0].todayScore
const keyData = USER_MAIN_DATA[0].keyData
const activitySessions = USER_ACTIVITY[0].sessions
const averageSessions = USER_AVERAGE_SESSIONS[0].sessions

function Profile() {
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
                </div>
                <div className="graph4">Score</div>  
            </div>
            <EnergySourcesCount
                keyData={keyData}
            />
        </div>
    )
}

export default Profile