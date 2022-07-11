import PropTypes from 'prop-types'
import EnergySourceListItem from '../EnergySourceListItem'
import '../../styles/EnergySourcesCount.css'

function EnergySourcesCount({keyData}) {
    const data = Object.entries(keyData)
  //  console.log(data)
    return (
        <ul className='energySourcesList'>
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