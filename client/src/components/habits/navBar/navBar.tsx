import { Link } from 'react-router-dom';
import './navBar.css';

interface Params {
    modal: () => void
}

export const NavBar = ({modal}: Params) => {
    return (
        <>
            <header>
                <nav className='navBar'>
                    <div className='logo__container'>
                        <Link to={'/home'}></Link>
                    </div>
                    <ul className='navList'>

                        <li className='navItem'>
                            <button onClick={modal}>
                                <i className="fa-solid fa-plus"></i>
                            </button>
                        </li>
                        <li className='navItem'>
                            <button>
                                <i className="fa-solid fa-filter"></i>
                            </button>
                        </li>
                        <li className='navItem'>
                            <button>
                                <i className="fa-solid fa-gear"></i>
                            </button>
                        </li>
                        <li className='navItem'>
                            <button>
                                <i className="fa-solid fa-moon"></i>
                            </button>
                        </li>
                        <li className='navItem'>
                            <button>
                                <i className="fa-solid fa-circle-info"></i>
                            </button>
                        </li>
                        {/*<li className='navItem'><i className="fa-solid fa-ellipsis-vertical"></i></li>*/}
                    </ul>
                </nav>
            </header>
        </>
    )
}