import { RadialBarChart, RadialBar } from 'recharts';
import PropTypes from 'prop-types'
import '../../styles/ScoreRadialBarChart.css'

function SRBCCustomLabel({ todayScore, ratio }) {
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

SRBCCustomLabel.propTypes = {
    todayScore: PropTypes.number.isRequired,
    ratio: PropTypes.number
}

function ScoreRadialBarChart({ todayScore, chartWrapper, ratio }) {
    const arrayScore = [
        {score: 1, fill: "#FFFFFF"}, //reference = 100%
        {score: todayScore, fill: "#FF0000"}
    ]

    return (
            <RadialBarChart
                width={(chartWrapper - 60) / 3}
                height={chartWrapper * 0.315}
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
                    label={<SRBCCustomLabel todayScore={todayScore} ratio={ratio} />}
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
    todayScore: PropTypes.number,
    chartWrapper: PropTypes.number.isRequired,
    ratio: PropTypes.number
}

ScoreRadialBarChart.defaultProps = {
    todayScore: 0
}

export default ScoreRadialBarChart