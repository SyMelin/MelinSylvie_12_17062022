import '../../styles/NavHorizontal.css'

function NavHorizontal() {
    return (
        <div className="nav--horizontal">
                <ul>
                    <li><a className='nav--horizontal__link' href='#'>Accueil</a></li>
                    <li><a className='nav--horizontal__link' href='#'>Profil</a></li>
                    <li><a className='nav--horizontal__link' href='#'>Réglage</a></li>
                    <li><a className='nav--horizontal__link' href='#'>Communauté</a></li>
                </ul>
            </div>
    )
}

export default NavHorizontal