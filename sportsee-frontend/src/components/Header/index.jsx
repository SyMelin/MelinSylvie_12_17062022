import NavHorizontal from '../../components/NavHorizontal'
import logo from '../../assets/logo.svg'
import '../../styles/Header.css'

 /**
 * React component: the header of the website
 * 
 * @type { React.FC }
 * @returns { React.ReactElement }
 */
function Header() {
    return (
        <header className='header'>
            <img className='logo' alt='Sportsee' src={logo} />
            <NavHorizontal />
        </header>  
    )
}

export default Header