import { NavLink } from "react-router-dom";
import logo from '../assets/svg/logo.svg'
function NavHorizontal(){
    return(
        <div className="nav">
            <img src={logo} alt="Logo" />
            <nav>
                <NavLink to="/"> Acceuil </NavLink>
                <NavLink to="/profil"> Profil </NavLink>
                <NavLink to="/settings"> Réglage </NavLink>
                <NavLink to="/community"> Communauté </NavLink>
            </nav>
        </div>
    )
}
export default NavHorizontal