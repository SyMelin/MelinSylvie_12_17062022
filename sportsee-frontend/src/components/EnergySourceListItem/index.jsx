import PropTypes from 'prop-types'
import energySources from '../../utils/constantes/energySources'
import '../../styles/EnergySourceListItem.css'

function EnergySourceListItem({ element }) {
    const elementType = element[0].replace('Count', '')
    const elementCount = element[1]

    return (
        <li className={`energySource energySource--${elementType}`}>
            <div className='energySource__container'>
                <div className='energySource__frame'>
                    <img className='energySource__img' alt='' src={`${energySources[elementType].img}`} />
                </div>
                <div className='energySource__text'>
                    { elementType === 'calorie' ?
                        elementCount >= 1000 ? <p className="energySource__count">{new Intl.NumberFormat('en-UK').format(elementCount)}kCal</p>
                        : <p className="energySource__count">{elementCount}Cal</p>
                    : <p className="energySource__count">{elementCount}g</p>
                    }
                    <p className="energySource__type">{energySources[elementType].name}</p>
                </div>
            </div>
        </li> 
    )
}

EnergySourceListItem.propTypes = {
    element: PropTypes.array.isRequired,
}

export default EnergySourceListItem