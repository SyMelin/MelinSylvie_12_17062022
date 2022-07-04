import { RadialBarChart, RadialBar, Label, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'
import '../../styles/ScoreRadialBarChart.css'

function SRBCCustomLabel({todayScore}) {
    return (
        <g>
            <foreignObject x="23%" y="23%" width="54%" height="54%">
            <div className='SRBCCustomLabel'>
               <p className='SRBCscore'>{todayScore * 100}%</p>
               <p className='SRBCtext'>de votre<br />objectif</p> 
            </div>
            </foreignObject>
        </g>
    ) 
}

function ScoreRadialBarChart({todayScore, dimensions}) {
    const arrayScore = [
        {score: 1, fill: "#FFFFFF"}, //reference = 100%
        {score: todayScore, fill: "#FF0000"}
    ]

    return (
            <RadialBarChart
               width={dimensions.width * 0.18}
                height={400}
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
                <text x="30" y="24" dominantBaseline="hanging" fontSize="15" fontWeight="500">Score</text>
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