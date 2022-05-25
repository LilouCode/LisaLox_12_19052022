import { Link } from "react-router-dom";
import error from '../assets/svg/error.svg'
function Error (){
    return (
        <div className="error">
            <img src={error} alt="Erreur 404" />
            <h4>Oups...cette page n'existe pas (encore)</h4>
            <Link to='/'>Retour à l'acceuil</Link>
        </div>
    )
} export default Error