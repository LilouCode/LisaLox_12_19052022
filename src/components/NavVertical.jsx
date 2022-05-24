import iconCycling from '../assets/svg/iconCycling.svg';
import iconSwim from '../assets/svg/iconSwim.svg';
import iconZen from '../assets/svg/iconZen.svg';
import iconForce from '../assets/svg/iconForce.svg'
function NavVertical(){
    return (
        <div className="nav nav--y">
            <div className="icons">
                <img src= {iconZen} alt="méditation" />
                <img src={iconSwim} alt="natation" />
                <img src={iconCycling} alt="vélo" />
                <img src={iconForce} alt="musculation" />
            </div>
            <footer>
                <h5>Copiryght, SportSee 2020</h5>
            </footer>
        </div>
    )
}
export default NavVertical