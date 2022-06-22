import { BarChart, Bar, Cell, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'

function ActivitySessionsBarChart({activitySessions}) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={600} height={300} data={activitySessions}>
                <CartesianGrid stroke="#DEDEDE" strokeDasharray="2" />
                <XAxis dataKey="day" />
                <YAxis yAxisId="right" orientation="left" />
                <YAxis yAxisId="left" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="kilogram" barSize={7} fill="#282D30" />
                <Bar yAxisId="right" dataKey="calories" barSize={7} fill="#E60000" />
            </BarChart>      
        </ResponsiveContainer>  
    )
}

ActivitySessionsBarChart.propTypes = {
    averageSession: PropTypes.array
}

export default ActivitySessionsBarChart