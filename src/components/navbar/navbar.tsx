import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { routes } from '../../routers/routes';
import { Search } from '../search/search';

const classes = {
    nabar:         'navbar',
    sidebarMenu:   'navbar__sidebar-menu',
    hambur:        'navbar__hambur',
    iconMenu:      'navbar__hambur__icon-menu',
    drawhambur:    'navbar__hambur__draw',
    hamburgerclose:'navbar__hambur__close',
    hamburgerline1:'navbar__hambur__line1',
    hamburgerline2:'navbar__hambur__line2',
    menuItems:     'navbar__menu-items',
    itemToggle:    'navbar__item-toggle',
}

export const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const hiddenSidebar = () => setSidebar(false);

    return (
        <header className={classes.nabar}>
            <nav className={classes.sidebarMenu}>
                <div className={classes.hambur} onClick={showSidebar}>
                    {
                        sidebar ?
                            <div className={classes.hamburgerclose}>
                                <span className={classes.hamburgerline1}></span>
                                <span className={classes.hamburgerline2}></span>
                            </div>
                        :
                            <div className={classes.iconMenu}>
                                <span className={classes.drawhambur}></span>
                            </div>
                    }
                </div>

                <ul className={sidebar ? `${classes.menuItems} active`:`${classes.menuItems}`}>
                    {
                        routes.map( ({to,name}) => (
                            <li key={to} className={classes.itemToggle}>
                                <NavLink 
                                    to={to} 
                                    className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                                    onClick={hiddenSidebar}
                                    itemProp="url"
                                    >
                                    {name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <Search />
            </nav>
        </header>
    )
}
