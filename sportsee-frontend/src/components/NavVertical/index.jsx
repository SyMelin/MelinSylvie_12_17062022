import PropTypes from 'prop-types'
import IconLinkListItem from '../IconLinkListItem'
import '../../styles/NavVertical.css'


function NavVertical({sportsList}) {
    return (
        <aside className='nav--vertical'>
            <ul className='iconsList'>
                {sportsList.map((icon, index) => (
                     <IconLinkListItem key={`navVertical-icon-${index}`} icon={icon} />
                ))}
            </ul>
            <p>Copyright, SportSee 2020</p>
        </aside>
    )
}

NavVertical.propTypes = {
    sportsList: PropTypes.array
}

export default NavVertical