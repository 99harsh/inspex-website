import "./Style.scss";

import RightArrowIcon from '../../assets/icons/right-arrow.svg';
import ChromeIcon from '../../assets/icons/google-chrome-icon.svg';
import EdgeIcon from '../../assets/icons/microsoft-edge-icon.svg';
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const Content = () => {
    return (
        <div className="inw-section-container">
            <div className="inw-branding-container">
                <div className="inw-branding-heading-container">
                    <span className="inw-branding-heading">Revolutionize Your Web Development with Inspex.dev</span>
                </div>
                <div className="inw-sub-heading-container">
                    <span className="inw-sub-branding">Easily debug and customized your webpage on the fly of our intuitive browser extension.</span>
                </div>
                <div className="inw-getstarted-container">
                    <button className="inw-primary-button">
                        <span className="inw-getnow-text">Get it now</span>
                        <img src={RightArrowIcon} className="inw-getnow-icon" />
                    </button>
                </div>
                <div className="inw-browser-icon-container">
                    <div className="inw-browser-icon-innercontainer">
                        <img src={ChromeIcon} className="inw-broswer-icon" />
                    </div>
                    <div className="inw-browser-icon-innercontainer">
                        <img src={EdgeIcon} className="inw-broswer-icon" />
                    </div>
                </div>
            </div>
            <div className="inw-home-player-container">
                <div className="inw-player">
                    <VideoPlayer />
                </div>
            </div>
        </div>
    )
}


export default Content;