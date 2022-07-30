import PropTypes from 'prop-types'
import '../../styles/IconLinkListItem.css'

/**
 * IconListListItem properties
 * 
 * @typedef { Object } Props
 * @prop { String } icon - icon refers to variable containing a path to a file
 */

 /**
 * React component: an item of the list of energy sources
 * 
 * @type { React.FC<Props> }
 * @returns { React.ReactElement }
 */
//The <a> tags are to be substituted by <Link> or <NavLink> elements from react-router-dom when the router is implemented
function IconLinkListItem({ icon }) {
    return (
        <li className="iconListItem"><a className='nav__link' href='#'><img src={icon} alt="" className='icon'/></a></li>
    )
}

IconLinkListItem.propTypes = {
    /**  icon refers to variable containing a path to a file */
    icon: PropTypes.string
}

IconLinkListItem.defaultProps = {
    icon: ''
}

export default IconLinkListItem