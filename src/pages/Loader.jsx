/**
 * This function renders a loader to inform the user that the Data are getting to be fetched.
 * @returns Loader component returns a div with an animated loader
 */
function Loader() {
    return(
        <div className="loader">
            <div className="loader__icon"></div>
            <p>Chargement des données</p>
        </div>
    )
} export default Loader