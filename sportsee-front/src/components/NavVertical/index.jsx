import '../../styles/NavVertical.css'

function NavVertical() {
    return (
        <aside className='nav--vertical'>
            <ul>
                <li><a className='nav--vertical__link' href='#'>A</a></li>
                <li><a className='nav--vertical__link' href='#'>B</a></li>
                <li><a className='nav--vertical__link' href='#'>C</a></li>
            </ul>
            <p>Copyright, SportSee 2020</p>
        </aside>
    )
}

export default NavVertical