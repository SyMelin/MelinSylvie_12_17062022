import PropTypes from 'prop-types'
import '../../styles/IconListItem.css'

function IconListItem({icon}) {
    return (
        <li className="iconListItem"><a className='nav__link' href='#'><img src={icon} alt="" className='icon'/></a></li>
    )
}

IconListItem.propTypes = {
    icon: PropTypes.string
}

export default IconListItem