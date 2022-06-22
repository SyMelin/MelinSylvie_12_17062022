import NavHorizontal from '../../components/NavHorizontal'
import logo from '../../assets/logo.svg'
import '../../styles/Header.css'

function Header() {
    return (
        <header className='header'>
            <img alt='Sportsee' src={logo} />
            <NavHorizontal />
        </header>  
    )
}

export default Header