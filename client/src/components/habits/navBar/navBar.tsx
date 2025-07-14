import './navBar.css';

export const NavBar = () => {
    return (
        <>
            <header>
                <nav className='navBar'>
                    <ul className='navList'>
                        <li className='navItem'>
                        </li>
                        <li className='navItem'>
                            <i className="fa-solid fa-plus"></i>
                        </li>
                        <li className='navItem'>
                            <i className="fa-solid fa-filter"></i>
                        </li>
                        <li className='navItem'>
                            <i className="fa-solid fa-gear"></i>
                        </li>
                        <li className='navItem'>
                            <i className="fa-solid fa-moon"></i>
                        </li>
                        <li className='navItem'>
                            <i className="fa-solid fa-circle-info"></i>
                        </li>
                        {/*<li className='navItem'><i className="fa-solid fa-ellipsis-vertical"></i></li>*/}
                    </ul>
                </nav>
            </header>
        </>
    )
}