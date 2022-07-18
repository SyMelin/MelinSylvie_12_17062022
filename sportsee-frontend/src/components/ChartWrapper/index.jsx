import PropTypes from 'prop-types'
import ActivitySessionsBarChart from "../../components/ActivitySessionsBarChart"
import AverageSessionLineChart from "../../components/AverageSessionLineChart"
import ActivitiesRadarChart from "../../components/ActivitiesRadarChart"
import ScoreRadialBarChart from "../../components/ScoreRadialBarChart"
import EnergySourcesCount from "../../components/EnergySourcesCount"
import "../../styles/ChartWrapper.css"


function ChartWrapper({ user, dimensions }) {
    //console.log(dimensions.width)
    let chartWrapper =  dimensions.width * 0.58
    const ratio = chartWrapper / 835 //835px chartWrapper's width on 1440px website mock-up

    return (
        <div className="chartWrapper">
            <div className="chart1">
                <ActivitySessionsBarChart
                    activitySessions={user.activity.sessions}
                    chartWrapper={chartWrapper}
                    ratio={ratio}
                />
            </div>
            <div className="chart2">
                <AverageSessionLineChart
                    averageSessions={user.averageSessions.sessions}
                    chartWrapper={chartWrapper}
                    ratio={ratio}
                />
            </div>
            <div className="chart3">
                <ActivitiesRadarChart
                    activities={user.activities}
                    chartWrapper={chartWrapper}
                    ratio={ratio}
                />
            </div>
            <div className="chart4">
                <ScoreRadialBarChart
                    todayScore={user.todayScore}
                    chartWrapper={chartWrapper}
                    ratio={ratio}
                /> 
            </div>
            <EnergySourcesCount
                keyData={user.keyData}
                chartWrapper={chartWrapper}
                dimensions={dimensions}
            />
        </div>
    )
}

ChartWrapper.propTypes = {
    user: PropTypes.object.isRequired,
    dimensions: PropTypes.object
}

export default ChartWrapper