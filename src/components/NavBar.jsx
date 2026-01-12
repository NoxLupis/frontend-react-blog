import MenuLink from "./MenuLink";
import './NavBar.css'
import logo from '../assets/logo-medium.png'

const menuItems = [
    {to: "/", label: "Home"},
    {to: "/blogs", label: "Alle posts"},
    {to: "/create-post", label: "Nieuwe post maken"},
];

export default function Navbar() {
    return (
        <nav>
            <div className="image-wrapper-1">
                <img src={logo} alt="Company logo"/>
            </div>
            <ul>
                {menuItems.map((item) => (
                    <MenuLink key={item.to} to={item.to}>
                        {item.label}
                    </MenuLink>
                ))}
            </ul>
        </nav>
    );
}
