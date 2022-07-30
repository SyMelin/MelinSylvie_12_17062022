import PropTypes from 'prop-types'
import EnergySourcesListItem from '../EnergySourcesListItem'
import '../../styles/EnergySourcesCount.css'

/**
 * EnergySourcesList properties
 * 
 * @typedef { Object } Props
 * @prop { Object } keyData - keyData from the user's global data
 * @prop { Number} lineChartWidth - Length used as reference to handle the responsivity of the chart
 * @prop { Object.<{height: Number, width: Number }> } windowDimensions - dimensions of the current window
 */

 /**
 * React component: a list of energy sources
 * 
 * @type { React.FC<Props> }
 * @returns { React.ReactElement }
 */
function EnergySourcesList({ keyData, lineChartWidth, windowDimensions }) {
    const divWidth = windowDimensions.width >= 1200 ? (lineChartWidth - 60) / 3 : (lineChartWidth - 60) / 3 + 40
    const data = Object.entries(keyData)

    return (
        <ul
            className='energySourcesList'
            style={{width: divWidth}}
        >
            { data.map((element, index) => <EnergySourcesListItem
                                                key={`${element}-${index}`}
                                                element = {element}
                                            />         
            )}
        </ul>
    )
}

EnergySourcesList.propTypes = {
    /** keyData from the user's global data */
    keyData: PropTypes.object.isRequired,
    /** Length used as reference to handle the responsivity of the chart */
    lineChartWidth: PropTypes.number,
    /** dimensions of the current window */
    dimensions: PropTypes.object
}

export default EnergySourcesList