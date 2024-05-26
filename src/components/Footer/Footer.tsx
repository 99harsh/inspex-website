import "./Style.scss";
import HeartIcon from '../../assets/images/heart.svg';

const Footer = () => {
    return (
        <div className="footer-container">
            <span className="footer-text">
                Made with <img src={HeartIcon} className="heart-icon" /> by Dev Crafted Creations.
            </span>
        </div>
    )
}

export default Footer;