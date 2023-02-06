import {NavLink} from 'react-router-dom';
import { routes } from '../../routers/routes';

export const Navbar = () => {
    return (
        <nav >
            <ul>
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
