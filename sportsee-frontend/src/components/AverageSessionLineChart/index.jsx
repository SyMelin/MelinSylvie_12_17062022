import { LineChart, Line, XAxis, YAxis, Tooltip, Label } from 'recharts';
import { useState } from 'react';
import PropTypes from 'prop-types'
import '../../styles/CustomTooltip.css'

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

function CustomLabel() {
  return (
    <text /*x="5%" y="5%" dominantBaseline="hanging"*/ fontSize="15" fontWeight="500" fill="#FFFFFF" opacity={0.5}><tspan x="13%" y="18%">Durée moyenne des</tspan><tspan x="13%" y="28%">sessions</tspan></text>

  )
}

/*
const CustomCursor = props => {
  const { x, y, width, height, stroke } = props;
  
  return <rect fill="red" stroke="black" x={x} y={y} width={width} height={height}> 
  </rect>;
}*/

function AverageSessionLineChart({averageSessions, chartWrapper, dimensions, ratio}) {
  const dayShort = (day) => {
    const weekdays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return weekdays[day - 1]
  }

  const [perc, setPerc] = useState(100);
  const [cursorX, setCursorX] = useState(-1000)
  const [cursorY, setCursorY] = useState(0)
  const onMouseMove = hoveredData => {
   // console.log(hoveredData);
    if (hoveredData && hoveredData.activePayload && hoveredData.activeCoordinate) {
      const hoveredX = hoveredData.activePayload[0].payload.day
     // console.log('hoveredX', hoveredX)
      const index = averageSessions.findIndex(d => d.day === hoveredX)
      const percentage = ((averageSessions.length - index - 1) * 100) / (averageSessions.length - 1)
      const positionX =  hoveredData.activeCoordinate.x
      const positionY =  hoveredData.activeCoordinate.y

      setCursorX(positionX)
      setCursorY(positionY)
      setPerc(100 - percentage)
    }
  };

  const onMouseOut = () => {
    setCursorX(-1000)
    setCursorY(0)
    setPerc(100)
  };

    return (
            <LineChart 
              width={(chartWrapper - 60) / 3}
              height={chartWrapper * 0.315}
              data={averageSessions}
              margin={{ top: 90 * ratio, right: 0, bottom: 50 * ratio, left: -60 }}
              padding={0}
              onMouseMove={onMouseMove}
              onMouseOut={onMouseOut}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                    <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4032)" />
                    <stop offset={`${perc - 30}%`} stopColor="rgba(255, 255, 255, 0.4532"/>
                    <stop offset={`${perc + 10}%`} stopColor={`rgba(255, 255, 255, ${0.4032 + 1 - perc / 100})`} />
                    <stop offset={`${100}%`} stopColor="#FFFFFF" />
                  </linearGradient>
                </defs>
                <Line type="natural" dataKey="sessionLength" stroke="url(#colorUv)" strokeWidth={2} dot={false} activeDot={{ stroke:'rgba(255, 255, 255, 0.1983)', strokeWidth:'10', fill:"#FFFFFF", r: 4 }} />
                <XAxis dataKey="day" tickFormatter={dayShort} axisLine={false} tickLine={false} tick={{fill:'#FFFFFF', fontSize:'12', fontWeight:'500', opacity:'0.5'}} dy={35 * ratio} />
                <YAxis axisLine={false} tickLine={false} tick={false}>
                  <Label content={<CustomLabel />} />
                </YAxis>
                <rect width="110%" height="100%" x={cursorX} y={0} fill="#000000" opacity={0.1} />
                <Tooltip /*cursor={<CustomCursor />}*//*offset={10}*/position={{x: (cursorX < ((chartWrapper - 60) / 3) - 50) ? cursorX + 10 : cursorX - 50, y: cursorY - 50}} cursor={false} content={<CustomTooltip />} />
            </LineChart>
    )
}

AverageSessionLineChart.propTypes = {
    averageSession: PropTypes.array
}

export default AverageSessionLineChart