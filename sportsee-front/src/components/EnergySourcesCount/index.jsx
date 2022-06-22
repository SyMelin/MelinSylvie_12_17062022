import PropTypes from 'prop-types'
import EnergySource from '../EnergySource'
import '../../styles/EnergySourcesCount.css'

function EnergySourcesCount({keyData}) {
    const data = Object.entries(keyData)
  //  console.log(data)
    return (
        <aside>
            <ul className='energySourcesList'>
            {data.map((element, index) => <EnergySource
                                            key={`${element}-${index}`}
                                            element = {element}
                                        />         
            )}
            </ul>
        </aside>
    )
}

EnergySourcesCount.propTypes = {
    keyData: PropTypes.object
}

export default EnergySourcesCount