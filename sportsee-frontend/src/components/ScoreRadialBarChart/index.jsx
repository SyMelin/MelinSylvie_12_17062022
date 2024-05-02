import { RadialBarChart, RadialBar } from 'recharts';
import PropTypes from 'prop-types'
import '../../styles/ScoreRadialBarChart.css'


/**
 * ScoreRadialBarChartCustomLabel properties
 * 
 * @typedef { Object } SRBCCLProps
 * @prop { Number{0-1} } todayScore  Today score of the user
 * @prop { Number } ratio Ratio used to handle the responsivity of the chart
 */

/**
 * React component: a customised Label for radial bar chart
 * 
 * @type { React.FC<SRBCCLProps> }
 * @returns { React.ReactElement }
 */
function ScoreRadialBarChartCustomLabel({ todayScore, ratio }) {
    return (
        <g>
            <foreignObject x="20%" y="20%" width="60%" height="60%">
            <div className='SRBCCustomLabel'>
               <p className='SRBCscore' style={{ fontSize: 26 * ratio }} >{todayScore * 100}%</p>
               <p className='SRBCtext' style={{ fontSize: 16 * ratio }}>de votre<br />objectif</p> 
            </div>
            </foreignObject>
        </g>
    ) 
}

ScoreRadialBarChartCustomLabel.propTypes = {
    /** Today score of the user */
    todayScore: PropTypes.number.isRequired,
    /** Ratio used to handle the responsivity of the chart */
    ratio: PropTypes.number
}


/**
 * ScoreRadialBarChart properties
 * 
 * @typedef { Object } ASBCProps
 * @prop { Number{0-1} } todayScore Today score of the user
 * @prop { Number} lineChartWidth Length used as reference to handle the responsivity of the chart
 * @prop { Number } ratio Ratio used to handle the responsivity of the chart
 */

/**
 * React component: a radial bar chart of the user's score
 * 
 * @type { React.FC<ASBCProps> }
 * @returns { React.ReactElement }
 */
function ScoreRadialBarChart({ todayScore=0, lineChartWidth, ratio }) {
    const arrayScore = [
        {score: 1, fill: "#FFFFFF"}, //reference = 100%
        {score: todayScore, fill: "#FF0000"}
    ]

    return (
            <RadialBarChart
                width={(lineChartWidth - 60) / 3}
                height={lineChartWidth * 0.315}
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                barSize={10}
                data={arrayScore}
                clockwise={true}
                startAngle={570}
                endAngle={210}
                >
                <RadialBar
                    dataKey="score"
                    cornerRadius={50}
                    label={<ScoreRadialBarChartCustomLabel todayScore={todayScore} ratio={ratio} />}
                >
                </RadialBar>
                <text
                    x="10%"
                    y="10%"
                    dominantBaseline="hanging"
                    fontSize="0.9375em"
                    fontWeight="500"
                >
                    Score
                </text>
            </RadialBarChart>
    )
}

ScoreRadialBarChart.propTypes = {
    /** Today score of the user */
    todayScore: PropTypes.number,
    /** Length used as reference to handle the responsivity of the chart */
    lineChartWidth: PropTypes.number.isRequired,
    /** Ratio used to handle the responsivity of the chart */
    ratio: PropTypes.number
}

// ScoreRadialBarChart.defaultProps = {
//     todayScore: 0
// }
// defaultProps on function components will become unsupported in future versions of React.

export default ScoreRadialBarChart