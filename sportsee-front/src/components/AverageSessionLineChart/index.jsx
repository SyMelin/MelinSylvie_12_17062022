import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types'
import '../../styles/CustomTooltip.css'

const weekdays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']


function CustomTooltip({ payload, active }) {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }
  
    return null;
  }


function AverageSessionLineChart({averageSessions}) {
  const dayShort = (day) => {
    const weekdays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return weekdays[day - 1]
  }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={600} height={300} data={averageSessions} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
                <XAxis dataKey="day" tickFormatter={dayShort} axisLine={false} tickLine={false} tick={{fill: '#FFFFFF', fontSize:'12', fontWeight:'500'}} dy={19.5} />
                <YAxis axisLine={false} tickLine={false} tick={false} />
                <Tooltip content={<CustomTooltip />} />
                <text x="34" y="29" dominantBaseline="hanging" fontSize="15" fontWeight="500" fill="#FFFFFF">Durée moyenne des sessions</text>
            </LineChart>
        </ResponsiveContainer>
        
    )
}

AverageSessionLineChart.propTypes = {
    averageSession: PropTypes.array
}

export default AverageSessionLineChart