import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'
import '../../styles/ActivitySessionsBarChart.css'

function CustomTooltipBarChart({ payload, label, active }) {
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

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={activitySessions} width={835} height={320} margin={{top: 95, right: 29, left: 0, bottom: 23}} barGap="8" >
                <CartesianGrid stroke="#DEDEDE" strokeDasharray="2 2 2" vertical={false} />
                <XAxis dataKey='day' tickFormatter={numberOfDay} scale="point" padding={{ left: 10, right: 10 }} stroke="#DEDEDE" tick={{fill: '#9B9EAC', fontSize:'14', fontWeight:'500'}} dy={16} />
                <YAxis yAxisId="left" orientation="right" axisLine={false} tickLine={false} tick={{fill: '#9B9EAC', fontSize:'14', fontWeight:'500'}} type="number" /*domain={['dataMin', 'dataMax']}*/ dx={45} />
                <YAxis yAxisId="right" orientation="left" axisLine={false} tickLine={false} tick={false} />
                <Tooltip content={<CustomTooltipBarChart />} /*cursor={true}*/ />
                <Legend iconType='circley' iconSize='8' verticalAlign='middle' wrapperStyle={{ top: 24, left: 200, lineHeight: '40px', fontSize: '14', fontWeight: 500 }} />
                <Bar yAxisId="left" dataKey="kilogram" name="Poids (kg)" barSize={7} radius={[3, 3, 0, 0]} fill="#282D30" />
                <Bar yAxisId="right" dataKey="calories" name="Calories brulées (kCal)" barSize={7} radius={[3, 3, 0, 0]} fill="#E60000" />
            </BarChart>      
        </ResponsiveContainer>  
    )
}

ActivitySessionsBarChart.propTypes = {
    averageSession: PropTypes.array
}

export default ActivitySessionsBarChart