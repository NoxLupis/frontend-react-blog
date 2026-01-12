import { NavLink } from "react-router-dom";
import './MenuLink.css'

function MenuLink({ to, children }) {
    return (
        <ul>
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "active-menu-link" : "default-menu-link"
            }
        >
            <li>{children}</li>
        </NavLink>
        </ul>
    );
}

export default MenuLink;