
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import PropTypes from 'prop-types'
import '../../styles/ActivitiesRadarChart.css'

function ActivitiesRadarChart({activities, chartWrapper, ratio}) {
    const kindNamesEN = activities.kind

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

    function customPolarAngleAxis({ payload, x, y, cx, cy, ...rest }) {
        return (
            <text
                {...rest}
                y={y + (y - 80) / 15}
                x={x + (x - cx) / 100}
                fontSize={`${0.75 * ratio}em`}
                fontWeight={500}
            >
                {kindToName(payload.value)}    
            </text> 
        )
    }

    return (
            <RadarChart
                width={(chartWrapper - 60) / 3}
                height={chartWrapper * 0.315}
                cx="50%"
                cy="50%"
                outerRadius="70%"
                data={[...activities.data].reverse()}
                >
                <PolarGrid stroke="#FFFFFF" radialLines={false} />
                <PolarAngleAxis dataKey="kind" tickFormatter={kindToName} stroke="#FFFFFF" tickLine={false} tick={props => customPolarAngleAxis(props)} />
                <Radar name="userActivities" dataKey="value" fill="#FF0101" fillOpacity={0.7}  />
            </RadarChart>
    )
}

ActivitiesRadarChart.propTypes = {
    activities: PropTypes.object
}

export default ActivitiesRadarChart