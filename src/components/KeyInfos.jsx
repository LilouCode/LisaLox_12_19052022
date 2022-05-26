import PropTypes from "prop-types";
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