import { Link } from "react-router-dom";
import error from '../assets/svg/error.svg'
/**
 * This function renders a 404 page
 * @returns The 404 page returns a designated error page
 */
function Error (){
    return (
        <div className="error">
            <img src={error} alt="Erreur 404" />
            <h4>Oups...cette page n'existe pas (encore)</h4>
            <Link to='/'>Retour à l'acceuil</Link>
        </div>
    )
} export default Error