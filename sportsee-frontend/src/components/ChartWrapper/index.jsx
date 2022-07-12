import ActivitySessionsBarChart from "../../components/ActivitySessionsBarChart"
import AverageSessionLineChart from "../../components/AverageSessionLineChart"
import ActivitiesRadarChart from "../../components/ActivitiesRadarChart"
import ScoreRadialBarChart from "../../components/ScoreRadialBarChart"
import EnergySourcesCount from "../../components/EnergySourcesCount"
import "../../styles/ChartWrapper.css"


function ChartWrapper({ user, dimensions }) {
    //console.log(dimensions.width)
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
                <ActivitiesRadarChart activities={user.activities} chartWrapper={chartWrapper} dimensions={dimensions} />
            </div>
            <div className="chart4">
                <ScoreRadialBarChart todayScore={user.todayScore} chartWrapper={chartWrapper} dimensions={dimensions} /> 
            </div>
            <EnergySourcesCount
                keyData={user.keyData}
                chartWrapper={chartWrapper}
                dimensions={dimensions}
            />
        </div>
    )
}

export default ChartWrapper