import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
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
        <ResponsiveContainer>
            <LineChart /*width={600} height={300}*/ data={averageSessions} margin={{ top: 80, right: 0, bottom: 50, left: -50 }}>
                <Line type="natural" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false} activeDot={{ r: 4 }} />
                <XAxis dataKey="day" tickFormatter={dayShort} axisLine={false} tickLine={false} tick={{fill: '#FFFFFF', fontSize:'12', fontWeight:'500', opacity:'0.5'}} dy={19.5} />
                <YAxis axisLine={false} tickLine={false} tick={false} />
                <Tooltip content={<CustomTooltip />} />
                <text x="34" y="29" dominantBaseline="hanging" fontSize="15" fontWeight="500" fill="#FFFFFF" opacity={0.5}><tspan x="34" y="29">Durée moyenne des</tspan><tspan x="34" y="53">sessions</tspan></text>
            </LineChart>
        </ResponsiveContainer>
        
    )
}

AverageSessionLineChart.propTypes = {
    averageSession: PropTypes.array
}

export default AverageSessionLineChart