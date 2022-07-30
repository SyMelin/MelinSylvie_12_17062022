import PropTypes from 'prop-types'
import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import '../../styles/ActivitiesRadarChart.css'


/**
 * ActivitiesRadarChart properties
 * 
 * @typedef { Object } ARCProps
 * @prop { Object.<{ data: Array, kind: Object, userId: Integer }> } activities - Activities of the user
 * @prop { Number} lineChartWidth  - Length used as reference to handle the responsivity of the chart
 * @prop { Number } ratio  - Ratio used to handle the responsivity of the chart
 */

/**
 * React component: Radar chart of the user's activities
 * 
 * @type { React.FC<ARCProps> }
 * @returns { React.ReactElement }
 */
function ActivitiesRadarChart({ activities, lineChartWidth, ratio }) {

    /** @constant
    @type { Object } object of all activity's kinds in English
    */
    const kindNamesEN = activities.kind
    
    /** @constant
    @type { Object } conversion object of English word to French word
    */
    const kindNamesENtoFR = {
        cardio: 'Cardio',
        energy: 'Energie',
        endurance: 'Endurance',
        strength: 'Force',
        speed: 'Vitesse',
        intensity: 'Intensité'
    }
 
    /**
     * Return translation from English to French of the string set as 'kind' param
     * @function kindToName
     * @param { String } kind - kind of the activity
     * @returns { String }
     * */
    const kindToName = (kind) => {
        return kindNamesENtoFR[kindNamesEN[kind]]
    }

    
    /**
     * CustomPolarAngleAxisTick properties
     * 
     * @typedef { Object } CPAATProps
     * @prop { Object } payload
     * @prop { Number } x
     * @prop { Number } y
     * @prop { Number } cx
     * @prop { Number } cy
     * 
     */

    /**
     * React component: Customised polar angle axis tick for the radar chart
     * 
     * @type { React.FC<CPAATProps> }
     * @returns { React.ReactElement }
     */
    function CustomPolarAngleAxisTick({ payload, x, y, cx, cy, ...rest }) {
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
                width={(lineChartWidth - 60) / 3}
                height={lineChartWidth * 0.315}
                cx="50%"
                cy="50%"
                outerRadius="70%"
                data={[...activities.data].reverse()}
                >
                <PolarGrid
                    stroke="#FFFFFF"
                    radialLines={false}
                />
                <PolarAngleAxis
                    dataKey="kind"
                    tickFormatter={kindToName}
                    stroke="#FFFFFF"
                    tickLine={false}
                    tick={<CustomPolarAngleAxisTick />}
                />
                <Radar
                    name="userActivities"
                    dataKey="value"
                    fill="#FF0101"
                    fillOpacity={0.7}
                />
            </RadarChart>
    )
}

ActivitiesRadarChart.propTypes = {
    /** Activities of the user */ 
    activities: PropTypes.object.isRequired,
    /** Length used as reference to handle the responsivity of the chart */
    lineChartWidth: PropTypes.number.isRequired,
    /** Ratio used to handle the responsivity of the chart */
    ratio: PropTypes.number
}

export default ActivitiesRadarChart