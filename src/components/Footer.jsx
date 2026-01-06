import './Footer.css';
import {currentYear} from "../assets/helpers/getCurrentYear.js";

function Footer() {
    return (
        <>
            <footer>
                <p>Blogventure © {currentYear} - ontwikkeld voor NOVI Hogeschool</p>
            </footer>
        </>
    );
}

export default Footer;