import "./Style.scss";

import RightArrowIcon from '../../assets/icons/right-arrow.svg';
import ChromeIcon from '../../assets/icons/google-chrome-icon.svg';
import EdgeIcon from '../../assets/icons/microsoft-edge-icon.svg';
import VideoPlayer from "../VideoPlayer/VideoPlayer";


import HomeVideo from '../../assets/videos/homepage.mp4'
import HoverVideo from '../../assets/videos/hover.mp4';
import RealtimeVideo from '../../assets/videos/Change Realtime.mp4';
import CopyCSSVideo from '../../assets/videos/copy css.mp4';
import DragDropVideo from '../../assets/videos/drag & drop.mp4';

import SaveTimeSVG from '../../assets/images/save-time.svg';
import Productivity from '../../assets/images/productivity.svg';
import Accuracy from '../../assets/images/accuracy.svg';
import Creativity from '../../assets/images/creativity.svg';

const Content = () => {
    return (
        <div className="inw-section-container">
            <div className="inw-branding-container">
                <div className="inw-branding-heading-container">
                    <span className="inw-branding-heading">Transform Your Website Design Effortlessly with Inspex.dev</span>
                </div>
                <div className="inw-sub-heading-container">
                    <span className="inw-sub-branding">Inspex.dev is a powerful yet user-friendly browser extension designed to enhance your web development and design experience. It integrates seamlessly with your browser, offering a robust set of tools to inspect, modify, and style your website elements effortlessly, right from the front end.</span>
                </div>
                <div className="inw-getstarted-container">
                    <button className="inw-primary-button">
                        <span className="inw-getnow-text">Coming Soon</span>
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
                    <VideoPlayer videoURL={HomeVideo} />
                </div>
            </div>
            <div className="inw-sub-section-container">
                <div className="inw-flex-row inw-section-card-container">
                    <div className="inw-section-content">
                        <div className="inw-section-header">
                            <span className="inw-section-heading">Intutive CSS Design</span>
                        </div>
                        <div className="inw-section-content-container">
                            <span className="inw-section-content">
                                Editing CSS is effortless with inspex.dev. Click on any element to view and modify its CSS properties directly in a popup window. Use sliders, dropdowns, and input fields to adjust colors, fonts, margins, and more. See changes in real-time for a true WYSIWYG (What You See Is What You Get) experience, making it easy for both seasoned developers and beginners to create polished web pages with minimal effort.
                            </span>
                        </div>
                    </div>
                    <div className="inw-section-player-container">
                        <div className="inw-player inw-player-1">
                            <VideoPlayer videoURL={HoverVideo} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="inw-sub-section-container">
                <div className="inw-flex-row inw-section-card-container">

                    <div className="inw-section-player-container">
                        <div className="inw-player inw-player-2">
                            <VideoPlayer videoURL={DragDropVideo} />
                        </div>
                    </div>

                    <div className="inw-section-content">
                        <div className="inw-section-header">
                            <span className="inw-section-heading">Drag and Drop</span>
                        </div>
                        <div className="inw-section-content-container">
                            <span className="inw-section-content">Revolutionize your web design workflow with drag and drop functionality. Easily move elements around your webpage by clicking and dragging them to your desired location. Intelligent snapping guides ensure perfect alignment, allowing you to quickly experiment with layouts without altering your codebase. Save time and enhance creativity with our flexible design tool.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inw-sub-section-container">
                <div className="inw-flex-row inw-section-card-container">
                    <div className="inw-section-content">
                        <div className="inw-section-header">
                            <span className="inw-section-heading">Real-Time Adjustments</span>
                        </div>
                        <div className="inw-section-content-container">
                            <span className="inw-section-content">Make instant adjustments to your website’s elements and see the changes immediately. Our real-time editing feature eliminates the need for constant refreshing or window toggling, providing immediate visual feedback. This capability is ideal for quick iterations and fine-tuning, making your workflow more efficient and effective.</span>
                        </div>
                    </div>

                    <div className="inw-section-player-container">
                        <div className="inw-player inw-player-3">
                            <VideoPlayer videoURL={RealtimeVideo} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="inw-sub-section-container">
                <div className="inw-flex-row inw-section-card-container">

                    <div className="inw-section-player-container">
                        <div className="inw-player inw-player-4">
                            <VideoPlayer videoURL={CopyCSSVideo} />
                        </div>
                    </div>

                    <div className="inw-section-content">
                        <div className="inw-section-header">
                            <span className="inw-section-heading">Copy CSS Code</span>
                        </div>
                        <div className="inw-section-content-container">
                            <span className="inw-section-content">Easily extract and implement updated CSS code after making adjustments. Click the “Copy CSS” button to generate clean, well-organized CSS that reflects your changes. This feature streamlines your development process, allowing you to quickly apply new styles to your projects without manually writing code, ensuring a smooth and productive workflow.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inw-sub-section-container">
                <div className="inw-section-content">
                    <div className="inw-section-header">
                        <span className="inw-section-heading">Streamline Your Web Development Workflow</span>
                    </div>
                    <div className="inw-card-container">
                        <div className="inw-card">
                            <div className="inw-card-logo-container">
                                <img src={SaveTimeSVG} className="inw-card-logo" />
                            </div>
                            <div className="inw-card-content-container">
                                <div className="inw-card-heading-container">
                                    <span className="inw-card-heading">Save Time</span>
                                </div>
                                <div className="inw-card-description-container">
                                    <span className="inw-card-description">
                                        Inspex.dev helps you save time by allowing real-time adjustments directly in your browser. Eliminate constant switching between your editor and website. Make quick changes with intuitive tools and drag and drop functionality, streamlining your workflow and focusing more on developing and designing.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="inw-card">
                            <div className="inw-card-logo-container">
                                <img src={Productivity} className="inw-card-logo" />
                            </div>
                            <div className="inw-card-content-container">
                                <div className="inw-card-heading-container">
                                    <span className="inw-card-heading">Enhance Productivity</span>
                                </div>
                                <div className="inw-card-description-container">
                                    <span className="inw-card-description">
                                        Boost productivity with inspex.dev. Simplify editing and styling web elements for efficient changes. Real-time adjustments provide immediate feedback, and easy CSS code copying ensures a smooth transition from prototype to final product. Achieve more in less time with a fluid workflow.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="inw-card-container">
                        <div className="inw-card">
                            <div className="inw-card-logo-container">
                                <img src={Accuracy} className="inw-card-logo" />
                            </div>
                            <div className="inw-card-content-container">
                                <div className="inw-card-heading-container">
                                    <span className="inw-card-heading">Improve Accuracy</span>
                                </div>
                                <div className="inw-card-description-container">
                                    <span className="inw-card-description">
                                        Ensure accuracy with real-time editing in Inspex.dev. See changes instantly, reducing errors and misalignments. Intelligent snapping guides maintain perfect alignment, ensuring your final product matches your vision with precision. Minimize trial and error for higher quality work.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="inw-card">
                            <div className="inw-card-logo-container">
                                <img src={Creativity} className="inw-card-logo" />
                            </div>
                            <div className="inw-card-content-container">
                                <div className="inw-card-heading-container">
                                    <span className="inw-card-heading">Boost Creativity</span>
                                </div>
                                <div className="inw-card-description-container">
                                    <span className="inw-card-description">
                                        Unleash creativity with Ispex.dev. Experiment with design elements and layouts using the intuitive interface and drag and drop functionality. Real-time changes encourage exploration and innovation, empowering you to bring unique visions to life and push creative boundaries.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Content;