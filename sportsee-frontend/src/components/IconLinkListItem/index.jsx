import PropTypes from 'prop-types'
import '../../styles/IconLinkListItem.css'

function IconLinkListItem({ icon }) {
    return (
        <li className="iconListItem"><a className='nav__link' href='#'><img src={icon} alt="" className='icon'/></a></li>
    )
}

IconLinkListItem.propTypes = {
    icon: PropTypes.string
}

IconLinkListItem.defaultProps = {
    icon: ''
}

export default IconLinkListItem