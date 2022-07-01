import PropTypes from 'prop-types'
import yoga from '../../assets/yoga.svg'
import swim from '../../assets/swim.svg'
import bicycle from '../../assets/bicycle.svg'
import workout from '../../assets/workout.svg'
import IconListItem from '../IconListItem'
import '../../styles/NavVertical.css'


function NavVertical() {
    return (
        <aside className='nav--vertical'>
            <ul className='iconsList'>
                {[yoga, swim, bicycle, workout].map((icon, index) => (
                     <IconListItem key={`navVertical-icon-${index}`} icon={icon} />
                ))}
            </ul>
            <p>Copyright, SportSee 2020</p>
        </aside>
    )
}

export default NavVertical