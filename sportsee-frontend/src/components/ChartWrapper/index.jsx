import ActivitySessionsBarChart from "../../components/ActivitySessionsBarChart"
import AverageSessionLineChart from "../../components/AverageSessionLineChart"
import PerformanceRadarChart from "../../components/PerformanceRadarChart"
import ScoreRadialBarChart from "../../components/ScoreRadialBarChart"


function ChartWrapper({ user, dimensions }) {
    console.log(dimensions.width)
    let chartWrapper =  dimensions.width * 0.58
 return (
    <div className="chartWrapper" style={{width:ChartWrapper}}>
        <div className="chart1">
            <ActivitySessionsBarChart activitySessions={user.activity.sessions} chartWrapper={chartWrapper} dimensions={dimensions} />
        </div>
        <div className="chart2">
            <AverageSessionLineChart averageSessions={user.averageSessions.sessions} chartWrapper={chartWrapper} dimensions={dimensions}/>
        </div>
        <div className="chart3">
            <PerformanceRadarChart performance={user.performance} chartWrapper={chartWrapper} dimensions={dimensions} />
        </div>
        <div className="chart4">
            <ScoreRadialBarChart todayScore={user.todayScore} chartWrapper={chartWrapper} dimensions={dimensions} /> 
        </div>  
    </div>
 )
}

export default ChartWrapper