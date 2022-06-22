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
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={600} height={300} data={averageSessions} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="day"/>
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
            </LineChart>
        </ResponsiveContainer>
        
    )
}

AverageSessionLineChart.propTypes = {
    averageSession: PropTypes.array
}

export default AverageSessionLineChart