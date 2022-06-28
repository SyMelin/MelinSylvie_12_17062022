
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, PolarRadiusAxis } from 'recharts'
import PropTypes from 'prop-types'

function PerformanceRadarChart({performance}) {
    const kindNamesEN = performance.kind

    const kindNamesENtoFR ={
        cardio: 'Cardio',
        energy: 'Energie',
        endurance: 'Endurance',
        strength: 'Force',
        speed: 'Vitesse',
        intensity: 'Intensité'
    }
 
    const kindToName = (kind) => {
        return kindNamesENtoFR[kindNamesEN[kind]]
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={[...performance.data].reverse()} >
                <PolarGrid stroke="#FFFFFF" radialLines={false} />
                <PolarAngleAxis dataKey="kind" tickFormatter={kindToName} stroke="#FFFFFF" tickLine={false}  tick={{fill: '#FFFFFF', fontSize:'12', fontWeight:'500'}} />
                <Radar name="userPerformance" dataKey="value" fill="#FF0101" fillOpacity={0.7}  />
            </RadarChart>
        </ResponsiveContainer>  
    )
}

PerformanceRadarChart.propTypes = {
    performance: PropTypes.object
}

export default PerformanceRadarChart