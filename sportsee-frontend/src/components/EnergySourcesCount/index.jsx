import PropTypes from 'prop-types'
import EnergySourceListItem from '../EnergySourceListItem'
import '../../styles/EnergySourcesCount.css'

function EnergySourcesCount({keyData, chartWrapper, dimensions}) {
    const divWidth = dimensions.width >= 1200 ? (chartWrapper - 60) / 3 : (chartWrapper - 60) / 3 + 40
    const data = Object.entries(keyData)
  //  console.log(data)
    return (
        <ul
            className='energySourcesList'
            style={{width: divWidth}}
        >
            {data.map((element, index) => <EnergySourceListItem
                                            key={`${element}-${index}`}
                                            element = {element}
                                        />         
            )}
        </ul>
    )
}

EnergySourcesCount.propTypes = {
    keyData: PropTypes.object
}

export default EnergySourcesCount