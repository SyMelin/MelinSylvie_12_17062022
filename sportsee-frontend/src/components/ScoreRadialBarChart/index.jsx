import { RadialBarChart, RadialBar } from 'recharts';
import PropTypes from 'prop-types'
import '../../styles/ScoreRadialBarChart.css'

function SRBCCustomLabel({todayScore}) {
    return (
        <g>
            <foreignObject x="20%" y="20%" width="60%" height="60%">
            <div className='SRBCCustomLabel'>
               <p className='SRBCscore'>{todayScore * 100}%</p>
               <p className='SRBCtext'>de votre<br />objectif</p> 
            </div>
            </foreignObject>
        </g>
    ) 
}

function ScoreRadialBarChart({todayScore, chartWrapper}) {
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
                    label={<SRBCCustomLabel todayScore={todayScore} />}
                >
                </RadialBar>
                <text x="30" y="24" dominantBaseline="hanging" fontSize="0.9375em" fontWeight="500">Score</text>
            </RadialBarChart>
    )
}

ScoreRadialBarChart.propTypes = {
    todayScore: PropTypes.number
}

ScoreRadialBarChart.defaultProps = {
    todayScore: 0
}

export default ScoreRadialBarChart