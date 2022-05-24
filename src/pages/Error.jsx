import { Link } from "react-router-dom";
function Error (){
    return (
        <div className="error">
            <h1>404</h1>
            <h4>Oups...cette page n'existe pas (encore)</h4>
            <Link to='/'>Retour à l'acceuil</Link>
        </div>
    )
} export default Error