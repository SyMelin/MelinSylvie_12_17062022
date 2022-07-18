import PropTypes from 'prop-types'
import ActivitySessionsBarChart from "../ActivitySessionsBarChart"
import AverageSessionLineChart from "../AverageSessionLineChart"
import ActivitiesRadarChart from "../ActivitiesRadarChart"
import ScoreRadialBarChart from "../ScoreRadialBarChart"
import EnergySourcesList from "../EnergySourcesList"
import "../../styles/NumbersWrapper.css"


function NumbersWrapper({ user, windowDimensions }) {
    //console.log(dimensions.width)
    const lineChartWidth =  windowDimensions.width * 0.58 //line chart is 58% on 1440px website mock-up
    const ratio = lineChartWidth / 835 //line chart's width is 835px on 1440px website mock-up

    return (
        <div className="numbersWrapper">
            <div className="chart1">
                <ActivitySessionsBarChart
                    activitySessions={user.activity.sessions}
                    lineChartWidth={lineChartWidth}
                    ratio={ratio}
                />
            </div>
            <div className="chart2">
                <AverageSessionLineChart
                    averageSessions={user.averageSessions.sessions}
                    lineChartWidth={lineChartWidth}
                    ratio={ratio}
                />
            </div>
            <div className="chart3">
                <ActivitiesRadarChart
                    activities={user.activities}
                    lineChartWidth={lineChartWidth}
                    ratio={ratio}
                />
            </div>
            <div className="chart4">
                <ScoreRadialBarChart
                    todayScore={user.todayScore}
                    lineChartWidth={lineChartWidth}
                    ratio={ratio}
                /> 
            </div>
            <EnergySourcesList
                keyData={user.keyData}
                lineChartWidth={lineChartWidth}
                windowDimensions={windowDimensions}
            />
        </div>
    )
}

NumbersWrapper.propTypes = {
    user: PropTypes.object.isRequired,
    windowDimensions: PropTypes.object
}

export default NumbersWrapper