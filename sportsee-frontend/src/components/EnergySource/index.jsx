import PropTypes from 'prop-types'
import energySources from '../../utils/constantes/energySources'
import '../../styles/EnergySource.css'

function EnergySource({element}) {
    const elementType = element[0].replace('Count', '')
    const elementCount = element[1]

    return (
        <li className='energySource'>
            <img className='energySource__img' alt='' src={`${energySources[elementType].img}`} />
            <div className='energySource__text'>
                { elementType === 'calorie' ?
                    elementCount >= 1000 ? <p className="energySource__count">{new Intl.NumberFormat('en-UK').format(elementCount)}kCal</p>
                    : <p className="energySource__count">{elementCount}Cal</p>
                : <p className="energySource__count">{elementCount}g</p>
                }
                <p className="energySource__type">{energySources[elementType].name}</p>
            </div>
        </li> 
    )
}

EnergySource.propTypes = {
    element: PropTypes.array,
}

export default EnergySource