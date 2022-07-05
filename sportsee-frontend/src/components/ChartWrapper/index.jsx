import ActivitySessionsBarChart from "../../components/ActivitySessionsBarChart"
import AverageSessionLineChart from "../../components/AverageSessionLineChart"
import PerformanceRadarChart from "../../components/PerformanceRadarChart"
import ScoreRadialBarChart from "../../components/ScoreRadialBarChart"


function ChartWrapper({ user, dimensions }) {
    console.log(dimensions.width)
    let chartWrapper =  dimensions.width * 0.55
 return (
    <div className="wrapper" style={{width:ChartWrapper}}>
        <div className="graph1">
            <ActivitySessionsBarChart activitySessions={user.activity.sessions} chartWrapper={chartWrapper} />
        </div>
        <div className="graph2">
            <AverageSessionLineChart averageSessions={user.averageSessions.sessions} chartWrapper={chartWrapper} dimensions={dimensions}/>
        </div>
        <div className="graph3">
            <PerformanceRadarChart performance={user.performance} chartWrapper={chartWrapper} dimensions={dimensions} />
        </div>
        <div className="graph4">
            <ScoreRadialBarChart todayScore={user.todayScore} chartWrapper={chartWrapper} dimensions={dimensions} /> 
        </div>  
    </div>
 )
}

export default ChartWrapper