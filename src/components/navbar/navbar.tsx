import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { routes } from '../../routers/routes';

const classes = {
    sidebarMenu:'sidebar-menu',
    iconMenu:   'sidebar-menu__icon-menu',
    iconImg:    'sidebar-menu__icon-menu__icon-img',
    menuItems:  'sidebar-menu__menu-items',
}

export const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <nav className={classes.sidebarMenu} onClick={showSidebar}>
            <figure onClick={showSidebar} className={classes.iconMenu}>
                <img src="https://icon-library.com/images/hamburger-menu-icon-svg/hamburger-menu-icon-svg-17.jpg" 
                    alt="hamburger" 
                    className={classes.iconImg}
                    />
            </figure>
            <ul className={classes.menuItems}>
                {
                    routes.map( (route) => (
                        <li key={route.to}>
                            <NavLink to={route.to} className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                                {route.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
