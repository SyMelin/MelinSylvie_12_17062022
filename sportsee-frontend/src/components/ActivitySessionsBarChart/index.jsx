import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import PropTypes from 'prop-types'
import '../../styles/ActivitySessionsBarChart.css'

function CustomTooltipBarChart({ payload, active }) {
    if (active) {
        return (
            <div className='customTooltipBarChart'>
                <p className='cTBC__text'>{`${payload[0].value}kg`}</p>
                <p className='cTBC__text'>{`${payload[1].value}Kcal`}</p>
            </div>

        )
    }
}

function ActivitySessionsBarChart({activitySessions}) {
    const numberOfDay = (day) => { 
        return parseInt((day.split('-'))[2], 10)
    }

    const [cursorX, setCursorX] = useState(-1000)
    const onMouseMove = hoveredData => {
    // console.log(hoveredData);
        if (hoveredData && hoveredData.activeCoordinate) {
            const positionX =  hoveredData.activeCoordinate.x
            setCursorX(positionX)
            // console.log(positionX)
        }
    };

    const onMouseOut = () => {
        setCursorX(-1000)
    };

    return (
        <ResponsiveContainer>
            <BarChart
                data={activitySessions}/*width={835} height={320}*/
                margin={{top: 95, right: 29, left: 0, bottom: 23}}
                barGap={8}
                onMouseMove={onMouseMove}
                onMouseOut={onMouseOut}
                >
                <CartesianGrid stroke="#DEDEDE" strokeDasharray="2 2 2" vertical={false} />
                <XAxis dataKey="day" tickFormatter={numberOfDay} padding={{ left: -45, right: -45 }} stroke="#DEDEDE" tick={{fill: '#9B9EAC', fontSize:'14', fontWeight:'500'}} dy={16} />
                <rect width={56} height="100%" x={cursorX - 56/2} y={0} fill= "#C4C4C4" opacity={0.5} />
                <YAxis yAxisId="left" orientation="right" axisLine={false} tickLine={false} tick={{fill: '#9B9EAC', fontSize:'14', fontWeight:'500'}} type="number" domain={['dataMin - 1', 'dataMax + 1']} dx={45} />
                <YAxis yAxisId="right" orientation="left" axisLine={false} tickLine={false} tick={false} />
                <Tooltip offset={20} cursor={false} /*cursor={{ fill: '#C4C4C4', opacity: 0.5, width: 56 }}*/ content={<CustomTooltipBarChart />} />
                <Legend
                    iconType='circle'
                    iconSize='8'
                    verticalAlign='middle'
                    wrapperStyle={{ top: 24, left: 200, lineHeight: '40px', fontSize: '14', fontWeight: 500 }}
                    formatter={(value) => <span style={{color: '#74798C'}}>{value}</span>}
                    />
                <Bar yAxisId="left" dataKey="kilogram" name="Poids (kg)" barSize={7} radius={[3, 3, 0, 0]} fill="#282D30" />
                <Bar yAxisId="right" dataKey="calories" name="Calories brulées (kCal)" barSize={7} radius={[3, 3, 0, 0]} fill="#E60000" />
                <text x="32" y="24" dominantBaseline="hanging" fontSize="15" fontWeight="500">Activité quotidienne</text>
            </BarChart>     
        </ResponsiveContainer>  
    )
}

ActivitySessionsBarChart.propTypes = {
    averageSession: PropTypes.array
}

export default ActivitySessionsBarChart