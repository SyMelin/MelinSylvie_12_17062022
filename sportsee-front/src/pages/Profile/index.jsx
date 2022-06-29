
import Welcome from "../../components/Welcome"
import ActivitySessionsBarChart from "../../components/ActivitySessionsBarChart"
import AverageSessionLineChart from "../../components/AverageSessionLineChart"
import PerformanceRadarChart from "../../components/PerformanceRadarChart"
import ScorePieChart from "../../components/ScorePieChart"
import EnergySourcesCount from "../../components/EnergySourcesCount"
//import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from '../../utils/data/data'
import { useMainData, useActivity } from '../../api'
import '../../styles/Profile.css'
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
    const userMainData = useMainData()
    console.log(userMainData)
    const activity = useActivity()
    
    if (userMainData.userInfos && activity) {
        return (
            <div className="dashboard">
                <Welcome
                    userName={0.12}
                    todayScore={userMainData.todayScore} //Route!!!
                />
                <div className="wrapper">
                    <div className="graph1">
                        <ActivitySessionsBarChart activitySessions={activity.sessions}/>
                    </div>
                </div>
            </div>
        )
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