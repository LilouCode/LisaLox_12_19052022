import PropTypes from "prop-types";
/**
 * 
 * @param {url} src
 * @param {string} name
 * @param {number} keyInfo
 * @param {string} className 
 * @returns the KeyInfos component returns all the user key 
 * informations in the asside section with a icon and a tittle for each.
 */
function KeyInfos({src, name, keyInfo, className}){
    return(
        <div className="keyCard">
            <div className={className}>
                <img src={src} alt={name} />
            </div>
            <div className="card__infos">
                <h5>{keyInfo}</h5>
                <p>{name}</p>
            </div>
        </div>
    )
}
KeyInfos.protoTypes={
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    keyInfo: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired
}
export default KeyInfos