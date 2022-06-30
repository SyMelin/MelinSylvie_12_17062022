import { PieChart, Pie, Sector, Cell, Label, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'
import '../../styles/ScorePieChart.css'

function SPCCustomLabel({todayScore}) {
    return (
        <g>
            <foreignObject x={85} y={105} width={100} height={100}>
            <div className='SPCCustomLabel'>
               <p className='SPCscore'>{todayScore * 100}%</p>
               <p className='SPCtext'>de votre objectif</p> 
            </div>
            </foreignObject>
        </g>
    )
    
}

function ScorePieChart({todayScore}) {
    const arrayScore = [{score: todayScore}, {score: 1 - todayScore}]
    const colors = ["#FF0000", "#FBFBFB"];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
                <Pie
                    data={arrayScore}
                    cx={125}
                    cy={125}
                    innerRadius={75}
                    outerRadius={90}
                    dataKey="score"
                    startAngle={90}
                    endAngle={450}
                    stroke='#FBFBFB'
                >
                    {arrayScore.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]}  cornerRadius={50} />
                    ))}
                
                    <Label content={<SPCCustomLabel todayScore={todayScore} />} position="center" />
                </Pie>
                <text x="30" y="24" dominantBaseline="hanging" fontSize="15" fontWeight="500">Score</text>
            </PieChart>      
       </ResponsiveContainer>
    )
}

ScorePieChart.propTypes = {
    todayScore: PropTypes.number
}

ScorePieChart.defaultProps = {
    todayScore: 0
}

export default ScorePieChart